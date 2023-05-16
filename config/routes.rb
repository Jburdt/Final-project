Rails.application.routes.draw do
  resources :users
  resources :comments
  resources :categories
  resources :reviews

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "sessions#create"
  get "/me", to: "users#show"

  get '/review/categories', to: "reviews#categories"
end
