class User < ApplicationRecord
has_many :reviews, dependent: :destroy
has_many :comments, dependent: :destroy
has_many :commented_reviews, through: :comments, source: :review

has_secure_password
validates :admin, inclusion: [true, false]
validates :username, :name, uniqueness: true
validates :password, length: { in: 6..20 }
end