class CreateMachineOres < ActiveRecord::Migration[6.1]
  def change
    create_table :machine_ores do |t|
      t.integer :ore_mined

      t.belongs_to :board, null: false, foreign_key: true
      t.belongs_to :ore, null: false, foreign_key: true
      t.belongs_to :machine, null: false, foreign_key: true

      t.timestamps
    end
  end
end
