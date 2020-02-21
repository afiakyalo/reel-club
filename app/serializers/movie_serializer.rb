class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :synopsis, :release_date, :rating, :poster
end
