import {
  camelCase,
  constantCase,
  dotCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase
} from 'change-case';
import { upperCase } from 'upper-case';
import { titleCase } from 'title-case';

const Handlebars = require('handlebars');

const HELPERS = {
  camelCase,
  snakeCase,
  dotCase,
  pathCase,
  lowerCase: noCase,
  upperCase,
  sentenceCase,
  constantCase,
  titleCase,
  dashCase: paramCase,
  kabobCase: paramCase,
  kebabCase: paramCase,
  properCase: pascalCase,
  pascalCase
};

Object.keys(HELPERS).forEach(helperName =>
  Handlebars.registerHelper(helperName, HELPERS[helperName])
);

export const parseTemplate = (template: String = '', params: any) => {
  return Handlebars.compile(template)(params);
};
