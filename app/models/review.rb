class Review < ApplicationRecord
  # belongs_to :user
  has_many :categories
  has_many :comments
  has_many :users, through: :comments

  validates :title, presence: true
  validates :review, numericality: { greater_than: 0 }
  validates :release_date, presence: true
  validates :category, presence: true
  validates :length, presence: true
end
