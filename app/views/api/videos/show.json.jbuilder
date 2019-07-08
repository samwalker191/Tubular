json.video do
    json.partial! 'api/videos/video', video: @video
end

if current_user
    likes = @video.likes.select { |like| like.user_id == current_user.id }
    curr_like = likes[0]

    json.like do
        json.set! curr_like.id do
            json.extract! curr_like, :id, :liked, :likeable_id, :likeable_type, :user_id
        end
    end
end