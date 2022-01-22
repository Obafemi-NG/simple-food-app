import {Fragment, useState} from 'react';
import Cart from './components/cart/cart.component';

import Header from './components/header/header.component';
import Meals from './components/meals.component';

const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true)
  }

  const hideCartHandler = () => {
    setIsCartShown(false)
  }

  return(
    <Fragment>
      {isCartShown && <Cart  onClose = {hideCartHandler} />}
      <Header onShow = {showCartHandler} />
      <main>
        <Meals/>
      </main>
      
    </Fragment>
    
  )
}

export default App;