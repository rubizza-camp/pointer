class AddHandlerToTrips < ActiveRecord::Migration[5.2]
  def change
    add_reference :trips, :handler, foreign_key: true
  end
end
