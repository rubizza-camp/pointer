# frozen_string_literal: true

class Pet < ApplicationRecord
  has_many :tasks
  belongs_to :pet_owner
  has_one_attached :photo
end
