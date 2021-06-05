import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import Education from './components/Education';
import Work from './components/Work';
import CV from './components/CV';

import { useState } from 'react';

const App = () => {
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    description: '',
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setInfo({ ...info, [id]: value });
  };

  return (
    <div className='App'>
      <Header />
      <section id='form' className='box-shadow'>
        <Info handleChange={handleChange} />
        <Education />
        <Work />
      </section>
      <section id='cv' className='box-shadow'>
        <CV info={info} />
      </section>
    </div>
  );
};

export default App;
