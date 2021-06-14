json.extract! comment, :id, :body, :user_id, :video_id
json.commenter comment.user.username
json.likes comment.num_likes
json.dislikes comment.num_dislikes