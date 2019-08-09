# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, :controllers => { omniauth_callbacks: 'omniauth_callbacks' }
  resources :trips do
    resources :checkins, only: :create
  end
  get "tripwatcher/:id", to: "trips#show"
  root to: "static_pages#home"
  match '/users/:id/finish_signup' => 'users#finish_signup', via: [:get, :patch], :as => :finish_signup
end
