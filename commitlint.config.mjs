/*********************************************************************
 *                                                                   *
 * SCRIPT:      commitlint.config.mjs                                *
 *                                                                   *
 * AUTHOR:      Nova Admin <admin@nova.eco>                          *
 *                                                                   *
 * DATE:        27th November 2025                                   *
 *                                                                   *
 * PURPOSE:     Commitlint configuration for conventional commits.   *
 *                                                                   *
 *********************************************************************/

const Configuration = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  ignores: [(commit) => commit === ''],
  defaultIgnores: true,
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  prompt: {
    messages: {},
    questions: {
      type: {
        description: 'please input type:',
      },
    },
  },
};

export default Configuration;
