const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const notes = [];

app.get('/', (req, res) => {
  res.send('<a href="/notes">Go to Notes Page</a>');
});

app.get('/notes', (req, res) => {
  // Render the notes page with the list of existing notes and the form.
  res.render('notes.ejs', { notes });
});

app.post('/notes', (req, res) => {
  // Handle the form submission to save a new note.
  const newNote = {
    title: req.body.title,
    text: req.body.text,
  };
  notes.push(newNote);
  res.redirect('/notes');
});

app.listen(port, () => {
  console.log(`Note-taking app listening at http://localhost:${port}`);
});