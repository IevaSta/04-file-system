import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const file = {};

file.fullPath = (dir, fileName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname, '../data', dir, fileName);
}

/**
 * Sukuriamas failas, jei tokio dar nera nurodytoje direktorijoje
 * @param {string} dir Reliatyvus kelias iki direktorijo, kur laikomi norimi failai, pvz.: /data/users
 * @param {string} fileName Nurimo failo pavadinimas su jo pletiniu
 * @param {object} content Objektas (pvz.: {...}), kuri norime irasyti i kuriama faila
 * @returns {boolean|string} Sekmes atveju - `true`; Klaidos atveju - klaidos pranesimas
 */

file.create = async (dir, fileName, content) => {
    try {
        const filePath = file.fullPath(dir, fileName);

        // 1. sukurti faila + atidaryti
        const fileDescriptor = await fs.open(filePath, 'wx');

        // 2. i faila irasyti turini + issaugoti + uzdaryti
        await fs.writeFile(fileDescriptor, JSON.stringify(content));

        return true;
    } catch (error) {
        return false;
    }
}

/**
 * Perskaitomas failo turinys (tekstinis failas)
 * @param {string} dir Reliatyvus kelias iki direktorijos, kur laikomi norimi failai, pvz.: /data/users
 * @param {string} fileName Nurimo failo pavadinimas su jo pletiniu
 * @returns {Promise<string|boolean} Sekmes atveju - failo turinys; Klaidos atveju -   `false`
 */
file.read = async (dir, fileName) => {
    try {
        const filePath = file.fullPath(dir, fileName);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return fileContent;
    } catch (error) {
        return false;
    }
}

file.update = () => {
    console.log('atnaujinamas failas...');
}

file.delete = () => {
    console.log('trinamas failas...');
}

export { file }