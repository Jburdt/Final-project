class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :length
      t.string :release_date
      
      t.timestamps
    end
  end
end
