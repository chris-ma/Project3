Rails.application.routes.draw do
  devise_for :users
  resources :managements
  resources :pages

  root 'pages#index'

    scope '/api' do
    resources :managements
  end


end
