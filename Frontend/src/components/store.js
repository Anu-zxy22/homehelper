import { createStore, combineReducers } from 'redux';

// Reducer for login-related state
const loginReducer = (state = { email: '', pass: '', name: '' }, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASS':
      return { ...state, pass: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

// Function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    // Handle any errors that occur during storage
  }
};

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  login: loginReducer,
});

// Load state from local storage
const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

// Save state to local storage whenever the state changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
