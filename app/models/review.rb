class Review < ApplicationRecord
  belongs_to :categories
  belongs_to :reviews
  # has_many :comments
end
