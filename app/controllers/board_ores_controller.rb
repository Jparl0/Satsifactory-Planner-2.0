class BoardOresController < ApplicationController
  before_action :set_board_ore, only: [:show, :update, :destroy]

  # GET /board_ores
  def index
    @board_ores = BoardOre.all

    render json: @board_ores
  end

  # GET /board_ores/1
  def show
    render json: @board_ore
  end

  # POST /board_ores
  def create
    @board_ore = BoardOre.new(board_ore_params)

    if @board_ore.save
      render json: @board_ore, status: :created, location: @board_ore
    else
      render json: @board_ore.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /board_ores/1
  def update
    if @board_ore.update(board_ore_params)
      render json: @board_ore
    else
      render json: @board_ore.errors, status: :unprocessable_entity
    end
  end

  # DELETE /board_ores/1
  def destroy
    @board_ore.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_board_ore
      @board_ore = BoardOre.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def board_ore_params
      params.require(:board_ore).permit(:ore_amount, :board_id, :ore_id)
    end
end
