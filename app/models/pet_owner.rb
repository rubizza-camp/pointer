# frozen_string_literal: true

class PetOwner < ApplicationRecord
  include Loginable
  has_many :pets
end
