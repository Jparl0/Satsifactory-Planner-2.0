class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :ore_base, :ore_required

  has_many :board_items
  has_many :machine_items
end
