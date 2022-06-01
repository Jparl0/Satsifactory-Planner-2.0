class CreateMachines < ActiveRecord::Migration[6.1]
  def change
    create_table :machines do |t|
      t.string :name
      t.integer :voltage
      t.integer :input
      t.integer :output
      t.integer :multiplier
      t.string :input_resource1, null: true
      t.timestamps
    end
  end
end
