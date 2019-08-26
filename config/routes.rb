# frozen_string_literal: true

Rails.application.routes.draw do
  get '*path', to: 'static_pages#home'
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks',
                                    :registrations => "users/registrations",
                                    :sessions => "users/sessions" }
  resources :trips do
    resources :checkins, only: :create
  end
  get 'handlers/all', to: 'handlers#all_handlers'
  resources :handlers
  get 'tripwatcher/:id', to: 'trips#show'
  post 'pusher/new', to: 'pusher#create'
  root to: 'static_pages#home'
end
