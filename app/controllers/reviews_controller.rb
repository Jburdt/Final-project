class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  skip_before_action :authorize, only: [:index]

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
    category = Category.find_or_create_by(category: params["category"])
    review = @current_user.reviews.find_or_create_by(review_params.merge(category: category))
    if review.valid?
      render json: review, status: :created
    else
      render json: { errors: [review.errors.full_messages] }, status: :unprocessable_entity
    end
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

  # UPDATES REVIEW
  def update
    review = @current_user.reviews.find_by(id: params[:id])
    if review 
      category = Category.find_or_create_by(category: params["category"])
      category.valid?
      review.update!(review_params.merge(category: category))
      render json: review, status: :ok
    else
      render json: { errors: ["Invalid data"] }, status: :unprocessable_entity
    end
  end

  private

  #GETS ON REVIEW
  def find_review
    Review.find_by(id: params[:id])
  end

  # PERMMITTED PARAMS
  def review_params
    params.permit(:title, :content, :user_id, :category_id, :image)
  end

  # INVALID DATA RESPONSE
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
