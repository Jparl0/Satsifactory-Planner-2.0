class OresController < ApplicationController
  before_action :set_ore, only: [:show]
# , :update, :destroy

  # GET /ores
  def index
    @ores = Ore.all

    render json: @ores
  end

  # GET /ores/1
  def show
    render json: @ore
  end

  # # POST /ores
  # def create
  #   @ore = Ore.new(ore_params)

  #   if @ore.save
  #     render json: @ore, status: :created, location: @ore
  #   else
  #     render json: @ore.errors, status: :unprocessable_entity
  #   end
  # end

  # # PATCH/PUT /ores/1
  # def update
  #   if @ore.update(ore_params)
  #     render json: @ore
  #   else
  #     render json: @ore.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /ores/1
  # def destroy
  #   @ore.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ore
      @ore = Ore.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ore_params
      params.require(:ore).permit(:name, :ore_type, :purity_level, :purity_multiplier)
    end
end
