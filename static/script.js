window.onload = function() {

  // list of quotes (in lieu of a database)
  var quotes = [
    {
      name: "Amelia Earhart",
      quote: "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward."
    },
    {
      name: "Galileo Galilei",
      quote: "I have never met a man so ignorant that I couldn't learn something from him."
    },
    {
      name: "Mother Teresa",
      quote: "If we have no peace, it is because we have forgotten that we belong to each other."
    },
    {
      name: "Viktor Frankl",
      quote: "When we are no longer able to change a situation - we are challenged to change ourselves."
    },
    {
      name: "Dalai Lama",
      quote: "If you want others to be happy, practice compassion. If you want to be happy, practice compassion."
    },
    {
      name: "Martin Luther King, Jr.",
      quote: "He who passively accepts evil is as much involved in it as he who helps to perpetrate it. He who accepts evil without protesting against it is really cooperating with it."
    },
    {
      name: "Edmund Burke",
      quote: "The only thing necessary for the triumph of evil is for good men to do nothing."
    },
    {
      name: "Alfred Lord Tennyson",
      quote: "Knowledge comes, but wisdom lingers."
    },
    {
      name: "Winston Churchill",
      quote: "History is written by the victors."
    },
    {
      name: "Ernest Hemingway",
      quote: "There is nothing noble in being superior to your fellow men. True nobility lies in being superior to your former self."
    },
    {
      name: "William James",
      quote: "Act as if what you do makes a difference. It does."
    },
    {
      name: "Albert Einstein",
      quote: "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it."
    },
    {
      name: "Charles Spurgeon",
      quote: "Wisdom is the right use of knowledge. To know is not to be wise. Many men know a great deal, and are all the greater fools for it. There is no fool so great a fool as a knowing fool. But to know how to use knowledge is to have wisdom."
    },
    {
      name: "Heraclitus",
      quote: "There is nothing permanent except change."
    },
    {
      name: "Franklin D. Roosevelt",
      quote: "When you reach the end of your rope, tie a knot in it and hang on."
    },
    {
      name: "Steve Jobs",
      quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. "
    },
    {
      name: "Dr. Seuss",
      quote: "Don't cry because it's over. Smile because it happened."
    },
    {
      name: "Leonardo da Vinci",
      quote: "For once you have tasted flight you will walk the earth with your eyes turned skywards, for there you have been and there you will long to return."
    },
    {
      name: "Bob Marley",
      quote: "Truth is everybody is going to hurt you: you just gotta find the ones worth suffering for."
    },
    {
      name: "Maya Angelou",
      quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
  ]

  // get the list element of the document to modify
  var listElm = document.querySelector('#infinite-list');

  // nextItem tracks which item of the quotes list has been loaded last
  var nextItem = 0;

  // add 3 more quotes at a time.
  var loadMore = function() {

    // specify how many items to add at a time
    var loadIncrement = 3;

    // if querying a database, use an API call here to grab the next 'segment' of records
    // use a framework to update the DOM as opposed to adding elements in JavaScript, as shown here
    // display a loading wheel while waiting for request 

    // for loop iterating across three quotes, starting at the nextItem index
    for (var i = nextItem; i < nextItem + loadIncrement; i++) {

      // if the nextItem is at the end of the list of quotes, add an HTML element signifying the end of the list to the user
      if (i === quotes.length) {
        var endBlock = document.createElement('p');
        endBlock.className = 'text-center';
        var endNote = document.createElement('em');
        endNote.innerText = '- - end of list - -';
        endBlock.appendChild(endNote);
        listElm.appendChild(endBlock);
        break;
      }

      // create the quote block using blockquote, p, and footer elements with bootstrap
      var quoteBlock = document.createElement('blockquote');
      var quote = document.createElement('p');
      quote.innerText = quotes[i].quote;
      var author = document.createElement('footer');
      author.innerText = quotes[i].name;
      quoteBlock.appendChild(quote);
      quoteBlock.appendChild(author);
      listElm.appendChild(quoteBlock);

    }

    // increment the nextItem index
    nextItem += loadIncrement;

  }

  // detect when scrolled to bottom of the list element
  listElm.addEventListener('scroll', function() {
    if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
      // Load more quotes.
      loadMore();
    }
  });

  // initially load three quotes
  loadMore();
}
