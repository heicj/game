const ovalOffice = {
  title: 'Oval Office',
  image: 'ovalOffice.jpg',
  description: 'You enter the Oval Office, the working space of the President.',
  items: [],
  people: [],
  doors: {
    n: 'corridor',
    e: 'westColonnade'
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
  }
};

const westColonnade = {
  title: 'West Colonnade',
  image: 'westColonnade2.jpg',
  description: 'You step outside to the West Colonnade.',
  items: [],
  people: [],
  doors: {
    w: 'ovalOffice'
  }
};

export const rooms = {
  ovalOffice,
  westColonnade,
  corridor,
  rooseveltRoom
};

export const start = ovalOffice;