const EducationForm = ({ education, addEducation, deleteEducation }) => {
  return (
    <div id='education'>
      <h3>Education</h3>
      <input type='text' id='school' placeholder='University' />
      <input type='text' id='edCity' placeholder='City' />
      <input type='text' id='degree' placeholder='Degree' />
      <input type='text' id='subject' placeholder='Subject' />
      <input type='text' id='edFrom' placeholder='From' />
      <input type='text' id='edTo' placeholder='To' />
      <button onClick={addEducation}>Add</button>
      <button onClick={() => deleteEducation(education.id)}>Delete</button>
    </div>
  );
};

export default EducationForm;
