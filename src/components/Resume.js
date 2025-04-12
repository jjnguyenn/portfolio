import React from 'react';

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <p>You can view or download my resume below:</p>
      {/* Link to the resume located in the public folder */}
      <a href={`${process.env.PUBLIC_URL}/JimmyNguyen_QA_Resume.pdf`} download>
  Download Resume
</a>
    </div>
  );
}

export default Resume;
