class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :rating, :comment
  belongs_to :reviewable, polymorphic: true
  belongs_to :reviewerable, polymorphic: true
end
