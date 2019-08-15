# frozen_string_literal: true

Rails.application.routes.draw do
  resources :trips do
    resources :checkins, only: :create
  end
  resources :handlers
  get 'tripwatcher/:id', to: 'trips#show'
  devise_for :users, controllers: { registrations: 'users/registrations' }
  root to: 'static_pages#home'
end
