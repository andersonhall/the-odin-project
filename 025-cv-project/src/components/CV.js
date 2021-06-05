import '../styles/CV.css';

const CV = ({ info }) => {
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
            <div className='cv-education'>{info.education}</div>
          </div>
          <div>
            <h4>Experience</h4>
            <div className='cv-experience'>{info.experience}</div>
          </div>
        </div>
        <div className='sidebar'>
          <div className='personal-info'>
            <h4>Personal Info</h4>
            <div className='cv-address'>{info.address}</div>
            <div className='cv-phone'>{info.phone}</div>
            <div className='cv-email'>{info.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
