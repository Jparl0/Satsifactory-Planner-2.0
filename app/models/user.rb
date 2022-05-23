class User < ApplicationRecord

    has_secure_password

    has_many :boards
    has_many :board_items, through: :boards
    has_many :board_ores, through: :boards
    has_many :machine_ores, through: :boards

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true


end
