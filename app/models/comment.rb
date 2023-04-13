class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :review
  validates :comment, length: { maximum: 500 }
end
