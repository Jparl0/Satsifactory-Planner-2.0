class BoardItemSerializer < ActiveModel::Serializer
  attributes :id
  has_one :board
  has_one :item
end
