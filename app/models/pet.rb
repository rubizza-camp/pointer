# frozen_string_literal: true

class Pet < ApplicationRecord
  include Reviewable
  include Ratingable
  belongs_to :pet_owner
  has_one_attached :photo
end
