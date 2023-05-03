# models/post.rb

class Post < ActiveRecord::Base
    belongs_to :user
    has_many :comments
    validates :title, presence: true
    validates :body, length: { minimum: 10 }
    # ... other post attributes
  end
  