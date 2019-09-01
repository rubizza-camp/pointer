# frozen_string_literal: true

class CheckinPolicy < ApplicationPolicy
  def create?
    @user.handler?
  end
end
