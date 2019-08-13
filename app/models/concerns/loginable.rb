# frozen_string_literal: true

module Loginable
  extend ActiveSupport::Concern
  included do
    has_one :user, as: :userable
  end
end
