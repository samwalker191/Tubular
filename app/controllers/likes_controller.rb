class LikesController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create
        @like = Like.new(create_like_params)
        @like.user_id = current_user.id

        if @like.save
            render json: ['Success!']
        else
            render json: @like.errors.full_messages, status: 422
    end

    def update
        # @like = Like.find_by(
        #     user_id: current_user.id,
        #     likeable_id: params[:like][:likeable_id],
        #     likeable_type: params[:like][:likeable_type]
        # )
        @like = Like.find(params[:id])
        if @like.update_attributes(update_like_params)
            render json: ['Success!']
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        # like = Like.find_by(
        #     user_id: current_user.id,
        #     likeable_id: params[:like][:likeable_id],
        #     likeable_type: params[:like][:likeable_type]
        # )
        like = Like.find(params[:id])
        like.destroy
    end

    private
    def create_like_params
        params.require(:like).permit(:liked, :user_id, :likeable_id, :likeable_type)
    end

    def update_like_params
        params.require(:like).permit(:liked)
    end
end
