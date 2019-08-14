# frozen_string_literal: true

class CheckinsPolicy < ApplicationPolicy
  def create?
    @user.handler?
  end

  class Scope < Scope
    def resolve
      scope.all
    end
  end
end
