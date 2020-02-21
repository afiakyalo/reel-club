class Api::V1::MoviesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, only: [:create]

  def index
    movie_wrapper = MoviesWrapper.retrieve_movies(query)
    render json: movie_wrapper.movie_urls
  end

  def search
    query = search_params["query"]
    all_movies = MoviesWrapper.retrieve_movies(query)

    if all_movies.length < 1
      flash.now[:error] = "Could not find the movie"
      render json: { error: "Movie not found" }, status: :unprocessable_entity
    else
      render json: all_movies
    end
  end

  def create
    movie = Movie.new(selected_params)
    club = Club.find(params["club_id"])
    binding.pry

    if club.movies.exists?(['title LIKE ?', "#{movie.title}"])
      flash.now[:error] = "Club already watched this movie"
      render json: { error: movie.errors.full_messages }
      return false
    end

    if movie.save
      render json: { movie: movie }
    else
      render json: { error: movie.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def search_params
    params.require(:search_string).permit(:query)
  end

  def selected_params
    params.require(:movie).permit(:title, :synopsis, :release_date, :rating, :poster, :club_id)
  end
end
