# frozen_string_literal: true

class PetOwnersController < ApplicationController
  before_action :set_pet_owner, only: [:show]

  def show
    authorize @pet_owner
    render json: PetOwnerSerializer.new(@pet_owner).serialized_json
  end

  private

  def set_pet_owner
    @pet_owner = PetOwner.find(params[:id])
  end

  def pet_owner_params
    params.permit(:name)
  end
end
