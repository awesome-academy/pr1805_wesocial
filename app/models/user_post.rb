class UserPost < ApplicationRecord
	acts_as_votable
  has_many :comments, as: :commentable, dependent: :destroy
	accepts_nested_attributes_for :comments,
		:reject_if => proc { |attributes| attributes[:comment_content].blank? },
    :allow_destroy => true
  belongs_to :user
  mount_uploader :file, PictureUploader
  validates :user_id, presence: true
  validates :content, presence: true
end
