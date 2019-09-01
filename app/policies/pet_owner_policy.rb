# frozen_string_literal: true

class PetOwnerPolicy < ApplicationPolicy
  def show?
    true
  end
  def update?
    true
    # record.user === user
  end
end
