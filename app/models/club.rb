class Club < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :genre, presence:true
end
