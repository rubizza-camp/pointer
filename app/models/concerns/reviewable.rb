# frozen_string_literal: true

module Reviewable
  extend ActiveSupport::Concern
  included do
    has_many :review, as: :reviewable, dependent: :destroy
    accepts_nested_attributes_for :reviews
  end
end