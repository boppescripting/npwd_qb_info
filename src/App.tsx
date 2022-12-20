import React from 'react';
import { RecoilRoot } from 'recoil';
import { NuiProvider } from 'react-fivem-hooks';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { InfoList } from './components/Info';
import { IPhoneSettings } from '@project-error/npwd-types';
import { i18n } from 'i18next';
import {
  Theme,
  StyledEngineProvider,
  Paper
} from '@mui/material';
import ThemeSwitchProvider from './ThemeSwitchProvider';
import Header, { HEADER_HEIGHT } from './components/Header';

const Container = styled(Paper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-height: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.5rem;
  max-height: calc(100% - 3.5rem - ${HEADER_HEIGHT});
  overflow: auto;
`;

const LinkItem = styled(Link)`
  font-family: sans-serif;
  text-decoration: none;
`;

const Footer = styled.footer`
  margin-top: auto;
`;

interface AppProps {
  theme: Theme;
  i18n: i18n;
  settings: IPhoneSettings;
}

const App = (props: AppProps) => {
  const isDarkMode = props.theme.palette.mode === 'dark';

  return (
    <StyledEngineProvider injectFirst>
      <ThemeSwitchProvider mode={props.theme.palette.mode}>
        <Container square elevation={0}>
          <Header>Information</Header>
          <InfoList isDarkMode={isDarkMode} />
        </Container>
      </ThemeSwitchProvider>
    </StyledEngineProvider>
  );
};

const WithProviders: React.FC<AppProps> = (props) => (
  <RecoilRoot>
    <NuiProvider>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App {...props} />
      </React.Suspense>
    </NuiProvider>
  </RecoilRoot>
);

export default WithProviders;