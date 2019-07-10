Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, except: [:new, :edit]
    resources :likes, only: [:create, :update, :destroy]
    resources :comments, only: [:create, :destroy]
    patch '/videos/:id/views', to: 'videos#view_update'
  end

  root to: 'static_pages#root'
end
