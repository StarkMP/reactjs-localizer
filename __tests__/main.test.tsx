import React from 'react';
import { act, create } from 'react-test-renderer';
import {describe, expect, it} from '@jest/globals';

import { LocalizerProvider, withLocalizer } from '../src';

const locales = {
  'Amazing title': {
    'EN': 'Amazing title',
    'RU': 'Удивительный заголовок',
  },
  'Toggle language': {
    'EN': 'Toggle language',
    'RU': 'Переключить язык',
  },
  'I\'m %userName%': {
    'EN': 'I\'m %userName%',
    'RU': 'Я %userName%',
  },
};

const Title: React.FC = withLocalizer(({ localize }) => {
  return <h1>{localize('Amazing title')}</h1>;
});

const UserName: React.FC<{ name: string }> = withLocalizer(({ name, localize }) => {
  return <span>{localize('I\'m %userName%', { userName: name })}</span>;
});

const ToggleLanguageButton: React.FC = withLocalizer(({ localize, setLanguage }) => {
  const handleClick = () => {
    setLanguage((prev) => prev === 'EN' ? 'RU' : 'EN');
  };

  return <button onClick={handleClick}>{localize('Toggle language')}</button>;
});

const App: React.FC = () => {
  return (
    <LocalizerProvider defaultLanguage="EN" currentLanguage="EN" locales={locales}>
      <Title />
      <UserName name='John' />
      <ToggleLanguageButton />
    </LocalizerProvider>
  );
};

describe('A suite', () => {
  const renderer = create(<App />);
  const instance = renderer.root;
  const json = renderer.toJSON();
  
  it('Snapshot is right', () => {
    expect(json).toMatchSnapshot();
  });

  it('Translate is right', () => {
    expect(instance.findByType('h1').props.children).toBe('Amazing title');
    expect(instance.findByType('span').props.children).toBe('I\'m John');
  });

  it('Toggle language', () => {
    act(() => {
      instance.findByType('button').props.onClick();
    });

    expect(instance.findByType('h1').props.children).toBe('Удивительный заголовок');
    expect(instance.findByType('span').props.children).toBe('Я John');
  });
});