class CategoriesController < ApplicationController

  # GETS ALL CATEGORIES NOT GETTING ALL THE CATEGORIES
  def index
    categories = Category.all
    render json: categories, status: :ok
  end

end
