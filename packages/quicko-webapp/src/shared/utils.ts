import styled from 'styled-components';
import { RootState } from './reducers';

export const bumpStyled = (component: any) => (css: TemplateStringsArray) =>
  styled(component)`
    && {
      ${css}
    }
  `;

export const convertStoreToFileText = (store: RootState) => {
    const text = Object.keys(store).reduce(
      (acc: any, key: string) =>
      // @ts-ignore next-line
        ({...acc, [key]: JSON.stringify(store[key], null, 2)}),
      {}
    );

    return JSON.stringify(text, null, 2)
}

export const convertFileTextToStore = (text: string) => {
  let quickoData = JSON.parse(text);
  quickoData = {
    playbooks: JSON.parse(quickoData.playbooks),
    tasks: JSON.parse(quickoData.tasks),
  };

  return quickoData;
}
