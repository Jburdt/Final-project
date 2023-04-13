class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :content
      t.integer :user_id
      t.integer :category_id
      t.string :image

      t.timestamps
    end
  end
end
