class MachineItem < ApplicationRecord
  belongs_to :board
  belongs_to :item
  belongs_to :machine
end
