import { ERROR } from '../constants';

export default (message = '', chunkSize = 10) => {
  let chunks = [];

  // Split message to array of words
  const words = message.split(' ');

  words.forEach((word) => {
    // If any word exceeds chunk size, thow an error
    if (word.length > chunkSize) throw ERROR.WORD_TOO_LONG;

    // Skip any nonsense word
    if (word.length === 0) return;

    // If chunks is new then add a word into chunk
    if (chunks.length === 0) {
      chunks = [word];
    } else if (chunks[0].length + word.length > chunkSize) {
      // If total length of head chunk with word
      // exceeds chunk size then create new chunk in front of it
      chunks = [word, ...chunks];
    } else {
      // Else just concat to current chunk
      chunks[0] = `${chunks[0]} ${word}`;
    }
  });

  // If chunk larger than 1 then append indicator at the head
  // reversely
  return chunks.length > 1
    ? chunks.map((chunk, index) => { return `[${chunks.length - index}/${chunks.length}] ${chunk}`; })
    : chunks;
};
