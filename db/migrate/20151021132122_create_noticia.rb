class CreateNoticia < ActiveRecord::Migration
  def change
    create_table :noticia do |t|
      t.string :nome
      t.date :data
      t.text :descricao

      t.timestamps
    end
  end
end
