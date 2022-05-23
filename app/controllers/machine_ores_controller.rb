class MachineOresController < ApplicationController
  before_action :set_machine_ore, only: [:show, :update, :destroy]

  # GET /machine_ores
  def index
    @machine_ores = MachineOre.all

    render json: @machine_ores
  end

  # GET /machine_ores/1
  def show
    render json: @machine_ore
  end

  # POST /machine_ores
  def create
    @machine_ore = MachineOre.new(machine_ore_params)

    if @machine_ore.save
      render json: @machine_ore, status: :created, location: @machine_ore
    else
      render json: @machine_ore.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /machine_ores/1
  def update
    if @machine_ore.update(machine_ore_params)
      render json: @machine_ore
    else
      render json: @machine_ore.errors, status: :unprocessable_entity
    end
  end

  # DELETE /machine_ores/1
  def destroy
    @machine_ore.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_machine_ore
      @machine_ore = MachineOre.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def machine_ore_params
      params.require(:machine_ore).permit(:user_id, :ore_id, :machine_id)
    end
end
