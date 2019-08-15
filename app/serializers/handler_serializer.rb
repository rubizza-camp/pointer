class HandlerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :metro
  attribute :trip_count do |handler|
    handler.trips.count
  end
end
