class User < ApplicationRecord
  has_sercure_password
  has_many :reviews
  has_many :categories, through: :reviews
end
