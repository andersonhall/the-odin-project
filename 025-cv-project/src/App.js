import './App.css';
import uniqid from 'uniqid';
import Header from './components/Header';
import Info from './components/Info';
import EducationForm from './components/EducationForm';
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

  const [education, setEducation] = useState([
    {
      id: uniqid(),
      school: 'DSU',
      edCity: 'Cleveland',
      degree: 'BME',
      subject: 'music',
      edFrom: '2000',
      edTo: '2004',
    },
  ]);

  const handleChange = e => {
    const { id, value } = e.target;
    setInfo({ ...info, [id]: value });
  };

  const addEducation = e => {
    console.log('add ed', e.target);
  };

  const deleteEducation = id => {
    if (education.length > 1) {
      setEducation(education.filter(ed => ed.id !== id));
    }
  };

  return (
    <div className='App'>
      <Header />
      <section id='form' className='box-shadow'>
        <Info handleChange={handleChange} />
        {education.map((obj, index) => {
          return (
            <EducationForm
              key={index}
              education={education[index]}
              addEducation={addEducation}
              deleteEducation={deleteEducation}
            />
          );
        })}
        <Work />
      </section>
      <section id='cv' className='box-shadow'>
        <CV info={info} education={education} />
      </section>
    </div>
  );
};

export default App;
