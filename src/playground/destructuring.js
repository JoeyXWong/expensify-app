// const person = {
//     name: 'Joey',
//     age: 29,
//     location: {
//         city: 'New York',
//         temp: 42
//     }
// };

// //destructuring the fields from the object. Name has a default of John Doe
// const {name="John Doe", age} = person;

// console.log(`${name} is ${age}.`);

// //temp renamed to a new const temperature, temp will now be undefined.
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);


//Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

//if you are skipping elements, you need to leave a comma
const [, city, state = 'New York', zip = '10002'] = address;

console.log(`You are in ${city} ${state}.`);

const itemInfo = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [item, , mediumSize, ] = itemInfo;

console.log(`A medium ${item} costs ${mediumSize} dollars.`)