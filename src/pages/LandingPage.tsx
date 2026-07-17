import { Routes, Route } from "react-router-dom";
import "../styles/LandingPage.css";
import Footer from "../components/Footer";
import PrivacyPolicy from "./PrivacyPolicy";

function ScanIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 8V6a2 2 0 0 1 2-2h2M18 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M6 20H4a2 2 0 0 1-2-2v-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 12h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M5 19c0-5 2.5-9 7-11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScanCard() {
  return (
    <div className="scan-card animate">
      <div className="scan-card-glow" />
      <div className="scan-card-frame">
        <div className="scan-card-top">
          <span className="scan-dot" />
          <span className="scan-dot" />
          <span className="scan-dot" />
        </div>

        <div className="scan-label">
          <div className="scan-barcode" aria-hidden="true">
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} style={{ width: i % 5 === 0 ? 3 : 1.5 }} />
            ))}
          </div>
          <div className="scan-label-lines">
            <span className="line long" />
            <span className="line" />
            <span className="line short" />
          </div>
          <div className="scan-beam" />
        </div>

        <div className="scan-result">
          <div className="scan-score">
            <span className="scan-score-letter">A</span>
            <span className="scan-score-caption">Nutrition Score</span>
          </div>
          <div className="scan-tags">
            <span>Low sugar</span>
            <span>High fiber</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="navbar">
          <div className="logo">
            Food<span>Lens</span>
          </div>

          <div className="nav-links">
            <a href="#features" className="nav-text-link">
              Features
            </a>
            <a href="#how" className="nav-text-link">
              How it works
            </a>
            <a href="#" className="nav-link">
              Get Started
            </a>
          </div>
        </nav>

        <div className="hero-container">
          <div className="hero-content animate">
            <p className="eyebrow">Nutrition AI Scanner</p>

            <h1>
              Understand your food.
              <br />
              Improve your health.
            </h1>

            <p className="hero-description">
              FoodLens helps you make smarter food decisions by analyzing food
              products and turning complex nutrition information into a simple,
              understandable score.
            </p>

            <div className="hero-actions">
              <a href="#" className="button">
                Download FoodLens
              </a>
              <a href="#how" className="button-ghost">
                See how it works
              </a>
            </div>
          </div>

          <ScanCard />
        </div>
      </header>

      <section className="features" id="features">
        <div className="section-heading animate">
          <h2>Nutrition intelligence made simple.</h2>

          <p>
            FoodLens combines nutritional science and advanced algorithms to
            help you better understand the products you consume.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card animate">
            <div className="feature-icon">
              <ScanIcon />
            </div>
            <h3>Scan Food</h3>

            <p>
              Quickly identify food products and access meaningful nutritional
              information.
            </p>
          </article>

          <article className="feature-card animate">
            <div className="feature-icon">
              <SparkIcon />
            </div>
            <h3>AI Powered Analysis</h3>

            <p>
              Complex nutritional data is transformed into a simple experience
              anyone can understand.
            </p>
          </article>

          <article className="feature-card animate">
            <div className="feature-icon">
              <LeafIcon />
            </div>
            <h3>Health Focused</h3>

            <p>
              Make informed choices with a focus on whole foods and balanced
              nutrition.
            </p>
          </article>
        </div>
      </section>

      <section className="how" id="how">
        <div className="section-heading animate">
          <h2>From shelf to insight in seconds.</h2>
          <p>
            Three steps stand between you and a clearer picture of what you eat.
          </p>
        </div>

        <div className="how-steps">
          <div className="how-step animate">
            <span className="how-index">01</span>
            <h3>Scan</h3>
            <p>Point your camera at any packaged food to capture its label.</p>
          </div>

          <div className="how-step animate">
            <span className="how-index">02</span>
            <h3>Analyze</h3>
            <p>
              FoodLens reads the ingredients and nutrition facts, then runs them
              through its scoring model.
            </p>
          </div>

          <div className="how-step animate">
            <span className="how-index">03</span>
            <h3>Understand</h3>
            <p>
              Get a single, clear score along with the reasons behind it, no
              nutrition degree required.
            </p>
          </div>
        </div>
      </section>

      <section className="whole-food">
        <div className="dark-content animate">
          <h2>Whole foods first.</h2>

          <p>
            We believe better health starts with better understanding. FoodLens
            encourages choices built around real, minimally processed foods.
          </p>
        </div>
      </section>

      <section className="download animate">
        <h2>Start understanding what you eat.</h2>

        <p>Your nutrition journey starts with knowledge.</p>

        <a href="#" className="button">
          Get FoodLens
        </a>
      </section>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
