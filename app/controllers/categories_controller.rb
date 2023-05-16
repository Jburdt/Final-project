class CategoriesController < ApplicationController
  skip_before_action :authorize, only: [:index]

  # GETS ALL CATEGORIES 
  def index
    categories = Category.all
    render json: categories, status: :ok
  end

end
