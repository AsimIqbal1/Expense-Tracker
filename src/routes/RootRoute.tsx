import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTE_PAGES } from 'routes/Routes.constants';
import { Spinner as Loader } from '@chakra-ui/react'
import { Sidebar } from 'ui/components';

function SuspenceHoc(component: React.ReactElement) {
  return (
    <Suspense fallback={<div className="center full-screen"><Loader color="black" /></div>}>
      {component}
    </Suspense>
  );
}

export function RootRoute() {
  return (
    <Router>
      <Sidebar pages={ROUTE_PAGES}>
        <Routes>
          {ROUTE_PAGES.map(page => <Route key={page.id} path={page.route} element={<page.Component />} />)}

          {/* <Route path="*" element={SuspenceHoc(<NotFound />)} /> */}
        </Routes>
      </Sidebar>

    </Router>
  );
}
