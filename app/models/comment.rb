# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  video_id   :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, :user_id, :video_id, presence: true

    belongs_to :user
    belongs_to :video
    has_many :likes, as: :likeable

    def num_likes
        likes = self.likes.select { |like| like.liked == true }
        likes.length
    end

    def num_dislikes
        dislikes = self.likes.select { |like| like.liked == false }
        dislikes.length
    end
end
