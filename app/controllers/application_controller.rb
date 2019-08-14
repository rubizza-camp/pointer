# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Pundit

  rescue_from 'Pundit::NotAuthorizedError' do
    flash[:alert] = 'You are not authorized to perform this action.'
    redirect_to(request.referrer || root_path)
  end

  def home
    render plain: 'Home'
  end
end
