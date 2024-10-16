import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';
import Button from '@/components/Button/Button';

export default function Home () {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Transforming Visions, Empowering Success
        </h1>
        <p className={styles.desc}>
          Empowering your journey with innovative web & mobile solutions. Transform your digital landscape today
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
