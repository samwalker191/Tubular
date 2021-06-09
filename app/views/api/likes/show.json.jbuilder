likeable = @like.likeable

json.like do
    json.extract! @like, :id, :user_id, :likeable_id, :likeable_type, :liked
end

if likeable.is_a?(Video)
    json.video do
        json.partial! 'api/videos/video', video: likeable
    end
else
    json.comment do
        json.partial! 'api/comments/comment', comment: likeable
    end 
end