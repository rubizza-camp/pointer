# frozen_string_literal: true

class Handler < ApplicationRecord
  has_many :trips
  include Loginable
  has_one_attached :avatar
end
