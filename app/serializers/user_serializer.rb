class UserSerializer
  include FastJsonapi::ObjectSerializer

  attributes :name, :userable_type, :userable_id
end
