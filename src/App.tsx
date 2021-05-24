import React from 'react';
import 원룸상세 from './screens/원룸상세';
import 빌라상세 from './screens/빌라상세';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="App">
          <원룸상세 id="27341659" />
          <빌라상세 id="27270854" />
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
