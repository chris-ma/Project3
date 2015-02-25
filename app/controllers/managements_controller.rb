class ManagementsController < ApplicationController

  before_action :find_management, only: [:update, :destroy]

  def index
    render json: Management.all
  end

  def create
    @management = Management.create(management_params)
    render json: @management
  end

  def update
    @management.update(management_params)
    render json: @management
  end

  def destroy
    @management.destroy
    render json: { status: "OK" }
  end

  private

  def find_management
    @management = Management.find(params[:id])
  end

  def management_params
    params.require(:management).permit(:name, :rows, :columns)
  end
end
