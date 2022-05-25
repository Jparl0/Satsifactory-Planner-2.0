class CreateBoardItems < ActiveRecord::Migration[6.1]
  def change
    create_table :board_items do |t|
      t.integer :item_amount

      t.belongs_to :board, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
