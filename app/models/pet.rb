# frozen_string_literal: true

class Pet < ApplicationRecord
  include Reviewable
  belongs_to :pet_owner
end
