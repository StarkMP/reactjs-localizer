# reactjs-localizer
Localizer for your react app

## Features
- 4kb size
- Auto-refresh localization after changing language
- Hooks support

## Installation
```sh
npm install reactjs-localizer

or

yarn install reactjs-localizer
```

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';

import { Localizer, LocaleProvider, useLocalizer } from 'reactjs-localizer';

Localizer.mount({
    'Amazing title': {
        'EN': 'Amazing title',
        'RU': 'Удивительный заголовок'
    },
    'Toggle language': {
        'EN': 'Toggle language',
        'RU': 'Переключить язык'
    }
});

Localizer.defaultLanguage = 'EN';

function App() {
    // You can get localize, language, setLanguage from this hook
    const { localize, setLanguage } = useLocalizer();
    
    const toggleLanguage = () => setLanguage(prev => prev === 'EN' ? 'RU' : 'EN');

    return (
        <div>
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
ISC
