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

  def updated_ore_mined
    @machine_ores = MachineOre.all

    # byebug
    @machine_ores.map do |machine_ore|
      # byebug
      machine_ore.update(ore_mined: ((machine_ore.machine.output) * (machine_ore.ore.purity_multiplier)), MO_name: ((machine_ore.ore.name) + '-' + (machine_ore.machine.name)))
    # if @machine_ores.update(machine_ore_params)
      # else
      # render json: @machine_ores.errors, status: :unprocessable_entity
      # end
    end
    render json: @machine_ores
    
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_machine_ore
      @machine_ore = MachineOre.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def machine_ore_params
      params.require(:machine_ore).permit(:ore_mined, :board_id, :ore_id, :machine_id, :MO_name)
    end

    # def board_ore_params
    #   params.require(:board_ore).permit(:ore_amount, :board_id, :ore_id, :machine_id, :MO_name)
    # end
end
