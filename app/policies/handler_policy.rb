# frozen_string_literal: true

class HandlerPolicy < ApplicationPolicy
  def update?
    true
    # record.user === user
  end
  def show?
    true
  end
end
