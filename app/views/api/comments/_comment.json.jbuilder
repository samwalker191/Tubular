json.extract! comment, :id, :body, :user_id, :video_id
json.likes comment.num_likes
json.dislikes comment.num_dislikes