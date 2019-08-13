# frozen_string_literal: true

class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :uuid
  has_many :checkins
end
