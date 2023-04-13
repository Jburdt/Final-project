class Review < ApplicationRecord
  belongs_to :category
  has_many :comments, dependent: :destroy
  has_many :commented_users, through: :comments, source: :user
  belongs_to :author, class_name: "User", foreign_key: "user_id"

  validates :title, presence: true
  validates :content, length: { maximum: 1000 }
end
