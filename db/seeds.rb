puts "Seeding data!"
User.destroy_all
Category.destroy_all
Comment.destroy_all
Review.destroy_all

# User
puts "Creating users!"
josh = User.create!(name: "Josh", username: "Josh1", password: "123456")
eric = User.create!(name: "Eric", username: "Eric1", password: "123456")

# Category
puts "Creating categories!"
action = Category.create!(category: "Action")
comedy = Category.create!(category: "Comedy")
drama = Category.create!(category: "Drama")
fantasy = Category.create!(category: "Fantasy")
horror = Category.create!(category: "Horror")
mystery = Category.create!(category: "Mystery")
romance = Category.create!(category: "Romance")
thriller = Category.create!(category: "Thriller")


# Review 
puts "Creating reviews!"
review1 = Review.create!(title: "Iron Man", category: action, author: josh, content: "Iron Man is a thrilling and visually stunning superhero film that kick-started the Marvel Cinematic Universe (MCU) with a bang. Directed by Jon Favreau, this 2008 blockbuster introduces us to the charismatic billionaire genius, Tony Stark, brilliantly portrayed by Robert Downey Jr.
The film expertly balances action, humor, and a compelling origin story. Tony Stark's transformation from a reckless arms dealer to a selfless hero is captivating to watch. The witty dialogue and Downey Jr.'s charismatic performance add depth and charm to the character, making him instantly iconic.
The visual effects are top-notch, especially the breathtaking Iron Man suit sequences. The film's blend of practical and CGI effects seamlessly brings the armored superhero to life. The exhilarating action scenes, complemented by a fitting score, keep audiences on the edge of their seats.
Iron Man not only establishes the character but also sets the foundation for the interconnected MCU. It successfully introduces the concept of a shared universe, leaving fans hungry for more superhero adventures. With its engaging story, stellar performances, and impressive technical achievements, Iron Man remains a must-watch for any superhero enthusiast.", image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg")

review2 = Review.create!(title: "Iron Man 2", category: action, author: josh, content: "Iron Man 2 is an action-packed sequel that continues the story of Tony Stark, portrayed once again by the charismatic Robert Downey Jr. Directed by Jon Favreau, the film explores the consequences of Tony's dual life as a superhero and a public figure.
While the film boasts impressive visual effects and thrilling action sequences, it falls short in terms of storytelling compared to its predecessor. The plot feels slightly convoluted, with multiple subplots and characters competing for screen time. The introduction of new characters, such as Black Widow (Scarlett Johansson) and Whiplash (Mickey Rourke), adds depth to the universe but sometimes feels overcrowded.
However, Downey Jr.'s magnetic performance as Tony Stark remains a highlight, capturing the wit and charm of the character. The chemistry between Downey Jr. and Gwyneth Paltrow, who plays Pepper Potts, adds emotional depth to the story.
While Iron Man 2 may not reach the heights of its predecessor, it still delivers entertaining action sequences and continues to build the foundation for the expanding MCU. Fans of the first film and the Marvel universe will find enjoyment in this second installment, despite its narrative shortcomings.", image: "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg")

review3 = Review.create!(title: "Iron Man 3", category: action, author: josh, content: "Iron Man 3 takes a bold and unexpected approach to the beloved superhero franchise. Directed by Shane Black, the film delves into the aftermath of The Avengers and explores Tony Stark's vulnerability and resilience in the face of a new threat.
Robert Downey Jr. once again shines in his role as Tony Stark, delivering a nuanced performance that showcases both the character's wit and inner turmoil. The film cleverly deconstructs the hero, stripping away his suits and forcing him to rely on his ingenuity and resourcefulness.
Iron Man 3 offers a fresh take on the action genre, blending intense and thrilling set pieces with a more character-driven narrative. The film explores themes of identity, redemption, and the consequences of one's actions.
While some fans may have mixed feelings about certain plot twists and character choices, the film ultimately succeeds in delivering an emotionally charged and satisfying conclusion to the trilogy.
With its dynamic performances, sharp dialogue, and impressive visual effects, Iron Man 3 proves to be an engaging and thought-provoking entry in the Marvel Cinematic Universe. It serves as a testament to the enduring appeal of Tony Stark and his journey as a superhero.", image: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg")

review4 = Review.create!(title: "Iron Man 3", category: action, author: eric, content: "Iron Man 3 takes a bold and unexpected approach to the beloved superhero franchise. Directed by Shane Black, the film delves into the aftermath of The Avengers and explores Tony Stark's vulnerability and resilience in the face of a new threat.
Robert Downey Jr. once again shines in his role as Tony Stark, delivering a nuanced performance that showcases both the character's wit and inner turmoil. The film cleverly deconstructs the hero, stripping away his suits and forcing him to rely on his ingenuity and resourcefulness.
Iron Man 3 offers a fresh take on the action genre, blending intense and thrilling set pieces with a more character-driven narrative. The film explores themes of identity, redemption, and the consequences of one's actions.
While some fans may have mixed feelings about certain plot twists and character choices, the film ultimately succeeds in delivering an emotionally charged and satisfying conclusion to the trilogy.
With its dynamic performances, sharp dialogue, and impressive visual effects, Iron Man 3 proves to be an engaging and thought-provoking entry in the Marvel Cinematic Universe. It serves as a testament to the enduring appeal of Tony Stark and his journey as a superhero.", image: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg")

# Comments
puts "Creating comments!"
comment1 = Comment.create!(user: eric, review: review1, comment: "I agree! This is just the start of a great series!")
comment2 = Comment.create!(user: eric, review: review2, comment: "I can't wait for the next one this one was so good!!")
comment3 = Comment.create!(user: eric, review: review3, comment: "So many suits in this one amazing job Marvel!")

puts "Done seeding data!"