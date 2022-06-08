import { file } from './lib/file.js'


// const readStatus = await file.read('userssssss', 'petras.json');
// console.log(readStatus);

const userMaryte = {
    name: 'Maryte',
    age: 87,
    isMarried: false,
}

const createStatus = await file.create('users', 'betkas.json', userMaryte);
console.log(createStatus);