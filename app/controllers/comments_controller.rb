class CommentsController < ApplicationController
  skip_before_action :authorize, only: :index
  before_action :find_comment, only: [:show, :update, :delete]

  # GETS ALL COMMENTS
  def index
    comments = Comment.all
    render json: comments, status: :ok
  end

  # SHOWS ONE COMMENT
  def show
    render json: @comment, status: :ok
  end

  # CREATES NEW COMMENT
  def create
    new_comment = @current_user.comments.build(comment_params)
    if new_comment.save
      render json: new_comment, status: :created
    else
      render json: { errors: new_comment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # UPDATES ONE COMMENT
  def update
      if @comment
        @comment.update!(comment_params)
        render json: @comment, status: :ok
      else
        render json: { errors: ["Not authorized"] }, status: :unauthorized
      end
  end

  # DELETES ONE COMMENT
  def destroy
    if @comment
      @comment.destroy
      head :no_content
    else
      render json: { errors: ["Not authorized"] }, status: :unauthorized
    end
  end

  private

  # COMMENT PARAMS
  def comment_params
    params.permit(:comment, :user_id, :review_id)
  end

  # FINDS ONE COMMENT
  def find_comment
    @comment = @current_user.comments.find(params[:id])
  end

  # INVALID DATA RESPONSE
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end