class Users::SessionsController < Devise::SessionsController
  respond_to :json
  # def create
  #   self.resource = warden.authenticate!(auth_options)
  #   set_flash_message(:notice, :signed_in) if is_flashing_format?
  #   sign_in(resource_name, resource)
  #   yield resource if block_given?
  #   respond_with resource, :location => after_sign_in_path_for(resource) do |format|
  #     format.json {render :json => resource } # this code will get executed for json request
  #   end
  # end

  def create
    resource = warden.authenticate!(:scope => resource_name, :recall => "#{controller_path}#new")
    set_flash_message(:notice, :signed_in) if is_navigational_format?
    sign_in(resource_name, resource)

    respond_to do |format|
      format.html do
        respond_with resource, :location => redirect_location(resource_name, resource)
      end
      format.json do
        render :json => { :response => 'ok', :auth_token => current_user.authentication_token }.to_json, :status => :ok
      end
    end
  end
end
