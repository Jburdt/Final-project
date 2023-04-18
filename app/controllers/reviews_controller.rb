class ReviewsController < ApplicationController

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

  # DELETES REVIEW TEST OUT STILL
  def destroy
    deleted_review = find_review
    deleted_review.destroy
    head :no_content
  end

  # UPDATES REVIEW
  def update
    updated_review = find_review
    updated_review.update(review_params)
    render json: updated_review, status: :ok
  end

  private

  # PARAMS FOR REVIEW
  def review_params
    params.permit(:title, :content, :user_id, :category_id, :image)
  end

  # FINDS ONE REVIEW
  def find_review
    one_review = Review.all.find(params[:id])
  end

end
