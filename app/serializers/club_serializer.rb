class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :genre, :users, :movies, :current_user

  def current_user
    scope
  end
end
