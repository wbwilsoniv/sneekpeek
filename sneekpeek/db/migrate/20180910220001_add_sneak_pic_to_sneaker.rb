class AddSneakPicToSneaker < ActiveRecord::Migration[5.2]
  def change
    add_column :sneakers, :sneak_pic, :string
  end
end
