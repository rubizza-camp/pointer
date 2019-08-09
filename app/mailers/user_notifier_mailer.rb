# frozen_string_literal: true

class UserNotifierMailer < ApplicationMailer
  default from: "pointerteam.email@gmail.com"

  layout "mailer"

  def welcome_email(user)
    @user = user
    mail(to: @user.email,
    subject: "Thanks for signing up for Pointer")
  end
end
