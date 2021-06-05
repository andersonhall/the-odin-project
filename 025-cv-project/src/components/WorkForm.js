const WorkForm = ({ job, addWork, deleteWork, updateWork }) => {
  return (
    <div id='work'>
      <h3>Work Experience</h3>
      <input type='text' id='position' placeholder='Posiion' onInput={e => updateWork(e, job.id)} />
      <input type='text' id='company' placeholder='Company' onInput={e => updateWork(e, job.id)} />
      <input type='text' id='workCity' placeholder='City' onInput={e => updateWork(e, job.id)} />
      <input type='text' id='workFrom' placeholder='From' onInput={e => updateWork(e, job.id)} />
      <input type='text' id='workTo' placeholder='To' onInput={e => updateWork(e, job.id)} />
      <button onClick={addWork}>Add</button>
      <button onClick={() => deleteWork(job.id)}>Delete</button>
    </div>
  );
};

export default WorkForm;
