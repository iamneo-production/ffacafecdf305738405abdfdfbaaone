import React, { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const BlogPost = lazy(() => import('./BlogPost'));
const BlogList = lazy(() => import('./BlogList'))

const queryClient = new QueryClient();

const BlogApp = () => {
  return (
<QueryClientProvider client={queryClient}>

    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/blogs" element={<BlogList />} />
        </Routes>
      </Suspense>
    </Router>

    </QueryClientProvider>
  );
};

export default BlogApp;
