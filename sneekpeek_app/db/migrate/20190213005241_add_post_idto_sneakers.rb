class AddPostIdtoSneakers < ActiveRecord::Migration[5.2]
  def change
    add_column :sneakers, :post_id, :integer
  end
end
