class PetSerializer
  include FastJsonapi::ObjectSerializer

  attributes :name, :rating
end
