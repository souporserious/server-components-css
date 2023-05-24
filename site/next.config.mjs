/** @type {import('next').NextConfig} */
export default {
  transpilePackages: ['design-system'],
  modularizeImports: {
    'design-system/components': {
      transform: 'design-system/components/{{ kebabCase member }}',
      skipDefaultConversion: true,
    },
  },
}
