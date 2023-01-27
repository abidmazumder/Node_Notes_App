const fs = require('fs');
const chalk = require('chalk');
const { loadNotes } = require('./notes');
const readNotes = (title) => {
  const notes = loadNotes();

  const getNote = notes.find((note) => note.title === title);
  if (getNote) {
    console.log(chalk.inverse(title));
    console.log(getNote.body);
  } else {
    console.log(chalk.bgRed('No Note Found?'));
  }
};

module.exports = readNotes;
