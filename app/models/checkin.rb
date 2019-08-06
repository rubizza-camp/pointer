# frozen_string_literal: true

class Checkin < ApplicationRecord
  belongs_to :trip
  after_create :notify_pusher
  # method to publish a user's current location
  def notify_pusher
    Pusher.trigger("location", "new", trip.as_json)
  end
end
