import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './Redux/State';
import {rerenderTree} from './rerenderTree';

rerenderTree(state)

reportWebVitals();
