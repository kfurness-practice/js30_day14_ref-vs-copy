    // start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age,age2);
// age = 200;
// console.log(age, age2);
//
// let name = 'wes';
// let name2 = name;
// console.log(name, name2);
// name = 'wesley',
// console.log(name, name2);

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;

    // console.log(players, team);

    // You might think we can just do something like this:
    team[3] = 'Lux'

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    const team3 = [].concat(players)
    // one day

    // or create a new array and concat the old one in

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = [...team];

    const team5 = Array.from(team4)

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects

    const person = {
      name: 'Kelly Furness',
      age: 76
    }

    // and think we make a copy:
    const madame = person;
    madame.realAge = 84;
    person.number = 14;


    // how do we take a copy instead?
    const mad2 = Object.assign({}, person, {age: 23});

    // We will hopefully soon see the object ...spread
    // const cap3 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const kelly = {
      name: "kelly",
      age: 3,
      social: {
        twitter: '@knfuress',
        facebook: 'none',
        instagram: 'none'
      }
    }

const kelly2 = Object.assign({}, kelly, {age: 4})
kelly2.social.twitter = "none";
// Changes everything!


const kelly3 = JSON.parse(JSON.stringify(kelly));
kelly3.social.twitter = "newAccount"
