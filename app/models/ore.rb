class Ore < ApplicationRecord

    has_many :boards, through: :board_ores
    has_many :boards, through: :machine_ores
    has_many :machines, through: :machine_ores

    has_many :board_ores, dependent: :destroy
    has_many :machine_ores, dependent: :destroy

end
