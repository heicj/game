const ovalOffice = {
  title: 'Oval Office',
  image: 'ovalOffice.jpg',
  description: 'You enter the Oval Office, the working space of the President.',
  items: [],
  people: [],
  doors: {
    w: 'study',
    n: 'corridor',
    e: 'westColonnade'
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
  westColonnade
};

export const start = ovalOffice;