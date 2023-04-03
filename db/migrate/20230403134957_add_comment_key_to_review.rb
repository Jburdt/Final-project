class AddCommentKeyToReview < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :comment_id, :integer
  end
end
