class BoardItemsController < ApplicationController
  before_action :set_board_item, only: [:show, :update, :destroy]

  # GET /board_items
  def index
    @board_items = BoardItem.all

    render json: @board_items
  end

  # GET /board_items/1
  def show
    render json: @board_item
  end

  # POST /board_items
  def create
    @board_item = BoardItem.new(board_item_params)

    if @board_item.save
      render json: @board_item, status: :created, location: @board_item
    else
      render json: @board_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /board_items/1
  def update
    if @board_item.update(board_item_params)
      render json: @board_item
    else
      render json: @board_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /board_items/1
  def destroy
    @board_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_board_item
      @board_item = BoardItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def board_item_params
      params.require(:board_item).permit(:User_id, :Item_id)
    end
end
