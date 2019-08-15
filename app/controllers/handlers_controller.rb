class HandlersController < ApplicationController
  def index
    respond_to do |format|
      format.html {render :index}# index.html.erb
      format.json { render json: HandlerSerializer.new(Handler.all).serialized_json}
    end

  end
end
