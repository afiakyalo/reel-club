class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.belongs_to :user, null: false
      t.belongs_to :club, null: false

      t.timestamps null: false
    end
  end
end
