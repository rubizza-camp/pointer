# frozen_string_literal: true

class ReviewPolicy < ApplicationPolicy
  def index?
    true
  end

  def create?
    @user
  end
end
