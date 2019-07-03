class Api::VideosController < ApplicationController
    def index(query)

    end

    def create
        @video = Video.new(video_params)
    end

    def show

    end

    def update

    end

    def destroy

    end

    private
    def video_params
        params.require(:video).permit(:title, :description, :owner_id, :video)
    end
end
