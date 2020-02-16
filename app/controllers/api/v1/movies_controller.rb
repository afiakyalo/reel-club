class Api::V1::MoviesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    movie_wrapper = MoviesWrapper.retrieve_movies("mad max")
    render json: movie_wrapper.movie_urls
  end

  def search
    @movie = MoviesWrapper.where("name ILIKE ?", "%#{params['search_string']}%")
    render json: @amovie
    binding.pry
  end
end
