class MachineSerializer < ActiveModel::Serializer
  attributes :id, :name, :voltage, :input, :output

  has_many :machine_ores
  has_many :machine_items
end
