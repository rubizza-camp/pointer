# frozen_string_literal: true

class StaticPagePolicy < ApplicationPolicy
  def home?
    true
  end
end
