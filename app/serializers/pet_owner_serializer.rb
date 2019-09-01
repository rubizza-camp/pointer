class PetOwnerSerializer
  include FastJsonapi::ObjectSerializer

  attributes :name, :rating
end
