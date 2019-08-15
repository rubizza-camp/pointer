class Review < ApplicationRecord
  belongs_to :reviewable, polymorphic: true, optional:true

  validates :comment, presence: true
end
