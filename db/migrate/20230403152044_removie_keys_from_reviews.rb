class RemovieKeysFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :category_id, :integer
    remove_column :reviews, :comment_id, :integer
  end
end
