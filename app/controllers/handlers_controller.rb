class HandlersController < ApplicationController
  before_action :set_handler, only: [:show]

  def index
    respond_to do |format|
      format.json do
        render json: HandlerProfileSerializer.new(
        policy_scope(Handler)
          .left_joins(:trips)
          .group(:id)
          .order('COUNT(trips.id) DESC')
        ).serialized_json
      end
    end
  end

  def edit; end

  def update
    Handler.update(params['id'], first_name: params['first_name'], last_name: params['last_name'], phone: params['phone'], metro: params['metro'])
 end

  def show
    authorize @handler
    render json: HandlerSerializer.new(@handler).serialized_json
  end

  private

  def set_handler
    @handler = Handler.find(params[:id])
  end

  def handler_params
    params.permit(:name)
  end
end
