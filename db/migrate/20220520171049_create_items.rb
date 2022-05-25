class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :ore_base
      t.integer :ore_required

      t.timestamps
    end
  end
end
