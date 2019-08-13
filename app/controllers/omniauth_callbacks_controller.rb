class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def self.provides_callback_for(provider)
    class_eval %Q{
      def #{provider}
        @user = User.from_omniauth(request.env["omniauth.auth"])
        if @user.persisted?
          sign_in_and_redirect @user
          set_flash_message(:notice, :success, kind: "#{provider}".capitalize) if is_navigational_format?
        else
          flash[:error] = "There was a problem signing you in through #{provider}. Please register or try signing in later."
          redirect_to new_user_registration_url
        end
      end
    }
  end

  [:google_oauth2, :facebook, :vkontakte].each do |provider|
    provides_callback_for(provider)
  end
end
