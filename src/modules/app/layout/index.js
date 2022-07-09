
import { store } from '../../../store'
import { Provider } from '../../../adapters/react-redux'

const App = () => {
  return (
		<Provider store={store}>
			<div>test</div>
		</Provider>
  )
}

export default App;
