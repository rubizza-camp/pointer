# frozen_string_literal: true

class Pet < ApplicationRecord
  belongs_to :user
  has_many :tasks
end
