import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import AboutImg from 'public/about.jpg';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={AboutImg} fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Digital Pioneers: NextGen Xpertise
          </h1>
          <h2 className={styles.imgDesc}>
            Experience Elevated: Redefining Digital Possibilities
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We ?</h1>
          <p className={styles.desc}>
            Welcome to NextGen Xpertise! We are a passionate team of web and mobile developers focused on pushing the boundaries
            of user experience. With cutting-edge technologies, we create innovative solutions tailored to our clients' needs.
            Collaborative and forward-thinking, we work closely with our clients to exceed expectations and deliver top-notch products
            <br />
            <br />
            Passion drives us as we craft outstanding web and mobile development services that leave a lasting impact. We are dedicated
            to making a difference through our work, bringing your boldest ideas to life with our expertise and ingenuity.
            Trust NextGen Xpertise to elevate your digital presence and achieve unparalleled success.

          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do ?</h1>
          <p className={styles.desc}>
            We specialize in cutting-edge web and mobile development, offering responsive web design and intuitive mobile applications
            for seamless user experiences. Our comprehensive approach ensures high-quality solutions, delivered on time and within budget.
            With agile development and client collaboration, we turn your vision into reality, empowering your business to thrive in the digital era.
            Contact us to elevate your digital presence today.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
