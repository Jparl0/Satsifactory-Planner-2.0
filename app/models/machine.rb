class Machine < ApplicationRecord

    has_many :ores, through: :machine_ores
    has_many :items, through: :machine_items

    has_many :machine_items, dependent: :destroy
    has_many :machine_ores, dependent: :destroy

end
