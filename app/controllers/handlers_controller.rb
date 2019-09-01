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
    handler = Handler.find(params['id'])
    authorize handler
    handler.update(pet_owner_attributes)
  end

  def show
    authorize @handler
    render json: HandlerSerializer.new(@handler).serialized_json
  end

  private

  def handler_attributes
    params.require(:data).permit(:name, :last_name, :phone, :metro)
  end

  def set_handler
    @handler = Handler.find(params[:id])
  end

  def handler_params
    params.permit(:name)
  end
 end
