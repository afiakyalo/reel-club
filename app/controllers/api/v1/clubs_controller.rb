class Api::V1::ClubsController < ApplicationController
  def index
    render json: Club.all
  end
end
