class Api::LikesController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create
        @like = Like.new(create_like_params)
        @like.user_id = current_user.id

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def update
        @like = Like.find(params[:id])
        if current_user.id == @like.user_id
            if @like.update_attributes(update_like_params)
                render :show
            else
                render json: @like.errors.full_messages, status: 422
            end
        else
            render json: ['Must be owner of like to edit'], status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if current_user.id == @like.user_id
            @like.destroy
            render :show
        else
            render json: ['Must be owner of like to destroy'], status: 422
        end
        
    end

    private
    def create_like_params
        params.require(:like).permit(:liked, :user_id, :likeable_id, :likeable_type)
    end

    def update_like_params
        params.require(:like).permit(:liked)
    end
end
