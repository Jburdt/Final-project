class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :user_id, :image, :category_id, :author, :created_at, :updated_at

  has_many :comments
  belongs_to :category
end
