# frozen_string_literal: true

class TripsController < ApplicationController
  # before_action :require_login

  def index
  end

  # function for creating a new trip
  def create
    @trip = Trip.new(trip_params)
    @trip.checkins.build(lat: params[:lat], lng: params[:lng])
    render json: @trip.as_json if @trip.save
  end

  # function for showing a trip
  def show
    @trip = Trip.find_by(uuid: params[:id])
  end

  private

    def trip_params
      params.permit(:name)
    end

    def require_login
      flash.now[:danger] = "You must be logged in to access this section"
    end
end
