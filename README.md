# reactjs-localizer

Localizer for your react application

## Features

- 5kb size
- Auto-refresh localization after changing language
- Hooks/classes support

## Installation

```sh
npm install reactjs-localizer

or

yarn install reactjs-localizer
```

## Usage example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { LocalizerProvider, useLocalizer } from 'reactjs-localizer';

const locales = {
  'I want %count% likes for my library': {
    // support inserted params
    'EN': 'I want %count% likes for my library',
    'RU': 'Я хочу %count% лайков для моей библиотеки',
  },
  'Amazing title': {
    'EN': 'Amazing title',
    'RU': 'Удивительный заголовок',
  },
  'Toggle language': {
    'EN': 'Toggle language',
    'RU': 'Переключить язык',
  },
};

function App() {
  // You can get { localize, language, setLanguage } from this hook
  const { localize, setLanguage } = useLocalizer();

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === 'EN' ? 'RU' : 'EN'));

  return (
    <div>
      <h1>
        {localize('I want %count% likes for my library', { count: Date.now() })}
      </h1>
      <h1>{localize('Amazing title')}</h1>
      <button onClick={toggleLanguage}>{localize('Toggle language')}</button>
    </div>
  );
}

ReactDOM.render(
  <LocalizerProvider defaultLanguage="EN" currentLanguage="EN" locales={locales}>
    <App />
  </LocalizerProvider>,
  document.getElementById('root')
);
```

### Class example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import { LocalizerContext } from 'reactjs-localizer';

class App extends React.Component {
  static contextType = LocalizerContext;

  toggleLanguage = () => {
    this.context.setLanguage((prev) => (prev === "EN" ? "RU" : "EN"));
  };

  render() {
    return (
      <div>
        <h1>
          {this.context.localize("I want %count% likes for my library", {
            count: Date.now()
          })}
        </h1>
        <h1>{this.context.localize("Amazing title")}</h1>
        <button onClick={this.toggleLanguage}>
          {this.context.localize("Toggle language")}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <LocalizerProvider
    defaultLanguage="EN"
    currentLanguage="EN"
    locales={locales}
  >
    <App />
  </LocalizerProvider>,
  document.getElementById("root")
);
```

## License

MIT
