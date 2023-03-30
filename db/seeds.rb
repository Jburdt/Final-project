puts "Seeding data!"

User.destroy.all
Category.destroy.all
Comment.destroy.all
Review.destroy.all

josh = User.create!(name)





puts "Done seeding data!"