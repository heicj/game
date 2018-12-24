const quotes = [
  'You know I’m automatically attracted to beautiful—I just start kissing them. It’s like a magnet. Just kiss. I don’t even wait. And when you’re a star, they let you do it. You can do anything. Grab them by the p**sy. You can do anything.',
  'Why can’t we use nuclear weapons?',
  'I\'m also honored to have the greatest temperament that anybody has.',
  'I don\'t think Ivanka would do that, although she does have a very nice figure. I\'ve said if Ivanka weren\'t my daughter, perhaps I\'d be dating her.',
  'I could stand in the middle of Fifth Avenue and shoot somebody, and I wouldn\'t lose any voters, okay? It\'s, like, incredible.',
  'We won with poorly educated. I love the poorly educated.',
  'I know more about ISIS than the generals do, believe me...I would bomb the sh**t out of them.',
  'I\'ve had a beautiful, I\'ve had a flawless campaign. You\'ll be writing books about this campaign.',
  'I\'m speaking with myself, number one, because I have a very good brain and I’ve said a lot of things… My primary consultant is myself',
  'Happy New Year to all, including to my many enemies and those who have fought me and lost so badly they just don’t know what to do. Love!',
  'My fingers are long and beautiful, as, it has been well been documented, are various other parts of my body.'
];

module.exports = function quote(){
  return quotes[Math.floor(Math.random() * quotes.length)];
};