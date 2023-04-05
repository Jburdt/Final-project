class User < ApplicationRecord
  has_secure_password
  has_many :comments
  has_many :reviews, through: :comments
  
  validates :name, presence: true
  validates :username, { presence: true, uniqueness: true }
  validates :password, presence: true
  validates :admin, inclusion: [true, false]
end
