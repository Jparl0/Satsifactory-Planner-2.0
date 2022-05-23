class MachineItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :item
  has_one :machine
end
