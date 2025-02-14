import React, { Component } from 'react';

import Prism from 'prismjs';
import { LogoWithText, PlatformButton } from '@components';
import browser from '../assets/browser.svg';
import iphone from '../assets/iphone.svg';
import imac from '../assets/imac.svg';
import GitHubButton from 'react-github-btn';

class Index extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={{ marginTop: 40 }}>
          <LogoWithText subtitle style={{ width: '100%' }} />
        </div>

        <GitHubButton
          href="https://github.com/codypearce/material-bread"
          data-size="large"
          data-show-count="true"
          aria-label="Star codypearce/material-bread on GitHub">
          Star
        </GitHubButton>

        <div className="Home__platformRow">
          <PlatformButton
            text="REACT NATIVE"
            img={iphone}
            href={'/getting-started/react-native'}
          />
          <PlatformButton
            text="REACT"
            img={browser}
            href={'/getting-started/web'}
          />
          <PlatformButton
            text="ELECTRON"
            img={imac}
            href={'/getting-started/electron'}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 60,
  },
  code: {},
};

export default Index;
