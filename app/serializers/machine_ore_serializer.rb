class MachineOreSerializer < ActiveModel::Serializer
  attributes :id, :ore_mined, :MO_name
  has_one :board
  has_one :ore
  has_one :machine
end
