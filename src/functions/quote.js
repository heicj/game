const quotes = [
  'this is a quote'
];

module.exports = function quote(){
  return quotes[Math.floor(Math.random() * quotes.length)];
};