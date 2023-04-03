class Review < ApplicationRecord
  has_many :categories
  has_many :comments
  has_many :users, through: :comments
  belongs_to :user

  validates :title, presence: true
  validates :review, length: { maximum: 500 }
  validates :release_date, presence: true
  validates :categories, presence: true
  validates :length, presence: true
end
