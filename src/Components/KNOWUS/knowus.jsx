import React, { useEffect, useRef } from 'react';
import './knowus.css';
import Footer from '../FOOTER/footer';
import S1 from '../../assets/S1.jpeg';
import S2 from '../../assets/S2.jpeg';
import S3 from '../../assets/S3.jpeg';
import kum from '../../assets/kum.png';
import kum1 from '../../assets/kum1.png';
import kum2 from '../../assets/kum2.png';

const About = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const joinUsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, 
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    const sections = [missionRef.current, visionRef.current, joinUsRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="about-container">
      <div className="small-images-grid">
        <div className="image-overlay-container" onClick={() => scrollToSection(missionRef)}>
          <img src={S1} alt="Small 1" className="small-img" />
          <div className="overlay-text">THE STORYTELLERS</div>
        </div>
        <div className="image-overlay-container" onClick={() => scrollToSection(visionRef)}>
          <img src={S2} alt="Small 2" className="small-img" />
          <div className="overlay-text">THE BLOGGERS</div>
        </div>
        <div className="image-overlay-container" onClick={() => scrollToSection(joinUsRef)}>
          <img src={S3} alt="Small 3" className="small-img" />
          <div className="overlay-text">THE READERS</div>
        </div>
      </div>

      <section className="about-section hidden" style={{ backgroundImage: `url(${kum})` }} ref={missionRef}>
        <div className="section-content">
          <img src={S1} alt="Mission Icon" className="section-icon" />
          <div className="text-content">
            <h2 className="about-heading">You Write Here!</h2>
            <p className="about-text">
            For Writers and Bloggers:
      Unleash your creativity on our dynamic platform, where you can craft captivating stories
      or insightful blogs to share with a global audience. Whether you’re an aspiring author or
      an experienced writer, our intuitive tools make publishing seamless. Build your portfolio, 
      connect with a vibrant community, and showcase your unique voice. Share your passions, 
      experiences, or fictional worlds, and watch your ideas take flight in an engaging, interactive
      environment.  
    <br></br>
    <br></br>
      For Readers and Enthusiasts:  
      Dive into a treasure trove of compelling content, from heartfelt blogs to gripping stories 
      spanning countless genres. Discover new voices, follow your favorite authors, and engage with 
      their works through comments and discussions. Our platform fosters a love for storytelling 
      and knowledge-sharing, creating a space where readers and writers connect. Explore, learn, and 
      immerse yourself in the magic of written words—there’s always something fresh to ignite your 
      imagination!
            </p>
          </div>
        </div>
      </section>

      <section className="about-section hidden" style={{ backgroundImage: `url(${kum1})` }} ref={visionRef}>
        <div className="section-content">
          <img src={S2} alt="Vision Icon" className="section-icon" />
          <div className="text-content">
            <h2 className="about-heading">You Blog Here!</h2>
            <p className="about-text">
            For Writers and Bloggers:
      Unleash your creativity on our dynamic platform, where you can craft captivating stories
      or insightful blogs to share with a global audience. Whether you’re an aspiring author or
      an experienced writer, our intuitive tools make publishing seamless. Build your portfolio, 
      connect with a vibrant community, and showcase your unique voice. Share your passions, 
      experiences, or fictional worlds, and watch your ideas take flight in an engaging, interactive
      environment.  
    <br></br>
    <br></br>
      For Readers and Enthusiasts:  
      Dive into a treasure trove of compelling content, from heartfelt blogs to gripping stories 
      spanning countless genres. Discover new voices, follow your favorite authors, and engage with 
      their works through comments and discussions. Our platform fosters a love for storytelling 
      and knowledge-sharing, creating a space where readers and writers connect. Explore, learn, and 
      immerse yourself in the magic of written words—there’s always something fresh to ignite your 
      imagination!
            </p>
          </div>
        </div>
      </section>

      <section className="about-section hidden" style={{ backgroundImage: `url(${kum2})` }} ref={joinUsRef}>
        <div className="section-content">
          <img src={S3} alt="Join Us Icon" className="section-icon" />
          <div className="text-content">
            <h2 className="about-heading">You Read Here!</h2>
            <p className="about-text">
            For Writers and Bloggers:
      Unleash your creativity on our dynamic platform, where you can craft captivating stories
      or insightful blogs to share with a global audience. Whether you’re an aspiring author or
      an experienced writer, our intuitive tools make publishing seamless. Build your portfolio, 
      connect with a vibrant community, and showcase your unique voice. Share your passions, 
      experiences, or fictional worlds, and watch your ideas take flight in an engaging, interactive
      environment.  
    <br></br>
    <br></br>
      For Readers and Enthusiasts:  
      Dive into a treasure trove of compelling content, from heartfelt blogs to gripping stories 
      spanning countless genres. Discover new voices, follow your favorite authors, and engage with 
      their works through comments and discussions. Our platform fosters a love for storytelling 
      and knowledge-sharing, creating a space where readers and writers connect. Explore, learn, and 
      immerse yourself in the magic of written words—there’s always something fresh to ignite your 
      imagination!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
