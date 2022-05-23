class BoardItem < ApplicationRecord
  belongs_to :board
  belongs_to :item
end
