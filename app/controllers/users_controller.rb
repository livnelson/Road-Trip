class UsersController < ApplicationController

  def show
    user = User.find(params[:id])
    session[:id] = user.id
    render json: user, status: :accepted
  end

end
