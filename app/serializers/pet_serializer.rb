# frozen_string_literal: true

class PetSerializer
  include FastJsonapi::ObjectSerializer
  include AvatarHelper
  attributes :id, :breed, :name
  attribute :photoUrl do |pet|
    pet_photo(pet)
  end
  attribute :times do |pet|
    pet.times.map{|el| JSON.parse(el.gsub(/:([a-zA-z]+)/,'"\\1"').gsub('=>', ': ')).symbolize_keys[:text]}
  end
end
