import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
       <div>© 2023 FSR-DEV, All rights reserved.</div>
      <div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt='FSR-DEV facebook'/>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt='FSR-DEV instagram'/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt='FSR-DEV twitter'/>
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt='FSR-DEV youtube'/>
      </div>
      </div>  
    </div>
  )
}

export default Footer