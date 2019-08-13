# frozen_string_literal: true

class TripPolicy < ApplicationPolicy
  def show?
    false
  end
  class Scope < Scope
    def resolve
      scope.all
    end
  end
end
