json.video do
    json.partial! 'api/videos/video', video: @video
end

comments = @video.comments.includes(:user)

json.comments do
    comments.each do |comment|
        json.set! comment.id do
            json.partial! 'api/comments/comment', comment: comment
        end
    end
end

if current_user
    json.likes do
        like = current_user.liked_video(@video)
        if like
            json.set! like.id do
                json.extract! like, :id, :liked, :likeable_id, :likeable_type, :user_id
            end
        end

        comments.each do |comment|
            like = current_user.liked_comment(comment)
            if like
                json.set! like.id do
                    json.extract! like, :id, :liked, :likeable_id, :likeable_type, :user_id
                end
            end 
        end
    end
end

