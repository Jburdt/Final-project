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
  # def destroy
  #   deleted_review = find_review
  #   deleted_review.destroy
  #   head :no_content

    def destroy
      deleted_review = @current_user.reviews.find(params[:id])
      if deleted_review
        deleted_review.destroy
        head :no_content
      else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
      end
    end

  # end

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

  # FINDS ONE REVIEW
  def find_review
    one_review = Review.all.find(params[:id])
  end

end
