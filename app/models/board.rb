class Board < ApplicationRecord

    belongs_to :user

    has_many :ores, through: :board_ores, through: :machine_ores
    has_many :items, through: :board_items
    has_many :ores, through: :machine_ores

    has_many :machine_ores, dependent: :destroy
    has_many :board_ores, dependent: :destroy
    has_many :board_items, dependent: :destroy
    has_many :machine_items, dependent: :destroy

    validates :name, presence: true, uniqueness: true
end
