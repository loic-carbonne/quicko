import styled from 'styled-components';

export const bumpStyled = (component: any) => (css: TemplateStringsArray) =>
  styled(component)`
    && {
      ${css}
    }
  `;
