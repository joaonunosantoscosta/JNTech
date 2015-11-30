class PortfolioController < ApplicationController
  
  def home
  end

  def joaonunosantoscosta_VIng
  end
  
  def download_pdf
    send_file(
    Rails.root.join('app', 'assets', 'images','files', 'CV_Joao.pdf'),
    filename: "CV_Joao.pdf",
    type: "application/pdf"
    )
    #/jntech_app/app/assets/images/files/CV_Joao.pdf
  end

end

