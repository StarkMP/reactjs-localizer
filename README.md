# reactjs-localizer
Localizer for your react app

## Features
- 5kb size
- Auto-refresh localization after changing language
- Hooks support

## Installation
```sh
npm install reactjs-localizer

or

yarn install reactjs-localizer
```

## Usage example
```js
import React from 'react';
import ReactDOM from 'react-dom';

import { Localizer, LocaleProvider, useLocalizer } from 'reactjs-localizer';

Localizer.defaultLanguage = 'EN';

Localizer.mount({
    'I want %count% likes for my library': { // support inserted params
        'EN': 'I want %count% likes for my library',
        'RU': 'Я хочу %count% лайков для моей библиотеки'
    },
    'Amazing title': {
        'EN': 'Amazing title',
        'RU': 'Удивительный заголовок'
    },
    'Toggle language': {
        'EN': 'Toggle language',
        'RU': 'Переключить язык'
    }
});

function App() {
    // You can get { localize, language, setLanguage } from this hook
    const { localize, setLanguage } = useLocalizer();
    
    const toggleLanguage = () => setLanguage(prev => prev === 'EN' ? 'RU' : 'EN');

    return (
        <div>
            <h1>{localize('I want %count% likes for my library', { count: Date.now() })}</h1>
            <h1>{localize('Amazing title')}</h1>
            <button onClick={toggleLanguage}>{localize('Toggle language')}</button>
        </div>
    );
}

ReactDOM.render(
    <LocaleProvider>
        <App/>
    </LocaleProvider>,
    document.getElementById('root')
);
```

## License
MIT
