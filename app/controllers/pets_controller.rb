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
        p params
        @pet.update(pet_params)
        @pet.update(times: pet_params[:times])
        @pet.photo.attach(params[:file])
        render json: PetSerializer.new(Pet.all)
    end

    private

    def pet_params
        params.permit(:name, :breed, :times => [:text])
    end
end

