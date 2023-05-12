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
josh = User.create!(name: "Josh", username: "Josh1", password: "123456", admin: true)
eric = User.create!(name: "Eric", username: "Eric1", password: "123456", admin: false)

# Review
review1 = Review.create!(title: "Iron Man", category: action, author: josh, content: "lorem asdfasdfasdfa", image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg")

review2 = Review.create!(title: "Iron Man 2", category: action, author: josh, content: "lorem asdfasdfasdfa", image: "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg")

review3 = Review.create!(title: "Iron Man 3", category: action, author: josh, content: "lorem asdfasdfasdfa", image: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg")

# Comments
comment1 = Comment.create!(user: eric, review: review1, comment: "I agree! This is just the start of a great series!")
comment2 = Comment.create!(user: eric, review: review2, comment: "I can't wait for the next one this one was so good!!")
comment3 = Comment.create!(user: eric, review: review3, comment: "So many suits in this one amazing job Marvel!")

puts "Done seeding data!"