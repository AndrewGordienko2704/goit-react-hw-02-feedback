import styled from 'styled-components';
import { optionColors } from 'data/optionColors';

export const OptionList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding-left: 0;
  padding-bottom: 20px;
  margin: 20px 0 0 0;
  border-bottom: 1px solid #3acdcd;
`;

export const Option = styled.li`
  width: 100px;
  padding: 5px;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  border: 1px solid #3acdcd;
  border-radius: 8px;
  transition: 300ms;
  cursor: pointer;
  background-color: ${({ id }) => optionColors[id]};
  &:hover {
    scale: 1.1;
    box-shadow: rgb(0 0 0 / 40%) -3px 3px 3px 0px,
      rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  }
`;