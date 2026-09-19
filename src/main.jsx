import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const courses = [
  { code: '01', level: 'Undergraduate', title: 'B.E. Computer Science & Engineering', short: 'BE - CSE', text: 'Build the skills to design intelligent software, solve complex problems and lead the digital future.' },
  { code: '02', level: 'Undergraduate', title: 'B.Tech. Information Technology', short: 'B.Tech - IT', text: 'Explore modern information systems, cloud platforms, cybersecurity and full-stack development.' },
  { code: '03', level: 'Undergraduate', title: 'B.Tech. Artificial Intelligence & Data Science', short: 'B.Tech - AIDS', text: 'Turn data into insight with an industry-focused programme in AI, analytics and machine learning.' },
];

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (next) => { setPage(next); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return <div className="site-shell">
    <header className="header">
      <div className="container nav-wrap">
        <button className="brand" onClick={() => navigate('home')} aria-label="Go to home">
          <img src="/asset/logo.png" alt="JIT logo" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <span><b>JAYALAKSHMI</b><small>INSTITUTE OF TECHNOLOGY</small></span>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {[['home','Home'],['about','About us'],['courses','Courses'],['contact','Contact us'],['career','Careers']].map(([key,label]) => <button className={page === key ? 'active' : ''} key={key} onClick={() => navigate(key)}>{label}</button>)}
          <button className="nav-apply" onClick={() => navigate('career')}>Apply now <span>↗</span></button>
        </nav>
      </div>
    </header>

    <main>
      {page === 'home' && <Home navigate={navigate} />}
      {page === 'about' && <About />}
      {page === 'courses' && <Courses navigate={navigate} />}
      {page === 'contact' && <Contact />}
      {page === 'career' && <Career />}
    </main>

    <footer className="footer"><div className="container footer-grid">
      <div><div className="footer-brand">JIT<span>.</span></div><p>Education for excellence<br />and entrepreneurship.</p></div>
      <div><h4>Explore</h4><button onClick={() => navigate('about')}>About us</button><button onClick={() => navigate('courses')}>Courses</button><button onClick={() => navigate('career')}>Careers</button></div>
      <div><h4>Contact</h4><p>NH-7, Salem Main Road,<br />Thoppur – 636 352,<br />Dharmapuri DT, Tamilnadu</p></div>
      <div><h4>Connect</h4><p>Monday – Saturday<br />9:00 AM – 5:00 PM</p><a href="mailto:info@jit.edu.in">info@jit.edu.in</a></div>
    </div><div className="container copyright"><span>© {new Date().getFullYear()} Jayalakshmi Institute of Technology</span><span>Chendamarai Ramanujam Educational Service Trust</span></div></footer>
  </div>;
}

