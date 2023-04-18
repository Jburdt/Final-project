class CommentsController < ApplicationController

  # GETS ALL COMMENTS
  def index
    comments = Comment.all
    render json: comments, status: :ok
  end

  # SHOWS ONE COMMENT
  def show
    comment = Comment.all.find_by(id: params[:id])
    render json: comment, status: :ok
  end

  # CREATES NEW COMMENT
  def create
    comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end

  # UPDATES ONE COMMENT
  def update
    comment = find_comment
    comment.update!(comment_params)
    render json: comment, status: :ok
  end

  # DELETES ONE COMMENT
  def destroy
    comment = find_comment
    comment.destroy
    head :no_content
  end

  private

  # COMMENT PARAMS
  def comment_params
    params.permit(:comment, :user_id, :review_id)
  end

  # FINDS ONE COMMENT
  def find_comment
    comment = Comment.all.find(params[:id])
  end

end
