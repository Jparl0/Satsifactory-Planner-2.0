class CreateMachineItems < ActiveRecord::Migration[6.1]
  def change
    create_table :machine_items do |t|
      t.belongs_to :item, null: false, foreign_key: true
      t.belongs_to :machine, null: false, foreign_key: true

      t.timestamps
    end
  end
end
