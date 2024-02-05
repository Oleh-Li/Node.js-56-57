//if just import fs we need use callbacks
// const fs = require("fs")
// fs.readFile("./files/file.txt", (error, data)=>{
// console.log("error==>", error)
// console.log("data==>", data)
// })

const fs = require("fs/promises")
//or 
// const fs = require("fs").promises

//if fs with promises variant 1
// const fs = require("fs/promises")
// fs.readFile("./files/file.txt")
//     .then(data => console.log(data.toString()))
//     .catch(error => console.log(error.message))



//appendFile to add something to file
const addText = async () => {
    const result = await fs.appendFile("./files/file.txt", "\nLogen bloody nine")
}

addText()

//if fs with promises variant 2
const readFile = async () => {
    const data = await (await fs.readFile("./files/file.txt", "utf-8"))
    console.log("data==>", data)
}
readFile()

//writeFile remove old and add neww
const replaceText = async () => {
    await fs.writeFile("./files/file.txt", "Whirun of Bligh and Logen fff")
}

replaceText()
readFile()

// const readNoFile = async()=>{
//     const noText = fs.readFile("./files/file7.txt", "utf-8")
//     console.log("noText==>", noText)
// }
// readNoFile()

//CODE WAS HERE
// const fs = require("fs/promises");
// const fs = require("fs").promises;

/*
const readFile = async() => {
    const text = await fs.readFile("./files/file.txt", "utf-8");
    console.log(text);
    // const buffer = await fs.readFile("./files/file.txt");
    // const text = buffer.toString();
    // console.log(text)
}

readFile()
*/
/*
const addText = async()=> {
    await fs.appendFile("./files/file2.txt", "\nТак говорил Заратустра");
}

addText();
*/
/*
const replaceText = async()=> {
    const result = await fs.writeFile("./files/file3.txt", "Ницше");
    console.log(result);
}

replaceText();
*/
// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// fs.readFile("./files/file.txt", (error, data) => {
//     console.log(error);
//     console.log(data);
// })