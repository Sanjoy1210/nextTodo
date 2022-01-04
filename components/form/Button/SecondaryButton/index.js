import styles from './SecondaryButton.module.css';

const SecondaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={(e) => typeof onClick == 'function' && onClick(e)}
      className={styles['button']}
    >
      {children}
    </button>
  )
}

export default SecondaryButton;