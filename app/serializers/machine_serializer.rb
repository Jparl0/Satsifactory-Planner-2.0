class MachineSerializer < ActiveModel::Serializer
  attributes :id, :name, :voltage, :input, :output, :multiplier, :input_resource1

  has_many :machine_ores
  has_many :machine_items
end
