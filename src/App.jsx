import Weather from './components/Weather';
import appReducer from './store/appReducer';
import { StateProvider } from './store/StateProvider';

function App() {
  return (
    <StateProvider reducer={appReducer} initialState={{}}>
      <Weather />
    </StateProvider>
  );
}

export default App;
