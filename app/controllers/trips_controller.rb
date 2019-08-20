# frozen_string_literal: true

class TripsController < ApplicationController
  before_action :authenticate_user!

  def index
    authorize Trip
  end

  # function for creating a new trip
  def create
    authorize Trip
    @trip = Trip.new(trip_params)
    @trip.checkins.build(lat: params[:lat], lng: params[:lng])
    render json: TripSerializer.new(@trip, include: [:checkins]).serialized_json if @trip.save
  end

  # function for showing a trip
  def show
    authorize Trip
    @trip = Trip.find_by(uuid: params[:id])
  end

  private

    def trip_params
      params.permit(:name)
    end
end
