class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :country
      t.string :state

      t.timestamps
    end
  end
end
