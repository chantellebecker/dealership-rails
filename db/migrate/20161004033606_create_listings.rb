class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.string :make
      t.string :model
      t.text :details

      t.timestamps
    end
  end
end
