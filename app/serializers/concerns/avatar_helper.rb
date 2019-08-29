# frozen_string_literal: true

module AvatarHelper
  extend ActiveSupport::Concern

  class_methods do
    def avatar_url(user)
      avatar = user.avatar
      Rails.application.routes.url_helpers
      .rails_blob_path(avatar, only_path: true) if avatar.attached?
    end

    def pet_photo(pet)
      photo = pet.photo
      Rails.application.routes.url_helpers
      .rails_blob_path(photo, only_path: true) if photo.attached?
    end
  end
end
