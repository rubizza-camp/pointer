# frozen_string_literal: true

Rails.application.routes.draw do
  get 'pets/index'
  get 'pets/show'
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
  devise_for :users
  root to: 'static_pages#home'
end
