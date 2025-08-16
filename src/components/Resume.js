import resume from "../images/chasepham_resume.pdf"
function Resume() {
    return (
      <div className="container my-5" id = "resume">
        <h2 className="text-center">Resume</h2>
  
        <div className="d-flex justify-content-center">
          <iframe
            src={resume}
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