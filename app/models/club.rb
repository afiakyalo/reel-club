class Club < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :genre, presence:true

  has_many :subscriptions
  has_many :users, through: :subscriptions
end
