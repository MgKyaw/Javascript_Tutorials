class Cat {
  constructor(name, age, breed) {
    this.name = name
    this.age = age
    this.breed = breed
  }

  meow() {
    return "MEOW!!!"
  }
}

let sparkles = new Cat("Sparkles", 5, "Siamese")
sparkles.tellUsAboutYourSelf()
//=>TypeError: sparkles.tellUsAboutYourSelf is not a function
