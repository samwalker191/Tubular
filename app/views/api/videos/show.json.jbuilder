json.video do
    json.partial! 'api/videos/video', video: @video
end

json.comments do
    @video.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :user_id, :video_id
        end
    end
end

if current_user
    likes = @video.likes.select { |like| like.user_id == current_user.id }
    curr_like = likes[0]

    if curr_like != nil
        json.like do
            json.extract! curr_like, :id, :liked, :likeable_id, :likeable_type, :user_id
        end
    end
end