class Api::VideosController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index(query = '')
        query = params['query'] || ''
        formatted_query = '%' + query + '%'
        @videos = Video.where('videos.title like ?', formatted_query)
        render :index
    end

    def create
        debugger
        if params[:video][:video] == 'null' 
            render json: ['Need an attached video'], status: 422
            return nil
        elsif params[:video][:thumbnail] == 'null'
            render json: ['Need an attached thumbnail'], status: 422
            return nil
        end

        @video = Video.new(video_params)
        @video.owner_id = current_user.id

        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end

    def update
        @video = Video.find(params[:id])
        if current_user.id == @video.owner_id
            if @video.update_attributes(video_params)
                render :show
            else
                render json: @video.errors.full_messages, status: 422
            end
        else
            render json: ['Must be owner of video to edit'], status: 422
        end
    end

    def destroy
        @video = Video.find(params[:id])
        if current_user.id == @video.owner_id
            @video.destroy
            render :show
        else
            render json: ['Must be owner of video to destroy'], status: 422
        end
    end

    private
    def video_params
        params.require(:video).permit(:title, :description, :owner_id, :video, :thumbnail)
    end
end
