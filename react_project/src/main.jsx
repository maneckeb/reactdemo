import ReactDOM from 'react-dom/client'
import { rolldownVersion } from 'vite';
//define app component

const App = () => {
  return React.createElement('h1', null, 'react is fun');
}

//create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

//render app component
root.render(<App />);