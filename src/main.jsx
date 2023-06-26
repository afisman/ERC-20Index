import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig, createConfig, configureChains, } from 'wagmi'
import { mainnet, goerli, sepolia } from 'wagmi/chains'

import { publicProvider } from 'wagmi/providers/public'

const { publicClient, webSocketPublicClient, chains } = configureChains(
  [mainnet, goerli, sepolia],
  [publicProvider()],
)

const config = createConfig({
  publicClient,
  webSocketPublicClient,
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <App />

      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
