//async/await
//dokumentacija
//try/catch

const file = {};

//dir-folderis, kur bus failas
//fileName-failo pavadinimas su pletiniu
//content-turinys, kuri reikia irasyti i kuriama faila


/**
 * Sukuriamas failas, jei tokio dar nera nurodytoje direktorijoje
 * @param {string} dir Reliatyvus kelias iki direktorijo, kur laikomi norimi failai, pvz.: /data/users
 * @param {string} fileName Nurimo failo pavadinimas su jo pletiniu
 * @param {*} content Objektas (pvz.: {...}), kuri norime irasyti i kuriama faila
 * @returns {boolean|string} Sekmes atveju - `true`; Klaidos atveju - klaidos pranesimas
 */



file.create = (dir, fileName, content) => {
    // if (typeof content !== 'string') {
    //     content = JSON.stringify(content);
    // }
    console.log('kuriamas failas...');
}

file.read = () => {
    console.log('skaitomas failas...');
}

file.update = () => {
    console.log('atnaujinamas failas...');
}

file.delete = () => {
    console.log('trinamas failas...');
}



export { file }