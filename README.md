# reactjs-localizer

Localizer for your React application.

## Features

- Small library size
- Auto-refresh localization after changing language
- Functional and class components support
- You can use hook, HOC or context
- You can pass values to locales
- TypeScript support

## Installation

```sh
npm install reactjs-localizer
```

## Usage example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { LocalizerProvider, withLocalizer } from 'reactjs-localizer';

const locales = {
  'I invited %count% people to my party': {
    // support inserted params
    en: 'I invited %count% people to my party',
    ru: 'Я пригласил %count% людей на мою вечеринку',
  },
  'Amazing title': {
    en: 'Amazing title',
    ru: 'Удивительный заголовок',
  },
  'Toggle language': {
    en: 'Toggle language',
    ru: 'Переключить язык',
  },
};

const App = withLocalizer(({ localize, setLanguage }) => {
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));

  return (
    <div>
      <h1>
        {localize('I invited %count% people to my party', { count: Date.now() })}
      </h1>
      <h1>{localize('Amazing title')}</h1>
      <button onClick={toggleLanguage}>{localize('Toggle language')}</button>
    </div>
  );
});

ReactDOM.render(
  <LocalizerProvider defaultLanguage="en" currentLanguage="en" locales={locales}>
    <App />
  </LocalizerProvider>,
  document.getElementById('root')
);
```
Also you can use `useLocalizer` hook for functional components and `LocalizerContext` for classes instead of `withLocalizer` HOC.

## License

MIT
