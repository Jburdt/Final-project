puts "Seeding data!"

User.destroy_all
Category.destroy_all
Comment.destroy_all
Review.destroy_all

# User
josh = User.create!(name: "Josh", username: "Josh1", password: "1234", admin: "true")
eric = User.create!(name: "Eric", username: "Eric1", password: "1234", admin: "false")

# Category
action = Category.create!(category: "action")
comedy = Category.create!(category: "comedy")
drama = Category.create!(category: "drama")
fantasy = Category.create!(category: "fantasy")
horror = Category.create!(category: "horror")
mystery = Category.create!(category: "mystery")
romance = Category.create!(category: "romance")
thriller = Category.create!(category: "thriller")

# Review
i1 = Review.create!(title: "Iron Man", length: "2hr 6m", category: action, user: josh, release_date: "2008", review: "Great movie! Good intro to the Iron man movies!", comment: comment1)
i2 = Review.create!(title: "Iron Man 2", length: "2hr 5m", category: action, user: josh, release_date: "2010", review: "Great movie! I like where the series is headed!", comment: comment2)
i3 = Review.create!(title: "Iron Man 3", length: "2hr 10m", category: action, user: josh, release_date: "2013", review: "Great movie! Love the new suit!", comment: comment3)

# Comment
comment1 = Comment.create!(user:eric, comment: "I agree! This is just the start of a great serios!")
comment2 = Comment.create!(user:eric, comment: "I can't wait for the next one this one was so good!!")
comment3 = Comment.create!(user:eric, comment: "So many suits in this one amazing job Marvel!")

puts "Done seeding data!"

#look at that youtube video to see the extionsion that shows the schema