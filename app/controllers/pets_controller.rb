# frozen_string_literal: true

class PetsController < ApplicationController
    def create
        render json: PetSerializer.new(Pet.create(pet_owner_id: params[:pet_owner_id])).serialized_json
    end

    def index
        render json: PetSerializer.new(Pet.where(pet_owner_id: params[:pet_owner_id])).serialized_json 
    end

    def update
        @pet = Pet.find(params[:id])
        @pet.update(pet_params)
        render json: PetSerializer.new(Pet.all)
    end

    def update_photo
        p 'AAAAAAAAAAAAAAAAA'
        @pet = Pet.find(params[:id])
        @pet.photo.purge
        @pet.photo.attach(params[:signed_blob_id])
    end

    private

    def pet_params
        params.permit(:name, :breed, :times => [:text])
    end
end

