# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  resources :trips do
    resources :checkins, only: :create
  end
  get "tripwatcher/:id", to: "trips#show"
  post "pusher/new", to: "pusher#create"
  root to: "static_pages#home"
end
