class CreateBoardOres < ActiveRecord::Migration[6.1]
  def change
    create_table :board_ores do |t|
      t.belongs_to :board, null: false, foreign_key: true
      t.belongs_to :ore, null: false, foreign_key: true

      t.timestamps
    end
  end
end
