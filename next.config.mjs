import bundleAnalyzer from '@next/bundle-analyzer';
import withNextIntl from 'next-intl/plugin';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(
  withNextIntl()({
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    },
    output: 'export',
  })
);
