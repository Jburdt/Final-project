class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :user_id, :image, :category

  has_many :comments
end
