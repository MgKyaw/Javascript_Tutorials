class Dog {
  constructor(name, age, breed) {
    this.name = name
    this.age = age
    this.breed = breed
  }
  tellUsAboutYourSelf() {
    return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`
  }

  woof() {
    return "WOOF!!!"
  }
}

let fido = new Dog("Fido", 3, "dachshund")
fido.tellUsAboutYourSelf()
//=> 'My name is Fido. I am a dachshund and I am 3 years old.'
