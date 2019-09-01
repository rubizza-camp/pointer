# frozen_string_literal: true

class PetOwner < ApplicationRecord
  include Loginable
  has_many :pets
end


Запрос на pet.index (current_user.pet_owner.pets)
Встатить с стейт из него в селект
прокинуть в запросе на пета
Https://github.com/rubizza-camp/pointer/pull/26/files#diff-4e6889c0f409c7d75410886f78695a5cR40

Pet seriallizer
