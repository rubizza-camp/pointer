# frozen_string_literal: true

class PetOwnersController < ApplicationController
  def update
    pet_owner = PetOwner.find(params['id'])
    authorize pet_owner
    pet_owner.update(pet_owner_attributes)
  end

  private

  def pet_owner_attributes
    params.require(:data).permit(:name, :last_name, :phone, :metro)
  end
end
