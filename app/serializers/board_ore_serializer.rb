class BoardOreSerializer < ActiveModel::Serializer
  attributes :id, :ore_amount, :board_id, :machine_ores
  has_one :board
  has_one :ore
  has_one :machine_ores
end
