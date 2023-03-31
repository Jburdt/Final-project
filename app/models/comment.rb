class Comment < ApplicationRecord
  belongs_to :review
  belongs_to :user 

  validates :comment, numericality: { greater_than: 0 }
end
