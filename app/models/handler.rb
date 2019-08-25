# frozen_string_literal: true

class Handler < ApplicationRecord
  include Reviewable
  include Loginable
  has_many :trips
end
