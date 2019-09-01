# frozen_string_literal: true

class PetOwnersController < ApplicationController
  before_action :set_pet_owner, only: [:show]

  def show
    authorize @pet_owner
    render json: PetOwnerSerializer.new(@pet_owner).serialized_json
  end
  
  def update
    pet_owner = PetOwner.find(params['id'])
    authorize pet_owner
    pet_owner.update(pet_owner_attributes)
  end

  private

  def set_pet_owner
    @pet_owner = PetOwner.find(params[:id])
  end

  def pet_owner_attributes
    params.require(:data).permit(:name, :phone, :metro)
  end
end
