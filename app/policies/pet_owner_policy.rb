# frozen_string_literal: true

class PetOwnerPolicy < ApplicationPolicy
  def update?
    true
    # record.user === user
  end
end
