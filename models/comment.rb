# models/comment.rb

class Comment < ActiveRecord::Base
    belongs_to :user
    belongs_to :post
    validates :body, presence: true, length: { maximum: 500 }
    # ... other comment attributes
  end
  