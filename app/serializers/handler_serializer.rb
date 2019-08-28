# frozen_string_literal: true.
class HandlerSerializer
  include FastJsonapi::ObjectSerializer
  include AvatarHelper

  attributes :name, :metro
  attribute :trip_count do |handler|
    handler.trips.count
  end

  attribute :avatar_url do |handler|
    avatar_url(handler)
  end
end
