# config/routes.rb
Rails.application.routes.draw do
  resources :states
  resources :users

  post '/login', to: 'sessions#login'

  get '/me', to: 'users#show'
  
  get 'all_states', to: 'states#index'
end