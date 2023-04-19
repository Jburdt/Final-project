class ReviewsController < ApplicationController
  before_action :find_review, only: [:update, :destroy]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # SHOWS ALL REVIEWS
  def index
    reviews = Review.all
    render json: reviews, status: :ok
  end

  # SHOWS ONE REVIEW BY ID
  def show
    review = Review.all.find_by(id: params[:id])
    render json: review
  end

  # CREATE NEW REVIEW
  def create
    new_review = Review.create!(review_params)
    render json: new_review, status: :created
  end

  # DELETES REVIEW
    def destroy
      if @review
        @review.destroy
        head :no_content
      else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
      end
    end

  # UPDATES REVIEW
  def update
      if @review
        @review.update!(review_params)
        render json: @review, status: :ok
      else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
      end
  end

  private

  # PARAMS FOR REVIEW
  def review_params
    params.permit(:title, :content, :user_id, :category_id, :image)
  end

  # FINDS ONE REVIEW
  def find_review
    @review = @current_user.reviews.find_by(id: params[:id])
  end

  # INVALID DATA RESPONSE
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
