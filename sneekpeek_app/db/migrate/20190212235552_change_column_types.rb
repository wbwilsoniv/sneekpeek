class ChangeColumnTypes < ActiveRecord::Migration[5.2]
  def change
    change_column :sneakers, :price, :string
    change_column :sneakers, :pic_url, :text
    change_column :brands, :img_url, :text
  end
end
