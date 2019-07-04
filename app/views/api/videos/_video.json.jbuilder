json.extract! video, :id, :title, :description, :views
json.videoURL url_for(video.video)
json.owner video.owner.username