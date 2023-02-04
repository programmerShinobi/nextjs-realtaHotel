import styles from '../styles/LayoutSignIn.module.css';
import { Card } from '@mui/material';

export default function LayoutSignIn({ children }) {
  return (
    <>
      <div className=" bgLayout">
        <div className={styles.logoLayout}></div>
        <Card responsi className={styles.cardLogin}>
          <div className="form-auth">
            <div className="py-8">
              {children}
            </div>
          </div>
        </Card>
        <div className={styles.bgImg}>
          <div className={styles.cardInCardLogin}>
            <div className={styles.textTitlaInCardLogin}>
              <b>Give More <u>Experience</u><br />With Our Service</b>
            </div>
            <div className={styles.textSubtitleInCardLogin}>
              Hear what our guests have to say about their unforgettable stay at our hotel
            </div>
          </div>
        </div>
      </div>
    </>
  );
}