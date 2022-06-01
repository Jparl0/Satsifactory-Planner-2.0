class CreateMachineItems < ActiveRecord::Migration[6.1]
  def change
    create_table :machine_items do |t|
      t.boolean :is_active
      t.string :MI_name
      t.integer :input_amount
      t.integer :output_amount

      t.belongs_to :board, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true
      t.belongs_to :machine, null: false, foreign_key: true
      t.belongs_to :board_ore, null: true, foreign_key: true

      t.timestamps
    end
  end
end
