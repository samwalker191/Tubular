videos = user.videos.map { |video| video.id }

json.extract! user, :id, :username, :email
json.uploadedVideos videos