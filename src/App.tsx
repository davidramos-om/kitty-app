import './App.css';

import Router from './routes';
import ThemeProvider from './theme';
import Settings from 'src/components/settings';
import ScrollToTop from 'src/components/ScrollToTop';
import { ProgressBarStyle } from 'src/components/ProgressBar';
import MotionLazyContainer from 'src/components/animation/MotionLazyContainer';
import ThemeColorPresets from 'src/theme/ThemeColorPresets';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeColorPresets>
        <MotionLazyContainer>
          <ProgressBarStyle />
          <Settings />
          <ScrollToTop />
          <Router />
        </MotionLazyContainer>
      </ThemeColorPresets>
    </ThemeProvider>
  );
}

