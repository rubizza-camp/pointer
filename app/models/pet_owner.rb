# frozen_string_literal: true

class PetOwner < ApplicationRecord
  include Reviewable
  include Loginable
  include Ratingable
  has_many :pets
end
