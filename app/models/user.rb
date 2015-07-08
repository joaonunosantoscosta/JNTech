class User < ActiveRecord::Base
   belongs_to :client
   attr_accessor :name, :email
end
