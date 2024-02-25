const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public")); //якщо прийде запит на статичний запит треба шукати його в папці паблік, бо інакше сервер не віддає файли

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => { // приклад як на етапі зберігання перейменувати файл
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: multerConfig
})

const books = [];

app.get("/api/books", (req, res) => {
    res.json(books);
})
// upload.fields([{name: "cover", maxCount: 1}, {name: "subcover", maxCount: 2}]) якщо очікуємо файлів в декількох полях
// upload.array("cover", 8) якщо очікуємо декілька файлівб 8 означає максимальну кількість

const booksDir = path.join(__dirname, "public", "books");

app.post("/api/books", upload.single("cover"), async (req, res) => { //означає завантажити один файл з полем cover а інша поля передай в реквест боди
    // console.log("req.body==>", req.body)
    // console.log("req.body==>", req.file)
    const { path: tempUpload, originalname } = req.file;
    const resultUpload = path.join(booksDir, originalname);
    await fs.rename(tempUpload, resultUpload); //мається на увазі перміщенняб перший аргумент це старий шляхб другий аргумент новий
    const cover = path.join("books", originalname);
    const newBook = {
        id: nanoid(),
        ...req.body,
        cover,
    };
    books.push(newBook);

    res.status(201).json(newBook)
})


app.listen(3000, () => console.log("Server running"))


