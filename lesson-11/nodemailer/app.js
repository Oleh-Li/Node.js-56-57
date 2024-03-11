const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

//465 25 465, 2525
const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
        user: "mangenda@meta.ua",
        pass: META_PASSWORD
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
    from: "mangenda@meta.ua",
    to: "rrrgo3@gmail.com",
    subject: "Test email for my app",
    text: "Hello World",
    html: "<p><strong>Test email</strong> Test my email from localhost:3000</p>"
};

transport.sendMail(email)
    .then(() => console.log("Email send success"))
    .catch(error => console.log(error.message));