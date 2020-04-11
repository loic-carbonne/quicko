import run from './runner';
import { askPlaybookConfiguration } from './dialog';

const context = {};

export const execute = async () => {
  const playbookConfiguration = await askPlaybookConfiguration();
  const { playbook, playbookParameters } = playbookConfiguration;

  if (playbook) {
    await run(playbook, playbookParameters, context);
  }

  console.log('Execution success');
};
