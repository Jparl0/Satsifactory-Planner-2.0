class MachineItemsController < ApplicationController
  before_action :set_machine_item, only: [:show, :update, :destroy]

  # GET /machine_items
  def index
    @machine_items = MachineItem.all

    render json: @machine_items
  end

  # GET /machine_items/1
  def show
    render json: @machine_item
  end

  # POST /machine_items
  def create
    @machine_item = MachineItem.new(machine_item_params)

    if @machine_item.save
      render json: @machine_item, status: :created, location: @machine_item
    else
      render json: @machine_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /machine_items/1
  def update
    if @machine_item.update(machine_item_params)
      render json: @machine_item
    else
      render json: @machine_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /machine_items/1
  def destroy
    @machine_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_machine_item
      @machine_item = MachineItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def machine_item_params
      params.require(:machine_item).permit(:item_id, :machine_id, :is_active, :input_amount, :output_amount, :MI_name, :board_ore_id)
    end
end
