class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :review_id, :user

  belongs_to :review
  belongs_to :user
end
