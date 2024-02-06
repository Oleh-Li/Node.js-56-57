//MY CODE
const books = require("./books")

const invokeAction = async ({ action, id, title, author }) => {
    switch (action) {
        case "read":
            const allBooks = await books.getAll()
            return console.log("allBooks==>", allBooks)

        case "getById":
            const book = await books.getById(id)
            return console.log("book==>", book)
        case "add":
            const newBook = await books.add({ title, author })
            return console.log("newBook==>", newBook)
        case "updateById":
            const updateBook = await books.updateById(id, { title, author })
            return console.log("updateBook==>", updateBook)
        case "deleteById":
            const deleteBook = await books.deleteById(id)
            return console.log("deletedBook==>", deleteBook)
    }
}

// invokeAction({ action: "add", title: "First Law", author: "Joe Abercrombie" })
// invokeAction({ action: "read" })
// invokeAction({ action: "getById", id: "u9kgwNWGi3uUUwh0b8V49" })
// invokeAction({ action: "updateById", id: "DGRH1KZzLQZOyT3wMUOah", title: "Heroes", author: "Joe A." })
// invokeAction({ action: "deleteById", id: "UJQTw3SYFikv3MY0EZtaB", })

//Was before
// const books = require("./books");

// const invokeAction = async ({action, id, title, author}) => {
//     switch(action) {
//         case "read":
//             const allBooks = await books.getAll();
//             return console.log(allBooks);
//         case "getById":
//             const oneBook = await books.getById(id);
//             return console.log(oneBook);
//         case "add":
//             const newBook = await books.add({title, author});
//             return console.log(newBook);
//         case "updateById":
//             const updateBook = await books.updateById(id, {title, author});
//             return console.log(updateBook);
//         case "deleteById":
//             const deleteBook = await books.deleteById(id);
//             return console.log(deleteBook);
//     }
// }

// invokeAction({action: "read"});
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V49"});
// invokeAction({action: "add", title: "Worm", author: "John C. McCrae"});
// invokeAction({action: "updateById", id: "uNrjVoY1Ll0GFOof6t4yR", title: "Ward", author: "John C. McCrae"});
// invokeAction({action: "deleteById", id: "uNrjVoY1Ll0GFOof6t4yR"});