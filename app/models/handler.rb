# frozen_string_literal: true

class Handler < ApplicationRecord
  include Reviewable
  include Loginable
  include Ratingable
  has_many :trips
end
