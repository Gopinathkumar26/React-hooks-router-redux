import React from 'react'
import { Provider } from 'react-redux'
import store from './Store'

//React redux 
// import CakeContainer from './Cake/CakeContainer'
// import HookContainer from './Cake/HookContainer'
// import IceCreamContainer from './IceCream/iceCreamContainer'
// import NewCakeContainer from './Cake/NewCakeContainer'
// import ItemContainer from './Cake/ItemContainer'

//async function
import UserContainer from './User/UserContainer'


function ReduxApp() {
  return (
    <Provider store={store}>
        <div>
            {/* <ItemContainer cake/>
            <ItemContainer/>
            <CakeContainer/>
            <HookContainer/>
            <IceCreamContainer/>
            <NewCakeContainer/> */}
            <UserContainer/>
        </div>
    </Provider>
    
  )
}

export default ReduxApp