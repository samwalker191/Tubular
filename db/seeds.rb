require 'open-uri'

ActiveRecord::Base.transaction do

    User.destroy_all
    Video.destroy_all
    Comment.destroy_all
    Like.destroy_all

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

    u4 = User.create!(
        username: 'Sandizzle',
        email: 'sandizzle@email.pizza',
        password: 'sandizzle12345'
    )

    u5 = User.create!(
        username: 'WatchMojo.com',
        email: 'watchmojo@email.pizza',
        password: 'watch12345'
    )

    vid1 = Video.create!(
        title: 'Boom, Headshot | PUBG w/ Friends',
        description: 'Short highlight',
        owner_id: u3.id,
        views: 100
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/headshot_thumbnail.png')
    vid1.thumbnail.attach(io: file, filename: 'headshot_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/headshot.mp4')
    vid1.video.attach(io: file, filename: 'headshot.mp4')

    # vid2 = Video.create!(
    #     title: 'TESTER VIDEO',
    #     description: 'Demo user should be able to edit and delete this video',
    #     owner_id: u1.id,
    #     views: 5
    # )
    # file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/test_thumbnail.jpg')
    # vid2.thumbnail.attach(io: file, filename: 'test_thumbnail.jpg')
    # file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/test_vid.mp4')
    # vid2.video.attach(io: file, filename: 'test_vid.mp4')

    

    vid4 = Video.create!(
        title: 'Developers',
        description: 'You are developers! Developers! Developers! Developers! Developers! Developers! Developers! Developers!',
        owner_id: u2.id,
        views: 487
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/developers_thumbnail.png')
    vid4.thumbnail.attach(io: file, filename: 'developers_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/developers.mp4')
    vid4.video.attach(io: file, filename: 'developers.mp4')

    vid5 = Video.create!(
        title: 'Flight of the Ballerina',
        description: 'First Flight! Lots of fun!',
        owner_id: u4.id,
        views: 768
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/fairy_thumbnail.png')
    vid5.thumbnail.attach(io: file, filename: 'fairy_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/fairy.mp4')
    vid5.video.attach(io: file, filename: 'fairy.mp4')

    vid6 = Video.create!(
        title: 'Nicklestats',
        description: 'For the love of graphs.',
        owner_id: u2.id,
        views: 698
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/nicklestats_thumbnail.png')
    vid6.thumbnail.attach(io: file, filename: 'nicklestats_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/Nickelstats.mp4')
    vid6.video.attach(io: file, filename: 'Nickelstats.mp4')

    vid7 = Video.create!(
        title: 'Hamtaro Opening Theme',
        description: 'LOOK AT THESE HAMSTERS',
        owner_id: u4.id,
        views: 900
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/hamtaro_thumbnail.png')
    vid7.thumbnail.attach(io: file, filename: 'hamtaro_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/hamtaro.mp4')
    vid7.video.attach(io: file, filename: 'hamtaro.mp4')

    vid3 = Video.create!(
        title: 'Crazy Drivers | PUBG w/ Friends',
        description: 'Got to look both ways before crossing',
        owner_id: u3.id,
        views: 200
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/driver_thumbnail.png')
    vid3.thumbnail.attach(io: file, filename: 'driver_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/crazydriver.mp4')
    vid3.video.attach(io: file, filename: 'crazydriver.mp4')

    vid8 = Video.create!(
        title: 'Keyboard Cat',
        description: 'The original, for reals, no lie.',
        owner_id: u2.id,
        views: 842
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/keyboard_cat_thumbnail.png')
    vid8.thumbnail.attach(io: file, filename: 'keyboard_cat_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/keyboard_cat.mp4')
    vid8.video.attach(io: file, filename: 'keyboard_cat.mp4')

    vid9 = Video.create!(
        title: 'Lo Fi Hip Bop Beats to Study/Relax to, but only for like, 20 seconds',
        description: 'Quick homework session.',
        owner_id: u4.id,
        views: 402
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/lofi_thumbnail.png')
    vid9.thumbnail.attach(io: file, filename: 'lofi_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/lofi_trimmed.mp4')
    vid9.video.attach(io: file, filename: 'lofi_trimmed.mp4')

    vid10 = Video.create!(
        title: 'Nick Cage driving',
        description: 'Gotta go fast.',
        owner_id: u2.id,
        views: 871
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/nickcage_thumbnail.png')
    vid10.thumbnail.attach(io: file, filename: 'nickcage_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/nickcage.mp4')
    vid10.video.attach(io: file, filename: 'nickcage.mp4')

    vid11 = Video.create!(
        title: 'Top 10 Anime Betrayals',
        description: 'The top 10 betrayals throughout anime history. Number 6 will surprise you!',
        owner_id: u5.id,
        views: 871
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/ricked_thumbnail.png')
    vid11.thumbnail.attach(io: file, filename: 'ricked_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/ricked.mp4')
    vid11.video.attach(io: file, filename: 'ricked.mp4')

    vid12 = Video.create!(
        title: 'Smells Like Teen Spirit',
        description: 'By Nirvana',
        owner_id: u2.id,
        views: 303
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/shovelspirit_thumbnail.png')
    vid12.thumbnail.attach(io: file, filename: 'shovelspirit_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/shovelspirit.mp4')
    vid12.video.attach(io: file, filename: 'shovelspirit.mp4')

    vid13 = Video.create!(
        title: 'YardSail!',
        description: 'Come on down this weekend!',
        owner_id: u2.id,
        views: 777
    )
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/yardsale_thumbnail.png')
    vid13.thumbnail.attach(io: file, filename: 'yardsale_thumbnail.png')
    file = open('https://walker-tubular-seed.s3-us-west-1.amazonaws.com/yardsale.mp4')
    vid13.video.attach(io: file, filename: 'yardsale.mp4')

    com1 = Comment.create!(
        user_id: u2.id,
        video_id: vid11.id,
        body: 'Head to this link to see something cool!: http://bit.ly/Yeet82913'
    )

    com2 = Comment.create!(
        user_id: u2.id,
        video_id: vid9.id,
        body: 'Just long enough to really get relaxed. Thank you!'
    )

    com3 = Comment.create!(
        user_id: u2.id,
        video_id: vid1.id,
        body: 'First'
    )

    com4 = Comment.create!(
        user_id: u4.id,
        video_id: vid13.id,
        body: 'SAIL'
    )

    com5 = Comment.create!(
        user_id: u4.id,
        video_id: vid12.id,
        body: 'This is a good remix'
    )

    com6 = Comment.create!(
        user_id: u4.id,
        video_id: vid11.id,
        body: 'I feel betrayed'
    )

    com7 = Comment.create!(
        user_id: u3.id,
        video_id: vid11.id,
        body: 'I feel betrayed'
    )

    com8 = Comment.create!(
        user_id: u2.id,
        video_id: vid11.id,
        body: 'I feel betrayed'
    )

    com9 = Comment.create!(
        user_id: u1.id,
        video_id: vid11.id,
        body: 'I feel betrayed'
    )

    like1 = Like.create!(
        liked: true,
        user_id: u2.id,
        likeable_id: vid1.id,
        likeable_type: 'Video'
    )

    like2 = Like.create!(
        liked: true,
        user_id: u4.id,
        likeable_id: vid1.id,
        likeable_type: 'Video'
    )

    like3 = Like.create!(
        liked: true,
        user_id: u5.id,
        likeable_id: vid1.id,
        likeable_type: 'Video'
    )

    like4 = Like.create!(
        liked: false,
        user_id: u2.id,
        likeable_id: vid11.id,
        likeable_type: 'Video'
    )

    like5 = Like.create!(
        liked: false,
        user_id: u3.id,
        likeable_id: vid11.id,
        likeable_type: 'Video'
    )

    like6 = Like.create!(
        liked: true,
        user_id: u4.id,
        likeable_id: vid11.id,
        likeable_type: 'Video'
    )
end