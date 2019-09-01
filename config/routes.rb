# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks',
                                    :registrations => "users/registrations",
                                    :sessions => "users/sessions" }
  get '*path', to: 'static_pages#home', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  resources :trips do
    resources :checkins, only: :create
  end

  resources :tasks, only: :create
  get 'handlers/all', to: 'handlers#all_handlers'
  resources :handlers

  resources :pet_owners do
    resources :pets, only: [:create, :update, :index, :destroy]
  end

  get 'tripwatcher/:id', to: 'trips#show'
  post 'pusher/new', to: 'pusher#create'
  post 'pet_owner/identify', to: 'pet_owner#identify'
  patch 'pet_owners/:pet_owner_id/pets/:id/avatar', to: 'pets#update_photo'
  root to: 'static_pages#home'
end
