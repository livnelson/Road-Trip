class StatesController < ApplicationController
  skip_before_action :authorize, only: :index
  
  def index
    render json: State.all, status: :ok
  end
end
