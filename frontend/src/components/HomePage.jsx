import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {


  return (
    <div className="HomePage">

      <section className="hero">
        <h1>Welcome to the Assignment Review App</h1>
        <p>Streamlining assignment submission and review for learners and reviewers</p>
        <div className="buttons">
          <button>Get Started as Learner</button>
          <button>Get Started as Reviewer</button>
          <Link to="/api/auth/login">
              <button>Login</button>
          </Link>
        </div>
      </section>

      <section className="key-features">
        <div className="feature-card">
          <h2>Effortless Assignment Submission</h2>
          <p>For Learners</p>
          <i className="icon-upload"></i>
          <p>Submit assignments easily and efficiently.</p>
        </div>
        <div className="feature-card">
          <h2>Streamlined Review Process</h2>
          <p>For Reviewers</p>
          <i className="icon-checklist"></i>
          <p>Review assignments quickly and provide feedback seamlessly.</p>
        </div>
        <div className="feature-card">
          <h2>Track Progress and Feedback</h2>
          <p>For Both</p>
          <i className="icon-chart"></i>
          <p>Monitor progress, view feedback, and stay on track with your assignments.</p>
        </div>
      </section>

      <section className="additional-info">
        <h2>Why Choose Bloom Coder Assignment App?<a href="#"> Read More</a></h2>
        <ul>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;