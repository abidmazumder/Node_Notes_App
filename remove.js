const fs = require('fs');
const chalk = require('chalk');
const { loadNotes } = require('./notes');
//--------import the lists------------//

//--------Main  Function------------//
const removeNote = (title) => {
  const data = loadNotes();
  const notesToKeep = data.filter((note) => {
    return note.title !== title;
  });

  if (data.length > notesToKeep.length) {
    console.log(chalk.bgGreen('Note Removed!'));

    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed('No Note Found!'));
  }
};
//--------Save the Data------------//
const saveNotes = (data) => {
  const dataStr = JSON.stringify(data);
  return fs.writeFileSync('data.json', dataStr);
};
module.exports = removeNote;
