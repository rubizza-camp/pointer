# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :ensure_signup_complete, only: [:new, :create, :update, :destroy]

  def home
    render plain: "Home"
  end

  def ensure_signup_complete
    # Убеждаемся, что цикл не бесконечный
    return if action_name == 'finish_signup'

    # Редирект на адрес 'finish_signup' если пользователь
    # не подтвердил свою почту
    if current_user && !current_user.email_verified?
      redirect_to finish_signup_path(current_user)
    end
  end
end
