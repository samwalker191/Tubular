json.extract! video, :id, :title, :description, :views
json.video_url url_for(video.video)
json.thumbnail url_for(video.thumbnail)
json.owner video.owner.username
json.owner_id video.owner.id
json.likes video.num_likes
json.dislikes video.num_dislikes
json.published video.created_at.strftime("%B %d, %Y")
json.comment_ids video.comment_ids