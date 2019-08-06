# frozen_string_literal: true

class Task < ApplicationRecord
  belongs_to :pet
  belongs_to :user
  validates :description, presence: true, length: { minimum: 20 }
  validates :start_date, :end_date, presence: true
  validate :end_date_after_start_date

  private

    def end_date_after_start_date
      return if end_date.blank? || start_date.blank?

      if end_date < start_date
        errors.add(:end_date, "must be after the start date")
      end
    end
end
