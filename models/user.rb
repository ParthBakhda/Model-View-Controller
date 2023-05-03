# models/user.rb

class User < ActiveRecord::Base
    has_many :posts
    has_many :comments
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }
    # ... other user attributes
  end
  