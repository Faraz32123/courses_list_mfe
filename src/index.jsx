import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR,
  APP_READY,
  subscribe,
  initialize,
  getConfig,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';

import Header, {
  messages as headerMessages,
} from '@edx/frontend-component-header';
import Footer, {
  messages as footerMessages,
} from '@edx/frontend-component-footer';

import { configure } from '@edx/frontend-platform/i18n';
import appMessages from './i18n';
import ExamplePage from './example/ExamplePage';
import CoursesListPage from './courseList/coursesListPage';

import './index.scss';

configure({
  messages: appMessages,
  config: getConfig(),
});

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Header />
      <CoursesListPage />
      <Footer />
    </AppProvider>,
    document.getElementById('root')
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(
    <ErrorPage message={error.message} />,
    document.getElementById('root')
  );
});

initialize({
  messages: [appMessages, headerMessages, footerMessages],
});
