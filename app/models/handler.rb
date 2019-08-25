# frozen_string_literal: true

class Handler < ApplicationRecord
  include Reviewable
  include Reviewerable
  include Loginable
  has_many :trips
end
