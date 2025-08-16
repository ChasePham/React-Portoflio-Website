function Resume() {
    return (
      <div className="container my-5" id = "resume">
        <h2 className="text-center">Resume</h2>
  
        <div className="d-flex justify-content-center">
          <iframe
            src="/chasepham_resume.pdf"
            title="Resume"
            width="80%"
            height="500px"
            style={{ border: '1px solid #ccc', borderRadius: '8px' }}
          ></iframe>
        </div>
      </div>
    );
  }
  
  export default Resume;