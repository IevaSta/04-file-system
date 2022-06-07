import { file } from './lib/file.js'
import { skaitomKarves } from './lib/karviuTurgus.js'

const karves = await skaitomKarves();
// console.log(karves);


const readStatus = await file.read('users', 'petras.json');
// console.log(readStatus);

const userMaryte = {
    name: 'Maryte',
    age: 87,
    isMarried: false,
}

const createStatus = await file.create('users', 'maryte.json', userMaryte);
console.log('File status:', createStatus)