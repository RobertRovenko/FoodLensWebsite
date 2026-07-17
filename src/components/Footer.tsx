import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} FoodLens</div>

      <div className="footer-right">
        <a href="/privacy-policy">Privacy Policy</a>

        <span>
          Created by <strong>rovenkodev</strong>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
