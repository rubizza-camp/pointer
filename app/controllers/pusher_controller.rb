# frozen_string_literal: true

class PusherController < ApplicationController
  def create
    if true # current_user.id == Trip.find_by(params[:channel_name.split('-')[-1]]).user.id
      response = Pusher.authenticate(params[:channel_name], params[:socket_id])
      render json: response
    else
      render text: "Forbidden", status: "403"
    end
  end
end
