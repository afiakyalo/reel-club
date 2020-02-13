require "rails_helper"

RSpec.describe Api::V1::ClubsController, type: :controller do
  let!(:test_club) { Club.create(
    name: "Jailbirds",
    description: "Test the controller",
    genre: "Comedy"
  ) }
  let!(:club_two_park) { Club.create(
    name: "GamersKings",
    description: "Test the controller too",
    genre: "Thriller"
  ) }

  describe "GET#index" do
    it "should return a list of all the clubs" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 2

      expect(returned_json[0]["name"]).to eq "Jailbirds"
      expect(returned_json[0]["description"]).to eq "Test the controller"
      expect(returned_json[0]["genre"]).to eq "Comedy"

      expect(returned_json[1]["name"]).to eq "GamersKings"
      expect(returned_json[1]["description"]).to eq "Test the controller too"
      expect(returned_json[1]["genre"]).to eq "Thriller"
    end
  end
end
