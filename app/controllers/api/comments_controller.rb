class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if current_user.id == @comment.user_id
            @comment.destroy
            render :show
        else
            render json: ['Must be owner of comment to destroy'], status: 422
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :user_id, :video_id)
    end
end
