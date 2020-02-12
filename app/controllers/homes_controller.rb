class HomesController < ApplicationController
  def index
    clubs = Club.all
  end
end
