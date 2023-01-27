const fs = require('fs');
const chalk = require('chalk');
const { loadNotes } = require('./notes');

const listNotes = () => {
  console.log(chalk.bgWhite('Your Lists'));
  const note = loadNotes();

  note.forEach((note) => {
    console.log(note.title);
  });

  console.log();
};
module.exports = listNotes;
