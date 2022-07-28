import Badge from './Badge';
import * as Styled from './index.styles';

interface Props {
  characteristics: Readonly<string[]>;
}

const Badges = ({ characteristics }: Props) => {
  return (
    <Styled.Wrapper>
      {characteristics.map((characteristic) => (
        <Badge key={characteristic}>{characteristic}</Badge>
      ))}
    </Styled.Wrapper>
  );
};

export default Badges;
