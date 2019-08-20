# frozen_string_literal: true

class CheckinsPolicy < ApplicationPolicy
  def create?; @user.handler? end
end
