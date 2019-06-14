class UserPost < ApplicationRecord
	acts_as_votable
  has_many :comments, as: :commentable
  belongs_to :user
  mount_uploader :file, PictureUploader
  validates :user_id, presence: true
  validates :content, presence: true
end
