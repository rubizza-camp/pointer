# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  include Pundit

  rescue_from Pundit::NotAuthorizedError do
    flash[:alert] = 'You are not authorized to perform this action.'
    redirect_to(request.referrer || root_path)
  end
end
