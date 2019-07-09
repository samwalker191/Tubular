videos = user.videos.map { |video| video.id }

json.extract! user, :id, :username, :email
json.uploadedVideos videos
json.commentLikes user.likes.select { |like| like.likeable_type == 'Comment'}.map {|like| like.id }