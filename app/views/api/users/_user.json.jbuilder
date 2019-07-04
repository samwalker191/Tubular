# json.extract! user, :id, :username, :email

videos = user.videos.map { |video| video.id }

json.id user.id
json.username user.username
json.email user.email
json.uploadedVideos videos