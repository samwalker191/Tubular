require 'open-uri'

ActiveRecord::Base.transaction do

    User.destroy_all
    Video.destroy_all

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
        owner_id: u3.id,
        views: 100
    )

    # file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/headshot_thumbnail.png')
    # vid1.thumbnail.attach(io: file, filename: 'headshot_thumbnail.png')
    # file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/headshot.mp4')
    # vid1.video.attach(io: file, filename: 'headshot.mp4')

    vid2 = Video.create!(
        title: 'TESTER VIDEO',
        description: 'Demo user should be able to edit and delete this video',
        owner_id: u1.id,
        views: 5
    )
    # file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/test_thumbnail.jpg')
    # vid2.thumbnail.attach(io: file, filename: 'test_thumbnail.jpg')
    # file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/test_vid.mp4')
    # vid2.video.attach(io: file, filename: 'test_vid.mp4')
end