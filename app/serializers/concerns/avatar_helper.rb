# frozen_string_literal: true
module AvatarHelper
  extend ActiveSupport::Concern

  class_methods do
    def avatar_url(user)
      Rails.application.routes.url_helpers.rails_blob_path(user.avatar, only_path: true) if user.avatar.attached?
    end

    def pet_photo(pet)
        Rails.application.routes.url_helpers.rails_blob_path(pet.photo, only_path: true) if pet.photo.attached?
    end
  end
end
