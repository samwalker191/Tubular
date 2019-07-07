ActiveRecord::Base.transaction do
    User.destroy_all
    Video.destroy_all
    require 'open-uri'

    u1 = User.create!(
        username: 'DemoUser',
        email: 'demouser@demo.io',
        password: 'noseyone'
    )

    u2 = User.create!(
        username: 'samwalker191',
        email: 'samwalker191@email.pizza',
        password: 'fakepassword'
    )

    u3 = User.create!(
        username: 'CryoGuy',
        email: 'cryoguy@email.pizza',
        password: 'cryo12345'
    )

    vid1 = Video.create!(
        title: 'Boom, Headshot | PUBG w/ Friends',
        description: 'Short highlight',
        owner_id: 3,
        views: 100
    )
    vid1_thumbnail = open('https://s3.amazonaws.com/walker-tubular-seed/headshot_thumbnail.png')
    vid1.attach.thumbnail(io: file, filename: 'headshot_thumbnail.png')
    vid1_video = open('https://s3.amazonaws.com/walker-tubular-seed/headshot.mp4')
    vid1.attach.video(io: file, filename: 'headshot.mp4')

    vid2 = Video.create!(
        title: 'TESTER VIDEO',
        description: 'Demo user should be able to edit and delete this video',
        owner_id: 1,
        views: 5
    )
    vid2_thumbnail = open('https://s3.amazonaws.com/walker-tubular-seed/test_thumbnail.jpg')
    vid2.attach.thumbnail(io: file, filename: 'test_thumbnail.jpg')
    vid2_video = open('https://s3.amazonaws.com/walker-tubular-seed/test_vid.mp4')
    vid2.attach.video(io: file, filename: 'test_vid.mp4')
end