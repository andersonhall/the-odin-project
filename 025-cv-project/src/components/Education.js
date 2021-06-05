const Education = ({ ed }) => {
  const { school, edCity, degree, subject, edFrom, edTo } = ed;
  return (
    <>
      <div>
        {edFrom} - {edTo}
      </div>
      <div>
        <strong>University:</strong> {school}
      </div>
      <div>
        <strong>City:</strong> {edCity}
      </div>
      <div>
        <strong>Degree:</strong> {degree}
      </div>
      <div>
        <strong>Subject:</strong> {subject}
      </div>
      <hr />
    </>
  );
};

export default Education;
