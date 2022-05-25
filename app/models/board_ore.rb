class BoardOre < ApplicationRecord
  belongs_to :board
  belongs_to :ore

  has_one :machine_ores, through: :board
end
