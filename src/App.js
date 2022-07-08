import AppRouter from './routers/AppRouter'

import { Provider } from 'react-redux'
import Store from './redux/store/store'
import MySnackbar from './components/MySnackbar';
import MyModal from './components/MyModal';


const store = Store()

// console.log(store.getState());

// store.subscribe(
//   () => {
//     console.log(store.getState());
//   }
// )


const App = () => {

  return (
    <Provider store={store}>
      <AppRouter />
      <MySnackbar />
      <MyModal />
    </Provider>
  )
}

export default App





