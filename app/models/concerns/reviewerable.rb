# frozen_string_literal: true

module Reviewerable
  extend ActiveSupport::Concern
  included do
    has_many :reviews, as: :reviewerable, dependent: :destroy
  end
end
