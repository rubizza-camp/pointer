# frozen_string_literal: true

class TripPolicy < ApplicationPolicy
  def index?
    @user.handler?
  end

  def show?
    true
  end

  def create?
    @user.handler?
  end

  class Scope < Scope
    def resolve
      scope.all
    end
  end
end
