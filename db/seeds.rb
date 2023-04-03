puts "Seeding data!"

User.destroy_all
Category.destroy_all
Comment.destroy_all
Review.destroy_all

# Category
action = Category.create!(category: "action")
comedy = Category.create!(category: "comedy")
drama = Category.create!(category: "drama")
fantasy = Category.create!(category: "fantasy")
horror = Category.create!(category: "horror")
mystery = Category.create!(category: "mystery")
romance = Category.create!(category: "romance")
thriller = Category.create!(category: "thriller")

# User
josh = User.create!(name: "Josh", username: "Josh1", password: "1234", admin: true)
eric = User.create!(name: "Eric", username: "Eric1", password: "1234", admin: false)

# Review
review1 = Review.create!(title: "Iron Man", length: "2hr 6m", categories: [action], user: josh, release_date: "2008", review: "lorem")
review2 = Review.create!(title: "Iron Man 2", length: "2hr 5m", categories: [action], user: josh, release_date: "2010", review: "lorem")
review3 = Review.create!(title: "Iron Man 3", length: "2hr 10m", categories: [action], user: josh, release_date: "2013", review: "lorem")

# Comment
comment1 = Comment.create!(user: eric, comment: "I agree! This is just the start of a great series!", review: review1)
comment2 = Comment.create!(user: eric, comment: "I can't wait for the next one this one was so good!!", review: review2)
comment3 = Comment.create!(user: eric, comment: "So many suits in this one amazing job Marvel!", review: review3)

puts "Done seeding data!"