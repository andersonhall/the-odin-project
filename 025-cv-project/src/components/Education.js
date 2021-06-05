const Education = ({ ed }) => {
  const { school, edCity, degree, subject, edFrom, edTo } = ed;
  return (
    <>
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
      <div>
        <strong>Years:</strong> {edFrom} - {edTo}
      </div>
      <hr />
    </>
  );
};

export default Education;
