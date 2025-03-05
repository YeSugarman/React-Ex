import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { legacy_createStore } from 'redux'

//8.
import appReducer from "./HW/Ex_8/appReducer.jsx"// פונקציה המיצגת את רידקס-ואת מה ששמור בתוכו

//9.
//import appReducer from "./HW/Ex_9/appReducer.jsx"

const appStore = legacy_createStore(appReducer)

createRoot(document.getElementById('root')).render(
  
  // פונקציה שמאפשרת ניווט
 <BrowserRouter>

  {/* // פונקציה שמאפשרת שמירה ברידקס */}
  <Provider store={appStore}>
      <App />
  </Provider>

  </BrowserRouter>

)
