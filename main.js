class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    getAverageRating() {
      let total = 0;
      if (this._ratings.length != 0) {
        for(let i = 0; i < this._ratings.length; i++){
          total += this._ratings[i];
        }
        return Math.round((total / this._ratings.length *10))/10;
      }
      console.log(`${this._name} currently has no ratings.`);
    }
  
    toggleCheckOutStatus() {
      if (!(this._isCheckedOut)) {
        this._isCheckedOut = true;
      } else {
        this._isCheckedOut = false;
      }
    }
  
    addRating(rating) {
      this._ratings.push(rating);
    }
  
  }
  
  class Book extends Media {
    constructor(name, title, pages) {
      super(title);
      this._author = name;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  
  }
  
  class Movie extends Media {
    constructor(name, title, runTime){
      super(title);
      this._director = name;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  
  }
  
  class CD extends Media {
    constructor(name, title, songs) {
      super(title);
      this._artist = name;
      this._songs = songs;
    }
  
    get artist () {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
  
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());