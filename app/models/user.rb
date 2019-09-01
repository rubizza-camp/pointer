# frozen_string_literal: true

class User < ApplicationRecord
  belongs_to :userable, polymorphic: true, optional: true
  has_many :reviews, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :omniauthable,
         :jwt_authenticatable, jwt_revocation_strategy: JWTBlacklist

  def after_confirmation
    UserNotifierMailer.welcome_email(self).deliver
  end

  def jwt_payload
    {'id' => id}
  end

  def name
    userable.name
  end

  def self.from_omniauth(auth)
    info = auth.info
    provider = auth.provider
    uid = auth.uid
    where(provider: provider, uid: uid).first_or_create do |user|
      user.email = info.email
      user.name = info.name
      user.provider = provider
      user.uid = uid
      user.password = Devise.friendly_token[0, 20]
      user.skip_confirmation!
    end
  end
  %w(PetOwner Handler).each do |role|
    define_method("#{role.underscore}?") do
      userable_type == role
    end
  end
end
