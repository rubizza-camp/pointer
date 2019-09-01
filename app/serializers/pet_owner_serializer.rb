class PetSerializer
  include FastJsonapi::ObjectSerializer

  attributes :created_at
end
