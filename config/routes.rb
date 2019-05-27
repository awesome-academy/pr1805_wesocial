Rails.application.routes.draw do
  devise_for :users, only: :omniauth_callbacks,
    controllers: {omniauth_callbacks: 'users/omniauth_callbacks'}

  scope '/(:locale)', locale: /en|vi/ do
    devise_for :users, skip: :omniauth_callbacks , controllers: {
      sessions: "users/sessions",
      passwords: "users/passwords",
      registrations: "users/registrations",
      confirmables: "users/confirmables"
    }
  end

  scope "(:locale)", locale: /en|vi/ do
    root "static_pages#home"
    resources :users, only: [:show, :edit]
    resources :groups
    resources :user_posts, only: [:create, :edit, :destroy, :update] do
      resources :votes, only: [:create, :destroy]
      resources :comments, only: [:create, :destroy]
      get 'user_posts/user_post_id/comments/new/(:parent_id)', to: 'comments#new', as: :new_comment
    end
    resources :conversations do
      resources :messages
    end
  end
end
