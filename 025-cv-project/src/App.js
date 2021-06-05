import './App.css';
import uniqid from 'uniqid';
import Header from './components/Header';
import Info from './components/Info';
import EducationForm from './components/EducationForm';
import WorkForm from './components/WorkForm';
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
      school: '',
      edCity: '',
      degree: '',
      subject: '',
      edFrom: '',
      edTo: '',
    },
  ]);

  const [work, setWork] = useState([
    {
      id: uniqid(),
      position: '',
      company: '',
      workcity: '',
      workFrom: '',
      workTo: '',
    },
  ]);

  const handleChange = e => {
    const { id, value } = e.target;
    setInfo({ ...info, [id]: value });
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: uniqid(),
        school: '',
        edCity: '',
        degree: '',
        subject: '',
        edFrom: '',
        edTo: '',
      },
    ]);
  };

  const addWork = () => {
    setWork([
      ...work,
      {
        id: uniqid(),
        position: '',
        company: '',
        workcity: '',
        workFrom: '',
        workTo: '',
      },
    ]);
  };

  const deleteEducation = id => {
    if (education.length > 1) {
      setEducation(education.filter(ed => ed.id !== id));
    }
  };

  const deleteWork = id => {
    if (work.length > 1) {
      setWork(work.filter(job => job.id !== id));
    }
  };

  const updateEd = (e, id) => {
    const { value } = e.target;
    const index = education.findIndex(ed => ed.id === id);
    setEducation([...education], (education[index][e.target.id] = value));
  };

  const updateWork = (e, id) => {
    const { value } = e.target;
    const index = work.findIndex(job => job.id === id);
    setWork([...work], (work[index][e.target.id] = value));
  };

  return (
    <div className='App'>
      <Header />
      <div className='main-content'>
        <section id='form' className='box-shadow'>
          <Info handleChange={handleChange} />
          {education.map((obj, index) => {
            return (
              <EducationForm
                key={index}
                education={education[index]}
                addEducation={addEducation}
                deleteEducation={deleteEducation}
                updateEd={updateEd}
              />
            );
          })}
          {work.map((obj, index) => {
            return (
              <WorkForm
                key={index}
                job={work[index]}
                addWork={addWork}
                deleteWork={deleteWork}
                updateWork={updateWork}
              />
            );
          })}
        </section>
        <section id='cv' className='box-shadow'>
          <CV info={info} education={education} work={work} />
        </section>
      </div>
    </div>
  );
};

export default App;
