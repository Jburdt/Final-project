class Review < ApplicationRecord
  has_many :categories
  has_many :comments
  has_many :users, through: :comments

  validates :title, presence: true
  validates :review, length: { maximum: 1000 }
  validates :release_date, presence: true
  validates :categories, presence: true
  validates :length, presence: true
end
