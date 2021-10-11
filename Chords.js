const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
,"C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function chords(root) {
  const note= notes.indexOf(root)
  const first= notes[note];
  const second = notes[note+4]
  const third = notes[note+7]
  const fourth = notes[note+3]
  return [[first,second,third],[first,fourth,third]];
}