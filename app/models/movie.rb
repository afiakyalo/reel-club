class Movie < ApplicationRecord
  validates :title, presence: true
  validates :release_date, presence: true
  validates :synopsis, presence: true
  validates :rating, presence: true

  has_many :users
  has_many :clubs
end
