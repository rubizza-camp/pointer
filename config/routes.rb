# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }
  resources :trips do
    resources :checkins, only: :create
  end
  get "tripwatcher/:id", to: "trips#show"
  root to: "static_pages#home"
end
