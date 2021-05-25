import React from 'react';
import 원룸상세 from './screens/원룸상세';
import 빌라상세 from './screens/빌라상세';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <>
                <hr/>
                <Link to="/oneroom/27341659">원룸상세</Link>
                <hr/>
                <Link to="/villa/27270854">빌라상세</Link>
              </>
            </Route>
            <Route exact path="/oneroom/:itemId">
              <원룸상세 />
            </Route>
            <Route exact path="/villa/:itemId">
              <빌라상세 />
            </Route>
            <Route path="*">
              ????
            </Route>
          </Switch>
        </Router>
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
