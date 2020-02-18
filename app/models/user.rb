class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, presence: true
  validates :city, presence: true
  validates :state, presence: true

  mount_uploader :avatar, AvatarUploader

  has_many :subscriptions
  has_many :clubs, through: :subscriptions
end
