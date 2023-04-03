class Category < ApplicationRecord
  has_many :reviews

  validates :category, presence: true
end
