import React from 'react';
import logo from './logo.svg';
import styles from './app.module.css';

class App extends React.Component {
  render() {
    
    return (
      <div className={[styles.App, styles.another].join(' ')}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Vidly project
        </p>
        <a
          className={styles["App-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
