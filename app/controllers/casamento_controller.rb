class CasamentoController < ApplicationController
  
  def home
  end

  def menu
    yield
  end
  
  def footer
    yield
  end
 
  def header
    yield
  end
  
  def fotos
    respond_to do |format|
      format.js
      format.html
    end
  end

  def como_chegar
    respond_to do |format|
      #format.html { render 'new'} ## Specify the format in which you are rendering "new" page
      format.js
      # o format usa o como_chegar.js.erb
      format.html
    end        
  end 
  
  def dress
    respond_to do |format|               
      format.js
      format.html
    end    
  end
  def lista_casamento
    respond_to do |format|
      format.js
      format.html
    end
  end
end
