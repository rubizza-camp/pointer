# frozen_string_literal: true
module AvatarHelper
  extend ActiveSupport::Concern

  class_methods do
    def avatar_url(user)
      Rails.application.routes.url_helpers.rails_blob_url(user.avatar, only_path: true) if user.avatar.attached?
    end
  end
end
