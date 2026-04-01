import { useEffect, useMemo, useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  // 🔥 cursor state
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const scrolled = window.scrollY / docHeight;
      setProgress(Math.max(0, Math.min(1, scrolled)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 cursor movement
  useEffect(() => {
    const moveCursor = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const chartPath = useMemo(() => {
    const values = [28, 34, 31, 42, 48, 46, 58, 64, 71, 78];
    const animated = values.map((v, i) => {
      const wave = Math.sin(progress * Math.PI * 2 + i * 0.45) * 4;
      const growth = progress * (i * 2.2);
      return Math.max(14, Math.min(88, v + wave + growth));
    });

    return animated
      .map((v, i) => `${i === 0 ? "M" : "L"} ${6 + i * 9.8} ${100 - v}`)
      .join(" ");
  }, [progress]);

  const candles = useMemo(() => {
    return [
      { x: 8, o: 66, c: 58, h: 53, l: 74 },
      { x: 18, o: 62, c: 67, h: 55, l: 73 },
      { x: 28, o: 64, c: 61, h: 56, l: 76 },
      { x: 38, o: 60, c: 71, h: 50, l: 78 },
      { x: 48, o: 70, c: 73, h: 47, l: 79 },
      { x: 58, o: 72, c: 68, h: 52, l: 82 },
      { x: 68, o: 66, c: 79, h: 43, l: 84 },
      { x: 78, o: 78, c: 83, h: 38, l: 88 },
      { x: 88, o: 82, c: 86, h: 33, l: 91 },
    ].map((c, i) => {
      const nudge = Math.sin(progress * Math.PI * 2 + i * 0.55) * 1.8;
      return {
        ...c,
        o: c.o - nudge,
        c: c.c - nudge - progress * 4,
        h: c.h - nudge - progress * 5,
        l: c.l - nudge + progress * 3,
      };
    });
  }, [progress]);

  const offers = [
    "Email and inbox management",
    "Calendar scheduling and follow-ups",
    "Data entry and spreadsheet organization",
    "Online research and lead generation",
    "Document formatting and report creation",
    "Admin support for busy founders and teams",
  ];

  const tools = [
    "Google Sheets","Excel","Google Calendar","Zoom","Slack","Notion","Canva","Google Docs","Gmail",
  ];

  const strengths = [
    "Fast learner who adapts quickly",
    "Strong attention to detail",
    "Organized and reliable",
    "Consistent and accurate",
  ];

  const results = [
    { title: "Lead Tracking Cleanup", stat: "+38%", desc: "Cleaner tracking system" },
    { title: "Inbox Workflow Setup", stat: "Better response", desc: "Organized inbox flow" },
    { title: "Research Dashboard", stat: "Clear insights", desc: "Better decisions" },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; cursor: none; }
        body { margin:0; font-family: Arial; background:#081225; color:white; }
      `}</style>

      {/* 🔥 GLOWING CURSOR */}
      <div
        style={{
          position: "fixed",
          left: cursor.x,
          top: cursor.y,
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          pointerEvents: "none",
          background: "radial-gradient(circle, #22c55e 0%, transparent 70%)",
          boxShadow: "0 0 12px #22c55e, 0 0 30px #22c55e, 0 0 60px rgba(34,197,94,0.6)",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />

      {/* ⚡ KEEP EVERYTHING SAME */}
      <div className="page">
        <h1 style={{textAlign:"center"}}>Daryll John L. Bonzo</h1>
        <p style={{textAlign:"center"}}>General Virtual Assistant</p>

        <div style={{textAlign:"center",marginTop:"20px"}}>
          <a href="https://wa.me/639241232790" style={{
            padding:"12px 20px",
            background:"#22c55e",
            borderRadius:"10px",
            color:"white",
            textDecoration:"none",
            boxShadow:"0 0 20px #22c55e"
          }}>
            Hire Me on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
