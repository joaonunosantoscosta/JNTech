class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :type
      t.string :name
      t.string :email
      
      
      t.integer :nif # Cliente
      t.timestamps
    end
  end
end
