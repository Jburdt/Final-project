class RenameTrueToAdmin < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :true, :admin
  end
end
