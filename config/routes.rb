Rails.application.routes.draw do
  
  resources :machine_ores, except: [:new, :edit]
  resources :machine_items, except: [:new, :edit]
  resources :board_items, except: [:new, :edit]
  resources :board_ores, except: [:new, :edit]
  
  resources :boards, except: [:new, :edit]

  resources :machines, only: [:index, :show]
  resources :items, only: [:index, :show]
  resources :ores, only: [:index, :show]
  resources :users, only: [:index, :show]

  post "/login", to: "session#login"
  get "/userInSession", to: "session#get_logged_in_user"
  delete "/logOut", to: "session#log_out"
  post "/boardSession", to: "session#board_session"
  post "/machineOreAndBoardOre", to: "machine_ores#combo_post"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
