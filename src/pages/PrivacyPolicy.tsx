import "../styles/PrivacyPolicy.css";
import Footer from "../components/Footer";
import mainIcon from "../assets/mainicon.png";
const sections = [
  {
    title: "No data collection",
    body: "FoodLens does not collect, store, or process any personal data. There are no accounts, no sign-ups, and nothing to link back to you.",
  },
  {
    title: "No account required",
    body: "You can use FoodLens without registering or submitting any personal details, such as your name or email address.",
  },
  {
    title: "Food scanning",
    body: "FoodLens reads barcodes and nutrition information to generate a FoodLens Score. This is processed on your device to give you an answer, not stored or linked to you.",
  },
  {
    title: "Third parties",
    body: "FoodLens does not sell or share user information. Any external service the app relies on is used only to make the app work, never to collect data about you.",
  },
  {
    title: "Data security",
    body: "Because FoodLens does not collect personal data, there is no personal data of yours for us to store, manage, or expose.",
  },
  {
    title: "Changes",
    body: "If this policy ever changes, the update will appear on this page with a new revision date above.",
  },
];

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <a href="/" className="privacy-logo">
          <img src={mainIcon} alt="FoodLens" className="logo-icon" />
          <span className="logo-text">
            Food<span>Lens</span>
          </span>
        </a>

        <a href="/" className="privacy-back">
          Back
        </a>
      </header>

      <main className="privacy-main">
        <h1>Privacy Policy</h1>
        <p className="privacy-updated">Last updated July 17, 2026</p>
        <p className="privacy-summary">
          FoodLens is built to work without collecting any personal data. No
          account, no tracking, nothing stored about you.
        </p>
        <ol className="privacy-list">
          {sections.map((section, i) => (
            <li key={section.title} className="privacy-item">
              <span className="privacy-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="privacy-contact">
          Questions about this policy? You can reach the FoodLens team through
          the contact details listed on our app store page.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
