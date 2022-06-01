class MachineItemSerializer < ActiveModel::Serializer
  attributes :id, :is_active, :input_amount, :output_amount, :MI_name, :board_ore_id
  has_one :item
  has_one :machine
  has_one :board
end
