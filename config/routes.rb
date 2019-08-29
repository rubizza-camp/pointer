# frozen_string_literal: true

Rails.application.routes.draw do
  get '*path', to: 'static_pages#home', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks',
                                    :registrations => "users/registrations",
                                    :sessions => "users/sessions" }
  resources :trips do
    resources :checkins, only: :create
  end
  resources :pet_owners do
    resources :pets, only: [:create, :update, :index, :destroy]
  end
  get 'tripwatcher/:id', to: 'trips#show'
  post 'pusher/new', to: 'pusher#create'
  patch 'pet_owners/:pet_owner_id/pets/:id/avatar', to: 'pets#update_photo'
  root to: 'static_pages#home'
end
