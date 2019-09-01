# frozen_string_literal: true

class CheckinSerializer
  include FastJsonapi::ObjectSerializer

  attributes :lat, :lng
  belongs_to :trip
end
