const Work = ({ job }) => {
  const { position, company, workCity, workFrom, workTo } = job;
  return (
    <>
      <div>
        {workFrom} - {workTo}
      </div>
      <div>
        <strong>Position:</strong> {position}
      </div>
      <div>
        <strong>Company:</strong> {company}
      </div>
      <div>
        <strong>City:</strong> {workCity}
      </div>
      <hr />
    </>
  );
};

export default Work;
