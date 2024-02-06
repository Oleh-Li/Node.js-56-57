//MY CODE
const fs = require("fs/promises")
const path = require("path")
const { nanoid } = require("nanoid")

const booksPath = path.join(__dirname, "books.json")

const getAll = async () => {
    const data = await fs.readFile(booksPath)
    return JSON.parse(data)
}

const getById = async (id) => {
    const books = await getAll()
    const book = books.find(book => book.id === id)
    return book || null
}

const add = async (data) => {
    const books = await getAll()
    const newBook = {
        id: nanoid(),
        ...data
    }
    books.push(newBook)
    await fs.writeFile(booksPath, JSON.stringify(books, null, 2)) // argumens for that json file not be in one string
    return newBook
}

const updateById = async (id, data) => {
    const books = await getAll()
    const index = books.findIndex(item => item.id === id)
    if (index === -1) {
        return null
    }
    books[index] = { id, ...data }
    await fs.writeFile(booksPath, JSON.stringify(books, null, 2))
    return books[index]

    //my variant, but not sure that correct
    // const updatedBook = {
    //     id,
    //     ...data
    // }
    // const newAllBooks = await books.filter(item => item.id !== id)
    // newAllBooks.push(updatedBook)
    // await fs.writeFile(booksPath, JSON.stringify(newAllBooks, null, 2))
    // return updatedBook
}

const deleteById = async (id) => {
    const books = await getAll()
    const index = books.findIndex(item => item.id === id)
    if (index === -1) {
        return null
    }
    const [result] = books.splice(index, 1)
    fs.writeFile(booksPath, JSON.stringify(books, null, 2))
    return result
}

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    deleteById
}


//WAS BEFORE
// const fs = require("fs/promises");
// const path = require("path");
// const {nanoid} = require("nanoid");

// const booksPath = path.join(__dirname, "books.json");

// const getAll = async () => {
//     const data = await fs.readFile(booksPath);
//     return JSON.parse(data);
// }

// const getById = async (id) => {
//     const books = await getAll();
//     const result = books.find(item => item.id === id);
//     return result || null;
// }

// const add = async(data) => {
//     const books = await getAll();
//     const newBook = {
//         id: nanoid(),
//         ...data,
//     }
//     books.push(newBook);
//     await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
//     return newBook;
// }

// const updateById = async(id, data) => {
//     const books = await getAll();
//     const index = books.findIndex(item => item.id === id);
//     if(index === -1){
//         return null;
//     }
//     books[index] = {id, ...data};
//     await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
//     return books[index];
// }

// const deleteById = async(id) => {
//     const books = await getAll();
//     const index = books.findIndex(item => item.id === id);
//     if(index === -1){
//         return null;
//     }
//     const [result] = books.splice(index, 1);
//     await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
//     return result;
// }

// module.exports = {
//     getAll,
//     getById,
//     add,
//     updateById,
//     deleteById,
// }