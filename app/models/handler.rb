# frozen_string_literal: true

class Handler < ApplicationRecord
  include Loginable
  has_many :trips
  has_one_attached :avatar
end
