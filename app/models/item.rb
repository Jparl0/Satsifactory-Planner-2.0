class Item < ApplicationRecord

    has_many :boards, through: :board_items
    has_many :machines, through: :machine_items

    has_many :board_items, dependent: :destroy
    has_many :machine_items, dependent: :destroy

end
