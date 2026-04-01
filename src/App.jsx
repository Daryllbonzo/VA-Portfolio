import { useEffect, useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);

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

  const services = [
    "Email & Calendar Management",
    "Data Entry & File Organization",
    "Online Research & Lead Generation",
    "Reports & Admin Support",
  ];

  const samples = [
    {
      title: "Data Entry Project",
      img: "https://dummyimage.com/800x400/22c55e/ffffff&text=Excel+Tracking",
    },
    {
      title: "Research Report",
      img: "https://dummyimage.com/800x400/2563eb/ffffff&text=Research+Report",
    },
    {
      title: "Email Organization",
      img: "https://dummyimage.com/800x400/1e293b/ffffff&text=Inbox+Management",
    },
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #eef4ff, #f8fbff);
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
        }

        .hero {
          text-align: center;
          padding: 80px 20px;
          background: linear-gradient(135deg, #0f172a, #2563eb);
          color: white;
          border-radius: 20px;
          animation: fadeUp 0.8s ease;
        }

        .btn {
          margin-top: 20px;
          padding: 14px 24px;
          background: #22c55e;
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: bold;
        }

        .section {
          margin-top: 50px;
          padding: 30px;
          background: white;
          border-radius: 20px;
          animation: fadeUp 0.8s ease;
        }

        .chart {
          height: 220px;
          background: #e5e7eb;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
        }

        .bar {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: linear-gradient(to top, #22c55e, #16a34a);
          transition: height 0.3s ease;
        }

        .services {
          display: grid;
          gap: 15px;
        }

        .card {
          padding: 20px;
          background: #f9fafb;
          border-radius: 12px;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .samples {
          display: grid;
          gap: 20px;
        }

        @media(min-width:768px){
          .samples { grid-template-columns: repeat(3,1fr); }
        }

        .sample-card img {
          width: 100%;
          border-radius: 10px;
          margin-top: 10px;
        }

        .cta {
          text-align: center;
          margin-top: 50px;
          padding: 40px;
          background: linear-gradient(135deg, #1e293b, #0f766e);
          color: white;
          border-radius: 20px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px);} 
          to { opacity: 1; transform: translateY(0);} 
        }
      `}</style>

      <div className="container">

        <div className="hero">
          <h1>Helping Business Owners Stay Organized & Grow Faster</h1>
          <p>General Virtual Assistant | Efficient • Reliable • Detail-Oriented</p>
          <a href="https://wa.me/639241232790">
            <button className="btn">Hire Me on WhatsApp</button>
          </a>
        </div>

        <div className="section">
          <h2>Business Growth Tracker</h2>
          <div className="chart">
            <div className="bar" style={{ height: `${progress}%` }}></div>
          </div>
        </div>

        <div className="section">
          <h2>What I Can Do For You</h2>
          <div className="services">
            {services.map((s) => (
              <div className="card" key={s}>{s}</div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Sample Work</h2>
          <div className="samples">
            {samples.map((s) => (
              <div className="card sample-card" key={s.title}>
                <h3>{s.title}</h3>
                <img src={s.img} />
              </div>
            ))}
          </div>
        </div>

        <div className="cta">
          <h2>Ready to make your work easier?</h2>
          <p>Let's connect and start working together today.</p>
          <a href="https://wa.me/639241232790">
            <button className="btn">Message Me Now</button>
          </a>
        </div>

      </div>
    </>
  );
}
