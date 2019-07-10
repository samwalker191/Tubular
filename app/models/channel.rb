# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  owner_id    :integer          not null
#  description :text             default("No description"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
    validates :owner_id, presence: true, uniqueness: true
    validates :description, presence: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
end
