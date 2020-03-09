class Api::V1::ClubsController < ApplicationController
  def index
    render json: Club.all
  end

  def show
    render json: Club.find(params["id"])
  end

  def update
    club = Club.find(params["id"])
    if !club.users.include?(current_user)
      club.users.push(current_user)
      render json: club.users
    else
      club.users.delete(current_user)
      render json: club.users
    end
  end
end
