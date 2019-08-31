# frozen_string_literal: true

module Ratingable
  extend ActiveSupport::Concern
  def refresh_rating
    update_column(:rating, reviews.average(:rating).round(1))
  end
end