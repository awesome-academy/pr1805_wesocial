class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
  acts_as_votable cacheable_strategy: :update_columns
end
