import React from 'react';

import Header from './components/header/header.component';
import Meals from './components/meals.component';

const App = () => {
  return(
    <React.Fragment>
      <Header/>
      <Meals/>
    </React.Fragment>
    
  )
}

export default App;