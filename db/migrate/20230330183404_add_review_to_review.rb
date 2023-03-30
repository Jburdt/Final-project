class AddReviewToReview < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :review, :string
  end
end
