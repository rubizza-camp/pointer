# frozen_string_literal: true

class PetPolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    true
  end

  def create?
    @user.pet_owner?
  end
end
