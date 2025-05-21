import pixie from '@pixie-cheeks/eslint-config';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginVitest from '@vitest/eslint-plugin';
import pluginTestingLibrary from 'eslint-plugin-testing-library';
import pluginJestDom from 'eslint-plugin-jest-dom';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { files: ['**/*.{ts,tsx,jsx,js,cjs}'] },
  { ignores: ['dist'] },
  ...pixie.base,
  ...pixie.react,
  {
    plugins: {
      'react-refresh': pluginReactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import-x/no-extraneous-dependencies': [
        'error',
        // All files in the root folder can have devDeps
        {
          devDependencies: ['*.{js,cjs,ts}', '**/*.test.*'],
          optionalDependencies: false,
        },
      ],
    },
  },
  {
    files: ['eslint.config.js', 'vite.config.ts'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
  {
    files: ['src/**/*'],
    rules: {
      'n/no-unsupported-features/node-builtins': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  },
  {
    files: ['**/*.test.*'],
    plugins: {
      vitest: pluginVitest,
      'testing-library': pluginTestingLibrary,
      'jest-dom': pluginJestDom,
    },
    rules: {
      ...pluginVitest.configs.recommended.rules,
      ...pluginTestingLibrary.configs['flat/react'].rules,
      ...pluginJestDom.configs['flat/recommended'].rules,
    },
  },
  pixie.prettier,
);
