import getClassNames from './index';

describe('Utils Suite', () => {
  it('getClassNames returns the correct class value', () => {
    expect(
      getClassNames({
        'class-1': true,
        'class-2': false,
        'class-3': true,
      })
    ).toEqual('class-1 class-3 ');
  });
  it('getClassNames returns the correct class value (2)', () => {
    expect(
      getClassNames({
        'class-1': true,
      })
    ).toEqual('class-1 ');
  });
  it('getClassNames returns the correct class value (3)', () => {
    expect(
      getClassNames({
        'class-1': undefined,
      })
    ).toEqual('');
  });
  it('getClassNames returns the correct class value (4)', () => {
    expect(
      getClassNames({
        'class-1': null,
      })
    ).toEqual('');
  });
  it('getClassNames returns the correct class value (5)', () => {
    expect(
      getClassNames({
        class__0: 5 > 1,
        'class-1': undefined,
      })
    ).toEqual('class__0 ');
  });
  it('getClassNames returns the correct class value (6)', () => {
    const flag = 7 > 1;
    expect(
      getClassNames({
        class__0: 5 > 1,

        class__1: true,
        class__2: flag,
      })
    ).toEqual('class__0 class__1 class__2 ');
  });
});
