import { FirstLetterCapPipe } from './first-letter-caps.pipe';

describe('FirstLetterCapsPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstLetterCapPipe();
    expect(pipe).toBeTruthy();
  });
});
