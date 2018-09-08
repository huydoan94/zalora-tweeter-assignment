import { repeat } from 'lodash';

import { ERROR } from '../../constants';
import splitMessage from '../splitMessage';

describe('splitMessage', () => {
  it('should return empty chunk if no message defined', () => {
    const result = splitMessage();
    expect(result).toHaveLength(0);
  });

  it('should throw error if message contains word exceeds chunk size', () => {
    const chunkSize = 5;
    const message = repeat('a', chunkSize * 2);
    let errorCode;

    try {
      splitMessage(message, chunkSize);
    } catch (err) {
      errorCode = err;
    }

    expect(errorCode).toBe(ERROR.WORD_TOO_LONG);
  });

  it('should remove extra spaces', () => {
    const word1 = 'a';
    const word2 = 'b';
    const expectedResult = `${word1} ${word2}`;

    const result = splitMessage(`${word1}      ${word2}`);
    expect(result[0]).toBe(expectedResult);
  });

  it('should not split message if message not exceeds chunk size', () => {
    const chunkSize = 30;
    const message = `${repeat('a', chunkSize / 3)} ${repeat('a', chunkSize / 3)}`;

    const result = splitMessage(message, chunkSize);
    expect(result).toHaveLength(1);
  });

  it('should split message if message exceeds chunk size', () => {
    const chunkSize = 30;
    const message = `${repeat('a', chunkSize / 3)} ${repeat('a', chunkSize)}`;

    const result = splitMessage(message, chunkSize);
    expect(result).toHaveLength(2);
  });
});
