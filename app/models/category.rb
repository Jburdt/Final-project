class Category < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :category, presence: true
end
