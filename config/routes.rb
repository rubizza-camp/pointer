# frozen_string_literal: true

Rails.application.routes.draw do
  resources :trips do
    resources :checkins, only: :create
  end
  get 'tripwatcher/:id', to: 'trips#show'
  devise_for :users
  root to: 'static_pages#home'
end
