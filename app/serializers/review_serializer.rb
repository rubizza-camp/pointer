class ReviewSerializer
  include FastJsonapi::ObjectSerializer

  attributes :rating, :comment, :created_at
  belongs_to :reviewable, polymorphic: true
  belongs_to :user
end
