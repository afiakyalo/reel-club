# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

club_1 = Club.create(name: "Horror", description: "We watch horror movies", genre: "Horror",)
club_2 = Club.create(name: "Drama", description: "Who doesn't like some drama in their life?", genre: "Drama",)
club_3 = Club.create(name: "Thriller", description: "Let's solve the mystery", genre: "Thriller",)
club_4 = Club.create(name: "The Jane Austen Fanatics", description: "JA all day every day", genre: "Horror",)
