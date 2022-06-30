import {formatLocale} from '../src/utils';

describe('formatLocale', () => {
  it('("Hello. What is your name?") => "Hello. What is your name?"', () => {
    expect(formatLocale('Hello. What is your name?')).toBe('Hello. What is your name?');
  });

  it('("My name is %name%", { name: "Alex" }) => "My name is Alex"', () => {
    expect(formatLocale('My name is %name%', { name: 'Alex' })).toBe('My name is Alex');
  });

  it('("I\'m %name% and he is my friend %friendName%", { name: "Peter", friendName: "John" }) => "I\'m Peter and he is my friend John"', () => {
    expect(formatLocale('I\'m %name% and he is my friend %friendName%', { name: 'Peter', friendName: 'John' })).toBe('I\'m Peter and he is my friend John');
  });

  it('("%name%", { name: "John" }) => "John"', () => {
    expect(formatLocale('%name%', { name: 'John' })).toBe('John');
  });
});