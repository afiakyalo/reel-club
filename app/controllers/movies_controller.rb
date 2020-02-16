class MoviesController < ApplicationController
  def search
    @movie = MoviesWrapper.where("name ILIKE ?", "%#{params['search_string']}%")
    render json: @amovie
    binding.pry
  end
end
