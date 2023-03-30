class AddCategoryToCategories < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :category, :string
  end
end
