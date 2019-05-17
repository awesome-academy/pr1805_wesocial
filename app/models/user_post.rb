class UserPost < ApplicationRecord
  has_many :comments, as: :commentable
end
