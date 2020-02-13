Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get "/clubs", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :clubs, only: [:index]
    end
  end
end
