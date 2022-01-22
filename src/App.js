import React from 'react';
import Cart from './components/cart/cart.component';

import Header from './components/header/header.component';
import Meals from './components/meals.component';

const App = () => {
  return(
    <React.Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
      
    </React.Fragment>
    
  )
}

export default App;