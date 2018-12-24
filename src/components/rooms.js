const ovalOffice = {
  title: 'Oval Office',
  image: 'ovalOffice.jpg',
  description: 'You enter the Oval Office, the working space of the President.',
  items: [],
  people: [],
  doors: {
    n: 'corridor',
    e: 'westColonnade'
  },
  connections: {
    n: 'Corridor',
    e: 'West Colonnade'
  }
};

const corridor = {
  title: 'Corridor',
  image: 'corridor.jpg',
  description: 'In the corridor of the West Wing between the Oval Office and Roosevelt Room',
  items: [],
  people: [],
  doors: {
    s: 'ovalOffice',
    w: 'rooseveltRoom'
  },
  connections: {
    s: 'Oval Office',
    w: 'Roosevelt Room'
  }
};

const rooseveltRoom = {
  title: 'Roosevelt Room',
  image: 'rooseveltRoom.jpg',
  description: 'Now enter the Roosevelt Room.',
  items: [],
  people: [],
  doors: {
    e: 'corridor'
  },
  connections: {
    e: 'Corridor'
  }
};

const westColonnade = {
  title: 'West Colonnade',
  image: 'westColonnade2.jpg',
  description: 'You step outside to the West Colonnade.',
  items: [],
  people: [],
  doors: {
    w: 'ovalOffice',
    s: 'roseGarden',
    e: 'palmRoom'
  },
  connections: {
    w: 'Oval Office',
    s: 'Rose Garden',
    e: 'Palm Room'
  }
};

const roseGarden = {
  title: 'Rose Garden',
  image: 'roseGarden.jpg',
  description: 'You step outside to the Rose Garden.',
  items: [],
  people: [],
  doors: {
    n: 'westColonnade'
  },
  connections: {
    n: 'West Colonnade'
  }
};

const palmRoom = {
  title: 'Palm Room',
  image: 'palmRoom.jpg',
  description: 'You ener the Palm Room. Staging room between the West Wing and the White House',
  items: [],
  people: [],
  doors: {
    w: 'westColonnade',
    e: 'centerHall'
  },
  connections: {
    w: 'West Colonnade',
    e: 'Center Hall'
  }
};

const centerHall = {
  title: 'Center Hall',
  image: 'centerHall.jpg',
  description: 'You are in the main hall on the ground floor of the White House Residency',
  items: [],
  people: [],
  doors: {
    w: 'palmRoom',
  },
  connections: {
    w: 'Palm Room'
  }
};

export const rooms = {
  ovalOffice,
  westColonnade,
  corridor,
  rooseveltRoom,
  roseGarden,
  palmRoom,
  centerHall
};

export const start = ovalOffice;