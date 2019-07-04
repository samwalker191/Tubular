json.extract! video, :id, :title, :description, :views
json.videoURL url_for(video.video)
json.thumbnail url_for(video.thumbnail)
json.owner video.owner.username