import { store } from '../../../store';
import { Provider } from '../../../adapters/react-redux';
import { Routes } from 'adapters/react-router-dom/index.js';

const App = () => {
  return (
    <Provider store={store}>
      <div>test</div>
      <div className="App">
        <h1>Welcome to React Router!</h1>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} /> */}
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
