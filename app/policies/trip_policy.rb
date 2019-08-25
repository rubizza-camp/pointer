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
end
