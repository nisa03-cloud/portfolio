import { OWNER } from "../../constants/data";
import styles from "./Hero.module.css";
import { useState, useEffect } from "react";

const FIRST = OWNER.name.split(" ")[0];
const LAST = OWNER.name.split(" ").slice(1).join(" ");

function TypeWriter({ text, delay = 0, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      setDone(true);
      return;
    }
    const t = setTimeout(
      () => setDisplayed(text.slice(0, displayed.length + 1)),
      85
    );
    return () => clearTimeout(t);
  }, [started, displayed, text]);

  return (
    <span className={className}>
      {displayed}
      {!done && <span className={styles.cursor}>|</span>}
    </span>
  );
}

export default function Hero() {
  const handleResume = () => {
    const a = document.createElement("a");
    a.href = OWNER.resumeUrl;
    a.download = "Nisadu_Nimsitha_Resume.pdf";
    a.click();
  };

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.tag}>
          Available for work · {OWNER.title} · {OWNER.university}
        </p>

        <h1 className={styles.name}>
          <TypeWriter text={FIRST} delay={300} />
          <br />
          <span className={styles.gold}>
            <TypeWriter text={LAST || "Nimsitha"} delay={300 + FIRST.length * 85 + 200} />
          </span>
        </h1>

        <p className={styles.sub}>
          Building polished, purposeful software from AI-powered mobile apps
          and full-stack web experiences to DevOps pipelines and Machine Learning solutions.
        </p>

        <div className={styles.ctas}>
          <button className={styles.ctaPrimary} onClick={() => scrollTo("projects")}>
            View my work
          </button>
          <button className={styles.ctaSecondary} onClick={handleResume}>
            ↓ Download CV
          </button>
        </div>

        <div className={styles.socials}>
          {[
            { icon: "↗", label: "GitHub", href: OWNER.github },
            { icon: "↗", label: "LinkedIn", href: OWNER.linkedin },
            { icon: "✉", label: "Email", href: `mailto:${OWNER.email}` },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {label} {icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.avatarWrap}>
        <div className={styles.ring1} />
        <div className={styles.ring2} />

        <div className={styles.avatar}>
          <img
            src="/Nisadu.jpeg"
            alt={OWNER.name}
            className={styles.avatarImg}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className={styles.monogram} style={{ display: "none", position: "absolute" }}>
            N
          </div>
        </div>

        <div className={styles.badge}>Colombo, LK · CS Student</div>
      </div>
    </section>
  );
}
