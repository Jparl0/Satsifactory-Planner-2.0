class MachineItemSerializer < ActiveModel::Serializer
  attributes :id, :is_active, :input_amount, :output_amount
  has_one :item
  has_one :machine
  has_one :board
end
