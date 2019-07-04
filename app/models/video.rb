# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  owner_id    :integer          not null
#  views       :integer          default(0), not null
#  description :text             default("No description"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord
    validates :title, :owner_id, :views, :description, presence: true

    has_one_attached :video
    has_one_attached :thumbnail

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
end
