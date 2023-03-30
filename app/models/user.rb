class User < ApplicationRecord
  has_secure_password
  has_many :comments
  has_many :reviews, through: :comments
end
