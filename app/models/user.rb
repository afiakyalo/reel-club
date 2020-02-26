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
  after_initialize :set_default_avatar, if: :new_record?

  private

  def set_default_avatar
    self.avatar ||= "https://reel-club-development.s3.amazonaws.com/uploads/user/avatar/3/user_default_2.png"
  end
end
