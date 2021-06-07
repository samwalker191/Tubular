# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true}

    has_many :videos,
        foreign_key: :owner_id,
        class_name: :Video

    has_many :likes,
        foreign_key: :user_id,
        class_name: :Like

    has_many :liked_videos,
        through: :likes,
        source: :likeable,
        source_type: 'Video'

    has_many :comments,
        foreign_key: :user_id,
        class_name: :Comment

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def liked_video(video)
        self.likes.find_by(likeable_type: "Video", likeable_id: video.id)
    end

    def liked_comment(comment)
        self.likes.find_by(likeable_type: "Comment", likeable_id: comment.id)
    end
end
