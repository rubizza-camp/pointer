# frozen_string_literal: true

class Trip < ApplicationRecord
  before_create :set_uuid
  has_many :checkins # trip model's association with the checkins model

  # a method that creates a random uuid for each trip before its created
  def set_uuid
    self.uuid = SecureRandom.uuid
  end
end
