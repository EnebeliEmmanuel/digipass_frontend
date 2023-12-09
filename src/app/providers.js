'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
      mainnet,
      polygon,
      optimism,
      arbitrum,
      base,
      zora,
      goerli,
    ],
    [publicProvider()]
  );
  

  
const projectId = '3ec109388023de616d9c883f116980db';

const { connectors } = getDefaultWallets({
  appName: 'DigiPass',
  projectId,
  chains,
});

const appInfo = {
  appName: 'DigiPass',
};

// const connectors = connectorsForWallets([
//   ...wallets,
//   {
//     groupName: 'Other',
//     wallets: [
//       argentWallet({ projectId, chains }),
//       trustWallet({ projectId, chains }),
//       ledgerWallet({ projectId, chains }),
//     ],
//   },
// ]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export const Providers = ({ children }) => {
// const myCustomTheme = Theme({
//   blurs: {
//     modalOverlay: '...',
//   },
//   colors: {
//     accentColor: '...',
//     accentColorForeground: '...',
//     actionButtonBorder: '...',
//     actionButtonBorderMobile: '...',
//     actionButtonSecondaryBackground: '...',
//     closeButton: '...',
//     closeButtonBackground: '...',
//     connectButtonBackground: '',
//     connectButtonBackgroundError: '...',
//     connectButtonInnerBackground: '...',
//     connectButtonText: '...',
//     connectButtonTextError: '...',
//     connectionIndicator: '...',
//     downloadBottomCardBackground: '...',
//     downloadTopCardBackground: '...',
//     error: '...',
//     generalBorder: '...',
//     generalBorderDim: '...',
//     menuItemBackground: '...',
//     modalBackdrop: '...',
//     modalBackground: '...',
//     modalBorder: '...',
//     modalText: '...',
//     modalTextDim: '...',
//     modalTextSecondary: '...',
//     profileAction: '...',
//     profileActionHover: '...',
//     profileForeground: '...',
//     selectedOptionBorder: '...',
//     standby: '...',
//   },
//   fonts: {
//     body: '...',
//   },
//   radii: {
//     actionButton: '...',
//     connectButton: '...',
//     menuButton: '...',
//     modal: '...',
//     modalMobile: '...',
//   },
//   shadows: {
//     connectButton: '...',
//     dialog: '...',
//     profileDetailsAction: '...',
//     selectedOption: '...',
//     selectedWallet: '...',
//     walletLogo: '...',
//   },
//   });
  
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={appInfo}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
