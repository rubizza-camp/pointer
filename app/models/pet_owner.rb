# frozen_string_literal: true

class PetOwner < ApplicationRecord
  has_many :pets
  has_one :user, as: :userable
end
