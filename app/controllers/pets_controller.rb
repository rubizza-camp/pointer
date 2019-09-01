class PetsController < ApplicationController
  before_action :set_pet, only: [:show, :update_photo, :update, :destroy]

  def index
    render json: PetSerializer.new(policy_scope(Pet).where(:pet_owner_id => pet_owner_id)).serialized_json
  end

  def show
    authorize @pet
    render json: PetSerializer.new(@pet).serialized_json
  end

  def create
    render json: PetSerializer.new(Pet.create(:pet_owner_id => pet_owner_id)).serialized_json
  end

  def destroy
    @pet.delete
    render json: PetSerializer.new(Pet.where(:pet_owner_id => pet_owner_id)).serialized_json
  end

  def update
    @pet.update(pet_params)
    render json: PetSerializer.new(Pet.all)
  end

  def update_photo
    photo = @pet.photo
    photo.purge
    photo.attach(params[:signed_blob_id])
  end

  private

  def set_pet
    @pet = Pet.find(params[:id])
  end

  def pet_owner_id
    User.find(params[:pet_owner_id]).userable_id
  end

  def pet_params
    params.permit(:name, :breed, times: [:text])
  end
end
