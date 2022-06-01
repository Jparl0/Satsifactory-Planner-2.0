class SessionController < ApplicationController
    include ActionController::Cookies

    def login
        user_to_find_to_login = User.find_by(username: params[:username])
        if user_to_find_to_login
          if user_to_find_to_login.authenticate( params[:password])
            session[:user_id] = user_to_find_to_login.id
            render json: user_to_find_to_login
          else
            render json: {error: "Incorrect password"}
          end
        else
          render json: {error: "Username or password don't match"}
        end
    end

    def get_logged_in_user
        user_already_loggedin = User.find_by(id: session[:user_id])
        if user_already_loggedin
            render json: user_already_loggedin
        else
          render json: {error: "No User Logged In"}
        end
    end

    def board_selection
      board_to_find_to_select = Board.find_by(id: params[:id])
        if board_to_find_to_select
          session[:board_id] = board_to_find_to_select.id
          render json: board_to_find_to_select
        else
          render json: {error: "Unable to find Board"}
        end
    end

    def get_selected_board
      board_in_session = Board.find_by(id: session[:board_id])
        if board_in_session
          render json: board_in_session
        else
          render json: {error: "No Board Selected"}
        end
    end

    def log_out
        session.delete(:user_id)
        render json: {}
    end

end
