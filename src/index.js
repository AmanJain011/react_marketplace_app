import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);


// theme={{
//   components: {
//     Button: {
//       colorPrimary: '#05386B',
//       colorPrimaryHover: '#05386B',
//     }
//   },
//   token: {
//     colorPrimary: '#05386B',
//   },
//  }}