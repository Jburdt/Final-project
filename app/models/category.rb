class Category < ApplicationRecord
  belongs_to :review

  validates :category, presence: true
end
