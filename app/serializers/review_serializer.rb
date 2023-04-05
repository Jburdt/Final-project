class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :title, :category_id, :user_id
end
