class BoardOreSerializer < ActiveModel::Serializer
  attributes :id
  has_one :board
  has_one :ore
end
