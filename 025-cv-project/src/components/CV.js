import '../styles/CV.css';

const CV = ({ info, education }) => {
  return (
    <div>
      <header className='cv-header'>
        <h1 className='cv-firstName'>
          {info.firstName} {info.lastName}
        </h1>
        <p className='cv-title'>{info.title}</p>
      </header>
      <div className='cv-body'>
        <div className='details'>
          <div>
            <h4>Description</h4>
            <div className='cv-description'>{info.description}</div>
          </div>
          <div>
            <h4>Education</h4>
            <div className='cv-education'>
              {education.map(obj => {
                return (
                  <>
                    <div>
                      <strong>University:</strong> {obj.school}
                    </div>
                    <div>
                      <strong>City:</strong> {obj.edCity}
                    </div>
                    <div>
                      <strong>Degree:</strong> {obj.degree}
                    </div>
                    <div>
                      <strong>Subject:</strong> {obj.subject}
                    </div>
                    <div>
                      <strong>Years:</strong> {obj.edFrom}-{obj.edTo}
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
          </div>
          <div>
            <h4>Experience</h4>
            <div className='cv-experience'>{info.experience}</div>
          </div>
        </div>
        <div className='sidebar'>
          <div className='personal-info'>
            <h4>Personal Info</h4>
            <div>
              <h5>Address</h5>
              <div className='cv-address'>{info.address}</div>
            </div>
            <div>
              <h5>Phone Number</h5>
              <div className='cv-phone'>{info.phone}</div>
            </div>
            <div>
              <h5>Email</h5>
              <div className='cv-email'>{info.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;