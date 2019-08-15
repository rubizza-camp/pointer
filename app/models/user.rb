# frozen_string_literal: true

class User < ApplicationRecord
  belongs_to :userable, polymorphic: true, optional: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable

  %w(PetOwner Handler).each do |role|
    define_method("#{role.underscore}?") do
      userable_type == role
    end
  end
end
