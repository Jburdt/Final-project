class User < ApplicationRecord
has_many :reviews, dependent: :destroy
has_many :comments, dependent: :destroy
has_many :commented_reviews, through: :comments, source: :review

has_secure_password
validates :username, :name, presence: true
validates :username, :name, uniqueness: true
end
