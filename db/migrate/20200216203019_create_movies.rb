class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string  :title, null: false
      t.string  :synopsis, null: false
      t.date    :release_date, null: false
      t.integer :rating, null: false

      t.timestamps null: false
    end
  end
end
