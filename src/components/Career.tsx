import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Training</h4>
                <h5>Coding Seekho</h5>
              </div>
              <h3>2025-NOW</h3>
            </div>
            <p>
              Completed Python programming course from Coding Seekho with hands-on projects.<br/>
              Gained skills in data handling, automation, and core Python concepts.<br/>
              Enhanced problem-solving and logical thinking through practical exercises.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Designing</h4>
                <h5>Logicpro infosystem</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Completed a Web Designing course with practical experience in HTML and CSS.<br/>
              Learned to create responsive and user-friendly web pages.<br/>
              Developed basic UI projects to strengthen front-end design skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (B.TECH) in AIML</h4>
                <h5>AKTU University</h5>
              </div>
              <h3>2023-2027</h3>
            </div>
            <p>
              Pursuing B.Tech with a focus on programming, data analysis, and problem-solving. Skilled in Excel, SQL, Python, and Java with a strong technical foundation. Passionate about applying analytical skills to solve real-world challenges.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary (Class XII), U P Board</h4>
                <h5>MP I. C Gorakhpur</h5>
              </div>
              <h3>2021-2023</h3>
            </div>
            <p>
              Completed Senior Secondary (Class XII) in Science stream with Physics, Chemistry, and Mathematics, building a strong foundation in analytical and problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
