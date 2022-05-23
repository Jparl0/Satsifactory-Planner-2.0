class MachineOre < ApplicationRecord
  belongs_to :board
  belongs_to :ore
  belongs_to :machine
end
