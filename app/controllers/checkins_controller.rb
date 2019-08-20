# frozen_string_literal: true

class CheckinsController < ApplicationController
  before_action :authenticate_user!

  def create
    authorize Checkin
    @checkin = Checkin.new(checkin_params)
    render json: CheckinSerializer.new(@checkin).serialized_json if @checkin.save
  end

  private

  def checkin_params
    params.permit(:trip_id, :lat, :lng)
  end
end
