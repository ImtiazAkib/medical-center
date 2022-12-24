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
            <div className="max-w-lg">
              <h1
                className="mb-5 md:text-5xl font-bold"
                style={{ color: "#204066" }}
              >
                Lorem ipsum dolor sit amet
              </h1>
              <p className="mb-5 text-gray-700">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi
              </p>
              <button className="contact-btn">Contact Us +</button>
            </div>
          </div>
        </div>
      </header>
      {/* card section */}
      <section className="cards">
        <div className="card">
          <h1 className="text-2xl" style={{ color: "#204066" }}>
            Operation Theatre
          </h1>
          <div>
            <img src="/image/icon1.png" alt="" />
          </div>
          <p className="text-gray-500">
            All the Lorem Ipsum generators on the Internet tend to repeat prede.
          </p>
          <Link>Read More +</Link>
        </div>
        <div className="card">
          <h1 className="text-2xl" style={{ color: "#204066" }}>
            Operation Theatre
          </h1>
          <div>
            <img src="/image/icon3.png" alt="" />
          </div>
          <p className="text-gray-500">
            All the Lorem Ipsum generators on the Internet tend to repeat prede.
          </p>
          <Link>Read More +</Link>
        </div>
        <div className="card">
          <h1 className="text-2xl" style={{ color: "#204066" }}>
            Operation Theatre
          </h1>
          <div>
            <img src="/image/icon2.png" alt="" />
          </div>
          <p className="text-gray-500">
            All the Lorem Ipsum generators on the Internet tend to repeat prede.
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
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
            <ul className="text-gray-500">
              <li>Lorem ipsum dolor sit amet, conse adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, conse adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, conse adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, conse adipiscing elit.</li>
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
