class MachineOreSerializer < ActiveModel::Serializer
  attributes :id, :ore_mined
  has_one :board
  has_one :ore
  has_one :machine
end
