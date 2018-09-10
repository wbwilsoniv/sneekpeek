class AddPicUrlToBrand < ActiveRecord::Migration[5.2]
  def change
    add_column :brands, :pic_url, :string
  end
end
