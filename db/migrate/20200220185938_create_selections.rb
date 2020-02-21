class CreateSelections < ActiveRecord::Migration[5.2]
  def change
    create_table :selections do |t|
      t.belongs_to :club, null: false
      t.belongs_to :movie, null: false

      t.timestamps null: false
    end
  end
end
