const EducationForm = ({ education, addEducation, deleteEducation, updateEd }) => {
  return (
    <div id='education'>
      <h3>Education</h3>
      <input
        type='text'
        id='school'
        placeholder='University'
        onInput={e => updateEd(e, education.id)}
      />
      <input type='text' id='edCity' placeholder='City' onInput={e => updateEd(e, education.id)} />
      <input
        type='text'
        id='degree'
        placeholder='Degree'
        onInput={e => updateEd(e, education.id)}
      />
      <input
        type='text'
        id='subject'
        placeholder='Subject'
        onInput={e => updateEd(e, education.id)}
      />
      <input type='text' id='edFrom' placeholder='From' onInput={e => updateEd(e, education.id)} />
      <input type='text' id='edTo' placeholder='To' onInput={e => updateEd(e, education.id)} />
      <button onClick={addEducation}>Add</button>
      <button onClick={() => deleteEducation(education.id)}>Delete</button>
    </div>
  );
};

export default EducationForm;
