class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :user_id, :image_url, :category

  has_many :comments
end
