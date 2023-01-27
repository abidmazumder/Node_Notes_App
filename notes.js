const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('data.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync('data.json').toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
const readNotes = (title) => {
  const notes = loadNotes();
  const getNote = notes.find((note) => note.title === title);
  if (getNote) {
    console.log('hello world');
  } else {
    console.log(chalk.bgRed('No Note Found?'));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  loadNotes: loadNotes,
  readNotes: readNotes,
};
