import AppRouter from './routers/AppRouter'

import { Provider } from 'react-redux'
import Store from './redux/store/store'

const store = Store() 

console.log(store.getState());

store.subscribe(
  () => {
    console.log(store.getState());
  }
)

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App





