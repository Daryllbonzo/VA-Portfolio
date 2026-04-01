import { useEffect, useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = scrollTop / docHeight;
      setProgress(Math.min(100, Math.max(0, scrolled * 100)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: ${dark ? '#0f172a' : '#f8fafc'};
          color: ${dark ? 'white' : '#111'};
          transition: 0.3s;
        }

        .toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #22c55e;
          padding: 10px 14px;
          border-radius: 10px;
          cursor: pointer;
          z-index: 10;
        }

        .chart-bg {
          position: fixed;
          width: 100%;
          height: 100%;
          opacity: 0.08;
          z-index: -1;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
        }

        .hero {
          text-align: center;
          padding: 80px 20px;
        }

        .btn {
          margin-top: 20px;
          padding: 14px 24px;
          background: #22c55e;
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          animation: glow 2s infinite alternate;
        }

        @keyframes glow {
          from { box-shadow: 0 0 10px #22c55e; }
          to { box-shadow: 0 0 25px #22c55e; }
        }

        .section {
          margin-top: 60px;
        }

        .card {
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 12px;
        }

        .samples {
          display: grid;
          gap: 20px;
        }

        @media(min-width:768px){
          .samples { grid-template-columns: repeat(3,1fr); }
        }

        .card img {
          width: 100%;
          border-radius: 10px;
        }

        .chat-bubble {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #22c55e;
          padding: 15px 20px;
          border-radius: 20px;
          animation: fadeIn 1s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);} 
          to { opacity: 1; transform: translateY(0);} 
        }
      `}</style>

      <div className="toggle" onClick={() => setDark(!dark)}>
        {dark ? 'Light Mode' : 'Dark Mode'}
      </div>

      <svg className="chart-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline fill="none" stroke="#22c55e" strokeWidth="0.5" points={`0,80 20,60 40,70 60,40 80,30 100,10`} />
      </svg>

      <div className="container">
        <div className="hero">
          <h1>Daryll John L. Bonzo</h1>
          <p>General Virtual Assistant</p>
          <a href="https://wa.me/639241232790">
            <button className="btn">Hire Me on WhatsApp</button>
          </a>
        </div>

        <div className="section">
          <h2>Sample Work</h2>
          <div className="samples">
            <div className="card">
              <h3>Client Growth</h3>
              <img src="https://dummyimage.com/800x400/22c55e/ffffff&text=+120%+Growth" />
            </div>
            <div className="card">
              <h3>Revenue Boost</h3>
              <img src="https://dummyimage.com/800x400/2563eb/ffffff&text=Revenue+Increase" />
            </div>
            <div className="card">
              <h3>Lead Growth</h3>
              <img src="https://dummyimage.com/800x400/0f172a/ffffff&text=Lead+Boost" />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Contact</h2>
          <p>📍 Manila, Philippines</p>
          <p><a href="https://www.facebook.com/daryll.l.bonzo" target="_blank">Facebook</a></p>
          <p><a href="https://ph.linkedin.com/in/daryll-bonzo-02a0632b0" target="_blank">LinkedIn</a></p>
        </div>
      </div>

      <div className="chat-bubble">
        Hi! I'm Daryll 👋 Need a VA?
      </div>
    </>
  );
}
