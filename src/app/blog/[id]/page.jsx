import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import avatar from 'public/2.jpg';
import im1 from 'public/c2.png';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Experience Elevated: Redefining Digital Possibilities
          </h1>
          <p className={styles.desc}>
            Welcome to NextGen Xpertise! We are a passionate team of web and mobile developers
            <br />
            focused on pushing the boundaries of user experience.
          </p>
          <div className={styles.author}>
            <Image
              src={avatar}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={im1} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Welcome to NextGen Xpertise! We are a passionate team of web and mobile developers focused on pushing the boundaries
          of user experience. With cutting-edge technologies, we create innovative solutions tailored to our clients' needs.
          Collaborative and forward-thinking, we work closely with our clients to exceed expectations and deliver top-notch products
          <br />
          <br />
          Passion drives us as we craft outstanding web and mobile development services that leave a lasting impact. We are dedicated
          to making a difference through our work, bringing your boldest ideas to life with our expertise and ingenuity.
          Trust NextGen Xpertise to elevate your digital presence and achieve unparalleled success.
          Passion drives us as we craft outstanding web and mobile development services that leave a lasting impact. We are dedicated
          to making a difference through our work, bringing your boldest ideas to life with our expertise and ingenuity.
          <br />
          <br />
          Trust NextGen Xpertise to elevate your digital presence and achieve unparalleled success.
          Passion drives us as we craft outstanding web and mobile development services that leave a lasting impact. We are dedicated
          to making a difference through our work, bringing your boldest ideas to life with our expertise and ingenuity.
          Trust NextGen Xpertise to elevate your digital presence and achieve unparalleled success.

        </p>
      </div>
    </div>
  );
};

export default BlogPost;
