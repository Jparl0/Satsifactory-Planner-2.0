class OreSerializer < ActiveModel::Serializer
  attributes :id, :name, :ore_type, :purity_level

  has_many :board_ores
  has_many :machine_ores
end
