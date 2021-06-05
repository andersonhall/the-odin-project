const Work = ({ job }) => {
  const { position, company, workCity, workFrom, workTo } = job;
  return (
    <>
      <div>
        <strong>Position:</strong> {position}
      </div>
      <div>
        <strong>Company:</strong> {company}
      </div>
      <div>
        <strong>City:</strong> {workCity}
      </div>
      <div>
        <strong>Years:</strong> {workFrom} - {workTo}
      </div>
      <hr />
    </>
  );
};

export default Work;
