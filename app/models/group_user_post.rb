class GroupUserPost < ApplicationRecord
  belongs_to :user
  belongs_to :group
  has_many :comments, as: :commentable
end
