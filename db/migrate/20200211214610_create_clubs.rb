class CreateClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :clubs do |t|
      t.string :name, null: false
      t.text   :description, null: false
      t.string :genre, null: false

      t.timestamps null: false
    end
  end
end
