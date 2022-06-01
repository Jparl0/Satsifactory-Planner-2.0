class OreSerializer < ActiveModel::Serializer
  attributes :id, :name, :ore_type, :purity_level, :purity_multiplier

  has_many :board_ores
  has_many :machine_ores
end
