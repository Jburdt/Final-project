class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :comment_reviews, through: comments, source: :review 

  has_secure_password
end
