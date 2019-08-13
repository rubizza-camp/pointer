# frozen_string_literal: true

class Handler < ApplicationRecord
  has_many :trips
  has_one :user, as: :userable
end
