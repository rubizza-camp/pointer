# frozen_string_literal: true

class HandlersController < ApplicationController
  def index
    respond_to do |format|
      format.html { render :index } # index.html.erb
      format.json { render json: HandlerProfileSerializer.new do
        Handler
          .left_joins(:trips)
          .group(:id)
          .order('COUNT(trips.id) DESC')).serialized_json }
      end
    end
  end

  def edit; end
end
