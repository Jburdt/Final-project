class ChangeReviewDataType < ActiveRecord::Migration[6.1]
  def change
    change_column :reviews, :review, :text
  end
end
