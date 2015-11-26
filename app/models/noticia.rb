class Noticia < ActiveRecord::Base
  validates :nome, presence: true, maximum: 50, message: "less than 50 if you don't mind"
  validates :data, presence: true
  validates :descricao, presence: true
end
