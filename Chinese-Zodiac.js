function chineseZodiac(year){
    const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
    const baseYear = 1924;
    const givenYear = year - baseYear;
    const element = elements[(Math.floor(givenYear/2)%5)];
    const animal = animals[givenYear % 12];
    return element + " " + animal;

  }