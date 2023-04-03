class AddKeysToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :review_id, :integer
  end
end
