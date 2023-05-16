class ReviewsController < ApplicationController
  skip_before_action :authorize, only: [:index]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # SHOWS ALL REVIEWS
  def index
    reviews = Review.all
    render json: reviews, status: :ok
  end

  # SHOWS ONE REVIEW BY ID
  def show
    review = find_review
    render json: review
  end

  # CREATE NEW REVIEW
  def create
    new_review = Review.create!(review_params)
    render json: new_review, status: :created
  end

  # DELETES REVIEW 
    def destroy
      deleted_review = @current_user.reviews.find_by(id: params[:id])
      if deleted_review
        deleted_review.destroy
        head :no_content
      else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
      end
    end

  # REVIEW CATEGORIES
    def categories
      categories = Review.all.map { |review| review.category }
      render json: categories, status: :ok
    end

  # UPDATES REVIEW
  def update
    review = @current_user.reviews.find(params[:id])
      if review
        review.update!(review_params)
        render json: review, status: :ok
      else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
      end
  end

  private

  # PARAMS FOR REVIEW
  def review_params
    params.permit(:title, :content, :user_id, :category_id, :image)
  end

  # INVALID DATA RESPONSE
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
