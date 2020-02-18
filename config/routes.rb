Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    authenticated :user do
      root 'homes#index', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end

  get "/clubs", to: "homes#index"
  post "/api/v1/movies/search", to: "movies#search"

  namespace :api do
    namespace :v1 do
      resources :clubs, only: [:index] do
        resources :movies, only: [:index, :search]
      end
    end
  end
end
