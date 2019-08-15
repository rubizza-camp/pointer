# frozen_string_literal: true

class TripPolicy < ApplicationPolicy
  def show?
    false
  end
end
