import React from 'react';
import AuthProvider from '../providers/AuthProvider';
import ColorProvider from '../providers/ColorProvider';
import LanguageProvider from '../providers/LanguageProvider';
import DetailInfoProvider from '../providers/DetailInfoProvider';

const ProviderWrapper = ({ children }) => {
  return (
    <DetailInfoProvider>
      <ColorProvider>
        <LanguageProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </LanguageProvider>
      </ColorProvider>
    </DetailInfoProvider>
  );
};

export default ProviderWrapper;
