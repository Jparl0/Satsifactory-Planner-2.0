class SessionController < ApplicationController
    include ActionController::Cookies

    def login

        user_to_find_to_login = User.find_by(username: params[:username])
    
        if user_to_find_to_login
          if user_to_find_to_login.authenticate( params[:password])
            session[:user_id] = user_to_find_to_login.id
            render json: user_to_find_to_login
          else
            render json: {error: "Incorrect password "}
          end
    
        else
          render json: {error: "Username or password don't match"}
        end
        
      end

      def get_logged_in_user

        user_already_loggedin = User.find_by(id: session[:user_id])

        # if user_already_loggedin

            render json: user_already_loggedin

        # else
          
          # default_user = User.create(name: "Default", username: "DefaultUser", email: "default@yahoo.com", password: "L")

          # render json: default_user

        # end

      end

      def log_out

        session.delete(:user_id)

        render json: {}

      end

end
