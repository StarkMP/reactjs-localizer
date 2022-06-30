import React from 'react';
import { act, create } from 'react-test-renderer';

import { LocalizerProvider, useLocalizer } from 'reactjs-localizer';

const locales = {
  'Amazing title': {
    'EN': 'Amazing title',
    'RU': 'Удивительный заголовок',
  },
  'Toggle language': {
    'EN': 'Toggle language',
    'RU': 'Переключить язык',
  },
};

const Title = () => {
  const { localize } = useLocalizer();

  return <h1>{localize('Amazing title')}</h1>;
};

const ToggleLanguageButton = () => {
  const { localize, setLanguage } = useLocalizer();

  const handleClick = () => {
    setLanguage((prev) => prev === 'EN' ? 'RU' : 'EN');
  };

  return <button onClick={handleClick}>{localize('Toggle language')}</button>;
};

const App = () => {
  return (
    <LocalizerProvider defaultLanguage="EN" currentLanguage="EN" locales={locales}>
      <Title />
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
  });

  it('Toggle language', () => {
    act(() => {
      instance.findByType('button').props.onClick();
    });

    expect(instance.findByType('h1').props.children).toBe('Удивительный заголовок');
  });
});