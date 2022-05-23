class CreateOres < ActiveRecord::Migration[6.1]
  def change
    create_table :ores do |t|
      t.string :name
      t.string :ore_type
      t.string :purity_level

      t.timestamps
    end
  end
end
