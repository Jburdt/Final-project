class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  skip_before_action :authorize, only: [:create, :index]

  # RENDER ALL USERS
  def index
    users = User.all
    render json: users, status: :ok
  end

  # SIGNUP
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # SHOW EXISTING USER / KEEPS USER LOGGED IN
  def show
    @user = User.find_by(id: session[:user_id])
    render json: @user
  end

  # UPDATES USER
  def update
    @user = find_user
    @user.update(user_params)
    render json: @user
  end

  # DELETE USER
  def destroy
    @user = find_user
    @user.destroy
    head :no_content
  end

  private

  # GETS USER BY ID
  def find_user
    @user = User.all.find_by(id: params[:id])
  end

  # USER STRONG PARAMS
  def user_params
    params.permit(:name, :username, :password)
  end

   # INVALID DATA RESPONSE
   def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
   end

end
