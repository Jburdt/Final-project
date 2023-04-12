class Review < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :comment_users, through: :comments, source: :user
  belongs_to :author, class_name: "User", foreign_key: "user_id"
end
