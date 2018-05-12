import React from 'react';
import ReactDOM from 'react-dom';
import * as Keys from '../API_keys';

import SearchBar from './components/search_bar';

console.log(Keys);

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'));