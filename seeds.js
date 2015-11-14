var mongoose = require('./config/database');

var Article = require('./models/article');
var User = require('./models/user');

var users = [
  { // 0
    handle: "Destiny",
    email: "destiny@endless.com"
  },
  { // 1
    handle: "Death",
    email: "death@endless.com"
  },
  { // 2
    handle: "Dream",
    email: "dream@endless.com"
  },
  { // 3
    handle: "Destruction",
    email: "destruction@endless.com"
  },
  { // 4
    handle: "Desire",
    email: "desire@endless.com"
  },
  { // 5
    handle: "Despair",
    email: "despair@endless.com"
  },
  { // 6
    handle: "Delirium",
    email: "delirium@endless.com",
    imageURI: "http://data.whicdn.com/images/100122657/large.jpg"
  },
  { // 7
    handle: "Andrew",
    email: "thisis@notmyemail.com"
  },
  { // 8
    handle: "Odin",
    email: "odin@asgard.com"
  },
  { // 9
    handle: "Neil Gaimon",
    email: "neil@gaimon.com"
  }
];

// clean out old articles and start with a fresh db
Article.remove({}, function(err) {
  if (err) console.log(err);

  // remove any users in the db
  User.remove({}, function(err) {
    if (err) console.log(err);

    // Use the array defined above and the User model to
    // create initial users
    User.create(users, function(err, users) {

      // use callback to define articles for the initial users
      var articles = [
        // Destiny's article
        {
          text:     "I am not one of your people, Bast. And I am \
          not yours to command. But I do not need to open my book \
          to know the fate of all Gods. You know it well enough \
          yourself..",
          creator:  users[0]._id,
          comments: [{
            text:      "Destiny is the eldest of the Endless.",
            commenter: users[7]._id
          }]
        },
        // Death's article
        {
          text:     "When the first living thing existed, I was \
          there, waiting. When the last living thing dies, my job \
          is finished. I'll put the chairs on the tables, turn \
          out the lights and lock the universe behind me when I leave.",
          creator:  users[1]._id,
          comments: [
            {
              text:      "Death is beautiful and inescapable.",
              commenter: users[7]._id,
              like:      false
            },
            {
              text:      "If you'd like to meet her, don't \
              worry. You will.",
              commenter: users[7]._id
            },
            {
              text:     "I find myself wondering about humanity. \
              Their attitude to my sister's gift is so strange. Why \
              do they fear the sunless lands? It is as natural to \
              die as it is to be born. But they fear her. Dread her. \
              Feebly they attempt to placate her. They do not \
              love her.",
              commenter: users[3]._id
            }
          ]
        },
        {
          text:    "We of the Endless are the servants of the \
          living — we are not their masters. We exist because they \
          know, deep in their hearts, that we exist.",
          creator: users[3]._id,
          comments: [
            {
              text:     "You puzzle me, Dream-Weaver. Are you a \
              spider who's spun a web of cunning and deceit and now \
              waits patiently for his prey to come to him; or are you \
              a deer frozen by the light of a hunter's flame, as \
              disaster comes toward you?",
              commenter: users[8]._id
            },
            {
              text: "I cared for him, very much. He was so wise; \
              he seemed so certain of the rightness of his actions. \
              And I, who do nothing but doubt, admired that in him. \
              He was a creature of hope, for dreams are hopes, and \
              echoes of hopes, and I am a creature of despair.",
              commenter: users[5]._id
            },
            {
              text: "Looking back, the process of coming up with the \
              Lord of Dreams seems less like an act of creation than \
              one of sculpture: as if he were already waiting, grave \
              and patient, inside a block of white marble, and all I \
              needed to do was chip away everything that wasn't him.",
              commenter: users[9]._id
            }
          ]
        },
        // Destruction's article
        {
          text:     "It's astonishing how much trouble one can get \
          oneself into, if one works at it. And astonishing how much \
          trouble one can get oneself out of, if one simply assumes \
          that everything will, somehow or other, work out for \
          the best.",
          creator:  users[4]._id
        },
        // Desire's article
        {
          text:     "Human beings are the creatures of desire. They \
          twist and bend as I require it.",
          creator:  users[5]._id
        },
        // Despair's article
        {
          text:     "Some things are changeless. People love, and \
          die, they dream, destroy, despair, go mad. They fulfill \
          their destinies, live out the course of their lives. We \
          fulfill our function, as they fulfill theirs...that will \
          not change.",
          creator:  users[6]._id
        },
        // Delirium's article
        {
          text:     "Is there a word for forgetting the name of \
          someone when you want to introduce them to someone else \
          at the same time you realize you've forgotten the name of \
          the person you're introducing them to as well?",
          creator:  users[4]._id
        }
      ];

      // use callback to create articles for the initial users
      Article.create(articles, function(err, articles) {

        if (err) {
          console.log(err);
        } else {
          console.log(
            "Database initialized with " + users.length  + " users, and " +
            articles.length + " articles."
          );
          mongoose.disconnect();
        }

      });
    });
  });
});
