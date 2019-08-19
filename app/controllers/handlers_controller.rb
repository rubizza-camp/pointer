class HandlersController < ApplicationController
  def index
    respond_to do |format|
      format.html { render :index } # index.html.erb
      format.json { render json: HandlerSerializer.new(Handler
        .left_joins(:trips)
        .group(:id)
        .order('COUNT(trips.id) DESC')
        .limit(3)).serialized_json }
    end
  end

  def edit
  end

  def all_handlers
    respond_to do |format|
      format.html { render :index } # index.html.erb
      format.json { render json: HandlerProfileSerializer.new(Handler
        .left_joins(:trips)
        .group(:id)
        .order('COUNT(trips.id) DESC')).serialized_json }
    end
  end
end
