class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.integer :views, null: false, default: 0
      t.text :description, null: false, default: 'No description'

      t.timestamps
    end
    add_index :videos, :title
    add_index :videos, :owner_id
  end
end
