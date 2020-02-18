class MoviesController < ApplicationController
  def search
    binding.pry
    @search = TMDb::Search.new
    @search.query(search_params)
    render json: @amovie
  end

  private

  def search_params
    params.require(:movie).permit(:search)
  end
end
