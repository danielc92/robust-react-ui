import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import copy from 'rollup-plugin-copy';

export default {
  input: [
    'src/index.ts',
    'src/components/Carousel/index.ts',
    'src/components/AlertDialogue/index.ts',
    'src/components/Button/index.ts',
    'src/components/Form/index.ts',
    'src/components/Image/index.ts',
    'src/components/Landmark/index.ts',
    'src/components/Layout/index.ts',
    'src/components/Link/index.ts',
    'src/components/ProgressBar/index.ts',
    'src/components/NavigationBar/index.ts',
    'src/components/Table/index.ts',
    'src/components/TabList/index.ts',
    'src/components/Breadcrumbs/index.ts',
    'src/components/Typography/index.ts',
    'src/components/AutoComplete/index.ts',
    'src/components/Pagination/index.ts',
    'src/components/Accordion/index.ts',
    'src/components/Alert/index.ts',
  ],
  output: [
    {
      dir: 'build',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  preserveModules: true, // Important if we want to code split
  plugins: [
    peerDepsExternal(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    sass({
      insert: true,
    }),
    copy({
      targets: [
        {
          src: 'src/variables.scss',
          dest: 'build',
          rename: 'variables.scss',
        },
        {
          src: 'src/typography.scss',
          dest: 'build',
          rename: 'typography.scss',
        },
      ],
    }),
  ],
};
