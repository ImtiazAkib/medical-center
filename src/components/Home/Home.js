import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("/image/cover.jpg")`,
          }}
        >
          <div className="hero-overlay bg-transparent"></div>
          <div className="hero-content justify-start  text-neutral-content">
            <div className="first-content">
              <h1
                className="mb-5 md:text-5xl font-bold"
                style={{ color: "#204066" }}
              >
                Healing Lives & Saving Futures
              </h1>
              <p className="mb-5 text-gray-700">
                Experience the Difference: Compassionate and Personalized
                Medical Services
              </p>
              <button className="contact-btn">Contact Us +</button>
            </div>
          </div>
        </div>
      </header>
      {/* card section */}
      <section className="cards">
        <div className="my-card">
          <h1 className="text-2xl" style={{ color: "#204066" }}>
            Doctor or Specialist
          </h1>
          <div>
            <img src="/image/icon1.png" alt="" />
          </div>
          <p className="text-gray-500">
            There are many different types of operations, depending on the
            condition being treated and the part of the body that is affected.
          </p>
          <Link>Read More +</Link>
        </div>
        <div className="my-card">
          <h1 className="text-2xl" style={{ color: "#204066" }}>
            Anesthesia
          </h1>
          <div>
            <img src="/image/icon3.png" alt="" />
          </div>
          <p className="text-gray-500">
            In most operations, the patient is given anesthesia to prevent pain
            and discomfort during the procedure
          </p>
          <Link>Read More +</Link>
        </div>
        <div className="my-card">
          <h1 className="text-2xl" style={{ color: "#204066" }}>
            Team
          </h1>
          <div>
            <img src="/image/icon2.png" alt="" />
          </div>
          <p className="text-gray-500">
            Operations are typically performed by a team of medical
            professionals, including a surgeon, anesthesiologist, and nurses
          </p>
          <Link>Read More +</Link>
        </div>
      </section>
      {/* mid-part */}
      <section className="about-container">
        <div className="about-content">
          <div className="lg:mr-10">
            <img src="/image/about.jpg" alt="about" />
          </div>
          <div className="about-main md:leading-10">
            <span className="tag">REINVENT YOURSELF</span>
            <h1
              className="sm:text-2xl md:text-4xl"
              style={{ color: "#204066" }}
            >
              Life Is All About Your Vision In World
            </h1>
            <p className="text-gray-500">
              The eye is a complex organ that is responsible for detecting and
              processing visual information. It consists of several structures,
              including the cornea, iris, lens, retina, and optic nerve.
            </p>
            <ul className="text-gray-500">
              <li>
                Your Health is Our Priority: Comprehensive Medical Care for the
                Whole Family
              </li>
              <li>
                Experience the Difference: Compassionate and Personalized
                Medical Services
              </li>
              <li>
                Your Journey to Health and Wellness Starts Here: Holistic and
                Integrative Medical Care
              </li>
              <li>
                Trust the Experts: Highly-Skilled and Experienced Medical
                Professionals at Your Service
              </li>
            </ul>
            <div className="leading-5 mt-3">
              <button className="contact-btn">Contact Us +</button>
            </div>
          </div>
        </div>
      </section>
      {/* last-part */}
      <section className="stat-container">
        <div className="stat-content">
          <div className="stat-single">
            <div>
              <img src="/image/icon7.png" alt="" />
            </div>
            <div>
              <span>59 +</span>
              <p>Saved Eyes</p>
            </div>
          </div>
        </div>
        <div className="stat-content">
          <div className="stat-single">
            <div>
              <img src="/image/icon4.png" alt="" />
            </div>
            <div>
              <span>59 +</span>
              <p>EXPERT DOCTORS</p>
            </div>
          </div>
        </div>
        <div className="stat-content">
          <div className="stat-single">
            <div>
              <img src="/image/icon6.png" alt="" />
            </div>
            <div>
              <span>59 +</span>
              <p>SAVED LENSES</p>
            </div>
          </div>
        </div>
        <div className="stat-content">
          <div className="stat-single">
            <div>
              <img src="/image/icon5.png" alt="" />
            </div>
            <div>
              <span>59 +</span>
              <p>HAPPY PATIENTS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
