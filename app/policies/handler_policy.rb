# frozen_string_literal: true

class HandlerPolicy < ApplicationPolicy
  def update?
    true
    # record.user === user
  def show?
    true
  end
end
