# frozen_string_literal: true

class User < ApplicationRecord
  has_many :pets
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable

  def after_confirmation
    UserNotifierMailer.welcome_email(self).deliver
  end
end
