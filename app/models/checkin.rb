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
    if owner_trip && !owner_trip.checkins.empty?
      unless Haversine.distance(prev_checkin.lat, prev_checkin.lng, lat, lng)
                      .to_km.between?(0.1, 0.5)
        errors.add(:trip_id, "should be not too far, not too close")
      end
    end
  end

  private

    def prev_checkin
      @prev_checkin ||= owner_trip.checkins.last
    end

    def owner_trip
      @owner_trip ||= Trip.find_by_id(trip_id)
    end
end
