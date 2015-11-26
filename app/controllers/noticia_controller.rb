class NoticiaController < ApplicationController
  
  def index
    @noticias = Noticia.all
  end

 
end
