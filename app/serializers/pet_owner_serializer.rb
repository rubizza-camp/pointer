class PetOwnerSerializer
  include FastJsonapi::ObjectSerializer

  attributes :name
end
