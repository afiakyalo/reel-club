class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :genre, :users
end
