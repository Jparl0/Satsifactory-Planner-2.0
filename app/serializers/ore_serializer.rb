class OreSerializer < ActiveModel::Serializer
  attributes :id, :name, :ore_type, :purity_level
end
