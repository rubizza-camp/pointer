# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks',
                                    :registrations => 'users/registrations',
                                    :sessions => 'users/sessions',
                                    :confirmations => 'users/confirmations' }
  get '*path', to: 'static_pages#home', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  resources :trips do
    resources :checkins, only: :create
  end

  resources :pets do
    resources :reviews
  end

  resources :pet_owners do
    resources :reviews
    resources :pets, only: [:create, :update, :index, :destroy]
  end

  resources :handlers do
    resources :reviews
  end

  resources :pet_owners, only: :update
  resources :handlers, only: :update

  get 'tripwatcher/:id', to: 'trips#show'
  post 'pusher/new', to: 'pusher#create'
  post 'pet_owner/identify', to: 'pet_owner#identify'
  patch 'pet_owners/:pet_owner_id/pets/:id/avatar', to: 'pets#update_photo'
  root to: 'static_pages#home'
end
