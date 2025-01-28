const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allowCircularSelfDependency: true,
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
          allow: [
            'assets/*',
            'api/*',
            'context/*',
            'features/*',
            'hooks/*',
            'i18n/*',
            'integrations',
            'providers',
            'tests/*',
            'types/*',
            '^.*/eslint(\\.base)?\\.config\\.[cm]?js$',
          ],
        },
      ]
    },
  },
];
