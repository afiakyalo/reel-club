class Api::V1::MoviesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def search
    binding.pry
    @movie = Tmdb::Search(search_params)
    render json: @amovie
  end

  private

  def search_params
    params.require(:movie).permit(:search)
  end

  # def index
  #   movie_wrapper = MoviesWrapper.retrieve_movies("mad max")
  #   render json: movie_wrapper.movie_urls
  # end
  #
  # def search
  #   binding.pry
  #   @movie = MoviesWrapper.where("name ILIKE ?", "%#{params['search_string']}%")
  #   render json: @amovie
  #   binding.pry
  # end
end
