ActiveRecord::Base.transaction do
    User.destroy_all

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
    
end