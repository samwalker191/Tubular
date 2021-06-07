json.video do
    json.partial! 'api/videos/video', video: @video
end

json.comments do
    @video.comments.includes(:user).each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :user_id, :video_id
            json.commenter comment.user.username
            json.likes comment.num_likes
            json.dislikes comment.num_dislikes
        end
    end
end

if current_user
    like = current_user.liked_video(@video)
    if like
        json.like do
            json.extract! like, :id, :liked, :likeable_id, :likeable_type, :user_id
        end
    end
end

