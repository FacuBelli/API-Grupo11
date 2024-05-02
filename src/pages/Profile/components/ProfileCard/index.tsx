import Button from '../../../../components/Button'
import BrushIcon from '@mui/icons-material/Brush'
import type { User } from '../../../../types/database'
import styles from './styles.module.css'

interface Props {
  user: User
  stats: {
    created: number
    sold: number
    bought: number
  }
}

export default function ProfileCard({ user, stats }: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.username}>
        {(user.first_name ? user.first_name + ' ' : '') + (user.last_name ?? '')}
      </h3>
      <div className={styles.statsContainer}>
        <h4 className={styles.statsTitle}>ARTWORKS</h4>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h5 className={styles.statTitle}>CREATED</h5>
            <span className={styles.statValue}>{stats.created}</span>
          </div>
          <div className={styles.stat}>
            <h5 className={styles.statTitle}>SOLD</h5>
            <span className={styles.statValue}>{stats.sold}</span>
          </div>
          <div className={styles.stat}>
            <h5 className={styles.statTitle}>BOUGHT</h5>
            <span className={styles.statValue}>{stats.bought}</span>
          </div>
        </div>
      </div>
      <Button to="/studio">
        <span className={styles.buttonContent}>
          {user.is_artist ? 'NEW DESIGN' : 'BECOME A CREATOR'}
          <BrushIcon />
        </span>
      </Button>
    </div>
  )
}
