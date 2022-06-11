import { file } from './lib/file.js'


//IIFE = ifis
(async () => {

    // const user = {
    // }

    // user.test = "Appended";
    // const append = await file.append('users', 'test.json', user);
    // console.log('Append:', append);

    const readStatus1 = await file.read('users', 'petras.json');
    console.log('Read1:', readStatus1);

    const user = {
        name: 'Petras',
        age: 87,
        isMarried: false,
    }

    const createStatus = await file.create('users', 'petras.json', user);
    console.log('Create:', createStatus);

    const readStatus2 = await file.read('users', 'petras.json');
    console.log('Read2:', readStatus2);

    user.isMarried = true;
    const updateStatus = await file.update('users', "petras.json", user)
    console.log('Update:', updateStatus);

    const readStatus3 = await file.read('users', 'petras.json');
    console.log('Read3:', readStatus3);

    const deleteStatus = await file.delete('users', 'petras.json');
    console.log('Delete:', deleteStatus);

    const readStatus4 = await file.read('users', 'petras.json');
    console.log('Read4:', readStatus4);

})();