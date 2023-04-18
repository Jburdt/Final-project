class CategorySerializer < ActiveModel::Serializer
  attributes only :title, :review_id
end
