class CreateSneakers < ActiveRecord::Migration[5.2]
  def change
    create_table :sneakers do |t|
      t.string :brand
      t.string :model
      t.integer :price
      t.string :release_date
      t.references :brand, foreign_key: true

      t.timestamps
    end
  end
end
