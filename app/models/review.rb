class Review < ApplicationRecord
  belongs_to :user
  has_many :categories
  has_many :comments, through: :users

  validates :title, presence: true
  validates :length, numericality: { greater_than: 10 }
  validates :release_date, presence: true
  validates :category, presence: true
end
