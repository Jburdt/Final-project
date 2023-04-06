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

# Comments
comment1 = Comment.create!(user: eric, comment: "I agree! This is just the start of a great series!")
comment2 = Comment.create!(user: eric, comment: "I can't wait for the next one this one was so good!!")
comment3 = Comment.create!(user: eric, comment: "So many suits in this one amazing job Marvel!")

# Review
review1 = Review.create!(title: "Iron Man", category: action, user: josh, content: "lorem asdfasdfasdfa", comment: comment1)
review2 = Review.create!(title: "Iron Man 2", category: action, user: josh, content: "lorem asdfasdfasdfa", comment: comment2)
review3 = Review.create!(title: "Iron Man 3", category: action, user: josh, content: "lorem asdfasdfasdfa", comment: comment3)

puts "Done seeding data!"