function Eyebrow({ children }) { return <div className="eyebrow"><i />{children}</div>; }
function PageIntro({ eyebrow, title, text }) { return <section className="page-intro"><div className="container"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1>{text && <p>{text}</p>}</div></section>; }
function Home({ navigate }) { return <>
  <section className="hero"><div className="container hero-grid"><div className="hero-copy"><Eyebrow>Welcome to JIT</Eyebrow><h1>Shape your future.<br /><em>Start here.</em></h1><p>Empowering rural youth through quality technical education, innovation and a culture of excellence.</p><div className="hero-actions"><button className="button primary" onClick={() => navigate('courses')}>Explore programmes <span>↗</span></button><button className="text-button" onClick={() => navigate('about')}>Discover JIT <span>→</span></button></div></div><div className="hero-art"><div className="art-circle"><div className="art-label">EST.<strong>2007</strong></div><div className="art-ring">JAYALAKSHMI<br />INSTITUTE OF TECHNOLOGY</div></div><div className="art-card"><b>01</b><span>Education for<br />excellence</span></div></div></div></section>
  <section className="intro section"><div className="container two-col"><div><Eyebrow>Our institution</Eyebrow><h2>Where ambition<br /><em>meets opportunity.</em></h2></div><div><p className="lead">Jayalakshmi Institute of Technology is a self-financing engineering college approved by AICTE, New Delhi and affiliated to Anna University, Chennai.</p><p>Founded in 2007 by Thiru C. Subramanian, our institution began welcoming engineering students in 2008. Today, JIT is home to more than 1,600 students who are preparing to make a meaningful impact on the world.</p><button className="text-button" onClick={() => navigate('about')}>Read our story <span>→</span></button></div></div></section>
  <section className="stats"><div className="container stats-grid"><div><strong>1,600<span>+</span></strong><p>Students learning<br />and growing</p></div><div><strong>18<span>+</span></strong><p>Years of academic<br />excellence</p></div><div><strong>03</strong><p>Industry-relevant<br />programmes</p></div><div><strong>∞</strong><p>Possibilities<br />ahead</p></div></div></section>
  <section className="section programmes"><div className="container"><div className="section-heading"><div><Eyebrow>Academic journey</Eyebrow><h2>Find your <em>direction.</em></h2></div><button className="text-button" onClick={() => navigate('courses')}>View all programmes <span>→</span></button></div><div className="course-preview">{courses.map(c => <article className="course-card" key={c.code}><span className="course-number">{c.code}</span><small>{c.level}</small><h3>{c.short}</h3><p>{c.text}</p><button onClick={() => navigate('courses')}>Learn more <span>↗</span></button></article>)}</div></div></section>
</>; }
function About() { return <><PageIntro eyebrow="Our story" title={<>Built on vision.<br /><em>Driven by values.</em></>} text="A place where knowledge creates confidence and ambition finds direction." /><section className="section about-content"><div className="container about-grid"><div className="quote-mark">“</div><div><p className="lead">Chendamarai Ramanujam Educational Service Trust was founded in 2007 by Thiru C. Subramanian, an industrialist with a vision to empower rural youth through technical education.</p><p>In 2008, the institution began inducting students into undergraduate engineering programmes. Since then, JIT has grown into a vibrant centre of learning, committed to creating an environment where students can think boldly, learn deeply and contribute meaningfully.</p><p>Our academic approach brings together cutting-edge technology, a value-based curriculum and hands-on experiences — preparing every learner for global challenges and a purposeful career.</p><div className="signature"><b>Lion C. Subramanian</b><span>Founder Chairman</span></div></div></div></section><section className="values"><div className="container"><Eyebrow>What guides us</Eyebrow><div className="value-grid"><div><b>01</b><h3>Excellence</h3><p>We pursue high standards in learning, teaching and character.</p></div><div><b>02</b><h3>Innovation</h3><p>We encourage curiosity, creativity and ideas that shape tomorrow.</p></div><div><b>03</b><h3>Empowerment</h3><p>We give every student the confidence to create their own future.</p></div></div></div></section></>; }
function Courses({ navigate }) { return <><PageIntro eyebrow="Academic programmes" title={<>Learn with purpose.<br /><em>Lead with confidence.</em></>} text="Industry-relevant programmes designed to turn curiosity into capability." /><section className="section courses-list"><div className="container">{courses.map(c => <article className="course-row" key={c.code}><span className="course-number">{c.code}</span><div><small>{c.level}</small><h2>{c.title}</h2><p>{c.text}</p></div><button className="circle-arrow" onClick={() => navigate('contact')} aria-label="Enquire">↗</button></article>)}</div></section><section className="cta"><div className="container"><Eyebrow>Take the next step</Eyebrow><h2>Your future is waiting.<br /><em>Let's begin.</em></h2><button className="button light" onClick={() => navigate('contact')}>Enquire now <span>↗</span></button></div></section></>; }
function Contact() { const [sent, setSent] = useState(false); return <><PageIntro eyebrow="Get in touch" title={<>We'd love to<br /><em>hear from you.</em></>} text="Have a question about JIT? Our team is here to help." /><section className="section contact-grid container"><div className="contact-details"><div className="detail"><span>Visit us</span><p>Jayalakshmi Institute of Technology<br />NH-7, Salem Main Road,<br />Thoppur – 636 352,<br />Dharmapuri DT, Tamilnadu, India</p></div><div className="detail"><span>Write to us</span><a href="mailto:info@jit.edu.in">info@jit.edu.in</a></div><div className="detail"><span>Office hours</span><p>Monday – Saturday<br />9:00 AM – 5:00 PM</p></div></div><form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}><h2>Send a message</h2><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Message<textarea required rows="4" placeholder="How can we help?" /></label><button className="button primary" type="submit">{sent ? 'Message sent ✓' : 'Send message ↗'}</button></form></section></>; }
function Career() { const [sent, setSent] = useState(false); return <><PageIntro eyebrow="Join our team" title={<>Bring your talent.<br /><em>Make an impact.</em></>} text="We are always looking for passionate people to join the JIT community." /><section className="section career-grid container"><div><h2>Work with <em>purpose.</em></h2><p className="lead">If you believe in empowering students and shaping a better tomorrow, we would love to hear from you.</p><p>Share your details and biodata with us. Our team will reach out when an opportunity matches your profile.</p></div><form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true); }}><h2>Submit your profile</h2><label>Full name<input required placeholder="Your name" /></label><label>Mobile number<input required type="tel" placeholder="+91 00000 00000" /></label><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Bio data<input required type="file" accept=".pdf,.doc,.docx" /></label><button className="button primary" type="submit">{sent ? 'Application received ✓' : 'Submit application ↗'}</button></form></section></>; }

createRoot(document.getElementById('root')).render(<App />);
