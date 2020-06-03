import styled from 'styled-components';
import { RootState } from './reducers';

export const bumpStyled = (component: any) => (css: TemplateStringsArray) =>
  styled(component)`
    && {
      ${css}
    }
  `;

export const convertStoreToFileText = (state: RootState) => {
    return JSON.stringify(state, null, 2)
}

export const convertFileTextToStore = (stateText: string) => {
  let quickoData = JSON.parse(stateText);
  return quickoData;
}
