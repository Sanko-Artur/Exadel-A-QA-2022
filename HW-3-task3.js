// 3.	You need to create a Zoo catalog, where we will keep all animals from this Zoo.
//
// a.	You need to create a Zoo class which. See structure in the attachment. You should implement the following methods:
// i.	   get/set zoo’s address
// ii.	 get/set zoo’s area
// iii.	 get established date
// iv.	 get/set ticket’s price
// v.	   add/remove/edit worker
// vi.	 add/remove/edit animal
// vii.	 show all animals
// viii. show animal by id
// ix.	 show all workers
//
// b.	Create Animal class. See structure in the attachment. Implement the following methods:
// i.	   get animal info
// ii.	 set weight
// iii.	 set height
//
// c.	Create child classes for some kinds of animals. See structure in the attachment. Implement the possibility
// to set the properties of child classes.

class Zoo {
  constructor(address, area, establisheDate, ticketPrice) {
    this.address = address;
    this.area = area;
    this.establisheDate = establisheDate;
    this.ticketPrice = ticketPrice;
    this.workers = [];
    this.animals = [];
  }

  get getZooAddress() {
    console.log(`Zoo's address is: ${this.address}`);
  }

  get getZooArea() {
    console.log(`Zoo's area is: ${this.area}`);
  }

  get getDateOfFoundation() {
    console.log(`Date of foundation is: ${this.dateOfFoundation} years`);
  }

  get getTicketPrice() {
    console.log(`Ticket's price is: ${this.ticketPrice} BYN`);
  }

  addWorker(workerID, workerSurname, workerName) {
    this.workers[workerID - 1] = [workerID, workerSurname, workerName];
  }

  removeWorker(workerID) {
    this.workers.splice(workerID - 1, 1);
  }

  editWorker(oldWorkerID, newWorkerID, newWorkerSurname, newWorkerName) {
    for (let worker of this.workers) {
      if (worker.includes(oldWorkerID)) {
        const idx = this.workers.indexOf(worker);
        this.workers[idx] = [newWorkerID, newWorkerSurname, newWorkerName];
      }
    }
  }

  get showAllWorkers() {
    for (let info of this.workers) {
      console.log(
        `Worker's ID: ${info[0]}, Worker's surname: ${info[1]}, Worker's name: ${info[2]}`
      );
    }
  }

  addAnimal(animalID, speciesAnimal, ageAnimal) {
    this.animals[animalID - 1] = [animalID, speciesAnimal, ageAnimal];
  }

  removeAnimal(animalID) {
    this.animals.splice(animalID - 1, 1);
  }

  editAnimal(oldAnimalID, newAnimalID, newSpeciesAnimal, newAgeAnimal) {
    for (let animal of this.animals) {
      if (animal.includes(oldAnimalID)) {
        const idx = this.animals.indexOf(animal);
        this.animals[idx] = [newAnimalID, newSpeciesAnimal, newAgeAnimal];
      }
    }
  }

  get showAllAnimals() {
    for (let info of this.animals) {
      console.log(
        `Animal's ID: ${info[0]}, Animal's species: ${info[1]}, Animal's age: ${info[2]}`
      );
    }
  }

  showAnimalById(animalID) {
    const animalById = this.animals[animalID - 1];
    console.log(
      `Animal's ID: ${animalById[0]}, Animal's species: ${animalById[1]}, Animal's age: ${animalById[2]}`
    );
  }
}

class ZooGrodno extends Zoo {}
const zooGrodno = new ZooGrodno(
  'Timirayzeva str. 11, Grodno',
  '5,35 hectares',
  1927,
  7
);

console.log('----------------------------------------------');
console.log(zooGrodno);
console.log('----------------------------------------------');
zooGrodno.getZooAddress;
zooGrodno.getZooArea;
zooGrodno.getDateOfFoundation;
zooGrodno.getTicketPrice;
console.log('----------------------------------------------');

console.log(
  '-----------------------------------------------------------------'
);
zooGrodno.addWorker(1, 'Sanko', 'Artur');
zooGrodno.addWorker(2, 'Petrov', 'Petr');
zooGrodno.addWorker(3, 'Ivanov', 'Ivan');
zooGrodno.removeWorker(2);
zooGrodno.editWorker(3, 2, 'Ivanov', 'Petr');
zooGrodno.addWorker(3, 'Ivanova', 'Anay');
zooGrodno.addWorker(4, 'Olegov', 'Oleg');
zooGrodno.addWorker(5, 'Maksimov', 'Maksim');
zooGrodno.removeWorker(4);
zooGrodno.editWorker(5, 4, 'Maksimov', 'Maksim');
zooGrodno.showAllWorkers;
console.log(
  '-----------------------------------------------------------------'
);
zooGrodno.addAnimal(1, 'Wolf', 5);
zooGrodno.addAnimal(2, 'Bear', 10);
zooGrodno.addAnimal(3, 'Tiger', 7);
zooGrodno.addAnimal(4, 'Lion', 13);
zooGrodno.removeAnimal(2);
zooGrodno.editAnimal(3, 2, 'Tiger', 10);
zooGrodno.editAnimal(4, 3, 'Lion', 14);
zooGrodno.showAllAnimals;
console.log(
  '-----------------------------------------------------------------'
);
zooGrodno.showAnimalById(2);
console.log(
  '-----------------------------------------------------------------'
);
console.log(zooGrodno);
console.log(
  '-----------------------------------------------------------------'
);

class Animal {
  constructor(type, color, weight, height, placeOfOrigin) {
    this.type = type;
    this.color = color;
    this.weight = weight;
    this.height = height;
    this.placeOfOrigin = placeOfOrigin;
  }

  get getAnimalInfo() {
    console.log(
      `Type: ${this.type}\nColor: ${this.color}\nWeight: ${this.weight}\nHieght: ${this.height}\nPlace of origin: ${this.placeOfOrigin}`
    );
  }
}

class Snakes extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, isPoisonous) {
    super(type, color, weight, height, placeOfOrigin);
    this.isPoisonous = isPoisonous;
  }
}

const viperaBerus = new Snakes(
  'Vipera berus',
  'Melanistic colour patterns',
  '10 kg',
  '2 metres',
  'Western Europe',
  true
);

class CatLike extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, isSafeToPet) {
    super(type, color, weight, height, placeOfOrigin);
    this.isSafeToPet = isSafeToPet;
  }
}

const tiger = new CatLike(
  'Amur tiger',
  'Orange with black stripes',
  '110 cm',
  '200 kg',
  'Russian Far East',
  false
);

class Birds extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, isFlying) {
    super(type, color, weight, height, placeOfOrigin);
    this.isFlying = isFlying;
  }
}

const sparrow = new Birds(
  'Old world sparrow',
  'Colourful',
  '13.4 grams',
  '18 cm',
  'Northern Europe',
  true
);

console.log('--------------------------------------');
console.log(viperaBerus);
viperaBerus.getAnimalInfo;
console.log('--------------------------------------');
console.log(tiger);
tiger.getAnimalInfo;
console.log('--------------------------------------');
console.log(sparrow);
sparrow.getAnimalInfo;
console.log('--------------------------------------');

class Worker {
  constructor(firstName, lastName, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
}

const sanko = new Worker('Artur', 'Sanko', '+375(00)0 00 00 00');

console.log('--------------------------------------');
console.log(sanko);
console.log('--------------------------------------');

// node ./HW-3-task3
