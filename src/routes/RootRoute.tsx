import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'routes/Routes.constants';
import { Spinner as Loader } from '@chakra-ui/react'
import { LandingPage } from 'pages/LandingPage';

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
      <Routes>
        <Route path={ROUTES.LANDING} element={<LandingPage />} />
        {/* <Route path="*" element={SuspenceHoc(<NotFound />)} /> */}
      </Routes>
    </Router>
  );
}
