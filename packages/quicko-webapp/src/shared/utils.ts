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
        ({...acc, [key]: JSON.stringify(store[key])}),
      {}
    );

    return JSON.stringify(text)
}

export const convertFileTextToStore = (text: string) => {
  let quickoData = JSON.parse(text);
  quickoData = {
    playbooks: JSON.parse(quickoData.playbooks),
    tasks: JSON.parse(quickoData.tasks),
  };

  return quickoData;
}
