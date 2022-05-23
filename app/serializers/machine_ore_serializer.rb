class MachineOreSerializer < ActiveModel::Serializer
  attributes :id
  has_one :board
  has_one :ore
  has_one :machine
end
