class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.string :name
      t.text :about
      t.integer :founded
      t.string :hq

      t.timestamps
    end
  end
end
