# frozen_string_literal: true

class Checkin < ApplicationRecord
  belongs_to :trip
  before_validation :reject_invalid_checkin
  validates_presence_of :lng, :lat
  after_create :notify_pusher
  # method to publish a user's current location
  def notify_pusher
    Pusher.trigger("location", "new", trip.as_json)
  end

  def reject_invalid_checkin
    trip = Trip.find_by_id(trip_id)
    p 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    p trip_id
    p trip
    if trip and !trip.checkins.empty?
      old_lat, old_lng = trip.checkins.last.lat, trip.checkins.last.lng
      p 'DISTANCE'
      p Haversine.distance(old_lat, old_lng, lat, lng).to_km
      errors.add(:trip_id, "should be not too far, not too close") unless Haversine.distance(old_lat, old_lng, lat, lng).to_km.between?(0.1, 0.5)
    end
  end
end
