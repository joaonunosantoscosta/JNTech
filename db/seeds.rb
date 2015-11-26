# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Noticia.delete_all

Noticia.create!([
  {id: 1, nome: "Procuramos novos projetos apartir do dia 16 Dezembro de 2015.", data: "(2014, 11, 10)", descricao: "Procuramos novos projetos apartir do dia 16 Dezembro de 2015."},
  {id: 2, nome: "22222Procuramos novos projetos apartir do dia5.", data: "(2015, 11, 10)", descricao: "P22222222222rocuramos novos projetos apartir do dia 16 Dezembro de 2015."}
])

Date.new(2007, 11, 10)