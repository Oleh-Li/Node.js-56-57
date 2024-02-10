const fs = require('fs/promises')
const path = require("path")

const contactPath = path.join(__dirname, "contacts.json")

const listContacts = async () => {
  const list = await fs.readFile(contactPath)
  return JSON.parse(list)
}

const getContactById = async (contactId) => {
  const list = await listContacts()
  return list.find(item => item.id === contactId) || null
}

const removeContact = async (contactId) => { }

const addContact = async (body) => { }

const updateContact = async (contactId, body) => { }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
