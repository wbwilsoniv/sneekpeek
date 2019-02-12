class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :sneakers, :sneak_pic, :pic_url
    rename_column :brands, :pic_url, :img_url
  end
end
