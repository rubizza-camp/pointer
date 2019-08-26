# frozen_string_literal: true

Rails.application.routes.draw do
  get '*path', to: 'static_pages#home', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  get 'pets/index'
  get 'pets/show'
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }
  resources :trips do
    resources :checkins, only: :create
  end

  resources :pets do
    resources :reviews
  end

  resources :pet_owners do
    resources :reviews
  end

  resources :handlers do
    resources :reviews
  end

  get 'tripwatcher/:id', to: 'trips#show'
  post 'pusher/new', to: 'pusher#create'
  root to: 'static_pages#home'
end
