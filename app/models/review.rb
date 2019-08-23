# frozen_string_literal: true

class Review < ApplicationRecord
  belongs_to :reviewable, polymorphic: true
  belongs_to :reviewerable, polymorphic: true

  validates :comment, presence: true
  validates :rating, presence: true
end
