# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
end