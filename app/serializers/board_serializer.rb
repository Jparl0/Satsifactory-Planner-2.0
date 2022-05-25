class BoardSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  
  has_one :user
  
  has_many :machine_ores
  has_many :board_items
  has_many :board_ores
  has_many :machine_items
  
end
