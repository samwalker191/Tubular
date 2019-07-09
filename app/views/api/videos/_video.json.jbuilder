comment_ids = video.comments.map { |comment| comment.id }

json.extract! video, :id, :title, :description, :views
json.videoURL url_for(video.video)
json.thumbnail url_for(video.thumbnail)
json.owner video.owner.username
json.owner_id video.owner.id
json.likes video.num_likes
json.dislikes video.num_dislikes
json.published video.created_at.strftime("%B %d, %Y")
json.commentIds comment_ids