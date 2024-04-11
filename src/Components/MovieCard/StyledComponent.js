import styled from 'styled-components';

const StyledListItem = styled.li`

  &::after {
    content: "${props => props.title}";
  }
`;

export default StyledListItem;


