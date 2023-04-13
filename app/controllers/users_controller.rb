class UsersController < ApplicationController
  skip_before_action :authorize, only: :create
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # RENDER ALL USERS
  def index
    byebug
    users = User.all
    render json: users
  end

  # SIGNUP
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # SHOW EXISTING USER / KEEPS USER LOGGED IN
  def show
    @user =  User.find_by(id: session[:user_id])
    render json: @user
  end

  # DELETES USER
  def update
    @user = find_user
    @user.update(user_params)
    render json: @user
  end

  private

  # GETS USER BY ID
  def find_user
    @user = User.all.find(params[:id])
  end

  # USER STRONG PARAMS
  def user_params
    params.permit(:name, :username, :password, :admin)
  end

   # INVALID DATA RESPONSE
   def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
   end

end
