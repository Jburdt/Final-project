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
review1 = Review.create!(title: "Iron Man", category: action, author: josh, content: "lorem asdfasdfasdfa", image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fresizing.flixster.com%2FjTU4RAjnwcZAconup5QZkH2Emb8%3D%2F206x305%2Fv2%2Fhttps%3A%2F%2Fflxt.tmsimg.com%2Fassets%2Fp170620_p_v8_az.jpg&tbnid=_dvOEEJu0QChpM&vet=12ahUKEwj-59mzpqf-AhWvIt4AHfUHBNwQMygIegUIARD2AQ..i&imgrefurl=https%3A%2F%2Fwww.rottentomatoes.com%2Fm%2Firon_man&docid=-z5gzOGTnfnmmM&w=206&h=305&itg=1&q=iron%20man%20movies&ved=2ahUKEwj-59mzpqf-AhWvIt4AHfUHBNwQMygIegUIARD2AQ")
review2 = Review.create!(title: "Iron Man 2", category: action, author: josh, content: "lorem asdfasdfasdfa", image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fironman%2Fimages%2Fd%2Fdf%2FP3546118_v_v8_af.jpg%2Frevision%2Flatest%3Fcb%3D20191202171556&tbnid=Hd7sthtkbZmGlM&vet=12ahUKEwiUk73Epqf-AhW9It4AHT0vBLkQMygBegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fironman.fandom.com%2Fwiki%2FMarvel_Studios%3A_Iron_Man_2&docid=_9u9HZVBjwJZhM&w=960&h=1440&q=iron%20man%202%20movie&ved=2ahUKEwiUk73Epqf-AhW9It4AHT0vBLkQMygBegUIARDjAQ")
review3 = Review.create!(title: "Iron Man 3", category: action, author: josh, content: "lorem asdfasdfasdfa", image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ%40%40._V1_.jpg&tbnid=JfNyz3ithWir-M&vet=12ahUKEwjft5HRpqf-AhU7O94AHZhcBVwQMygAegUIARDkAQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1300854%2F&docid=yZV-Ze2dEuJJjM&w=770&h=1100&q=iron%20man%203%20movie&ved=2ahUKEwjft5HRpqf-AhU7O94AHZhcBVwQMygAegUIARDkAQ")

# Comments
comment1 = Comment.create!(user: eric, review: review1, comment: "I agree! This is just the start of a great series!")
comment2 = Comment.create!(user: eric, review: review2, comment: "I can't wait for the next one this one was so good!!")
comment3 = Comment.create!(user: eric, review: review3, comment: "So many suits in this one amazing job Marvel!")


puts "Done seeding data!"