import { Fragment } from 'react/cjs/react.production.min';
import './App.css';

import Hero from './components/UI/hero/Hero';
import TodoHeader from './components/todolist/header/TodoHeader';

function App() {
  const root = document.querySelector(':root');
  root.className = 'light-theme';
  return (
    <Fragment>
      <Hero />
      <div className="todo-list">
        <TodoHeader />
      </div>
    </Fragment>
  );
}

export default App;
