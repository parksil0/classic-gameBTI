import Image from 'next/image';

import Button from '@/components/common/Button';
import link from '@/assets/link.svg';
import * as Styled from './index.styles';
import KakaoLinkShareButton from './KakaoLinkShareButton';

const BottomButtonGroup = () => {
  const handleClickCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <Styled.Wrapper>
      <Button
        paddingX={0}
        paddingY={0}
        type="button"
        onClick={handleClickCopyLink}
      >
        <Image src={link} width={52} height={52} />
      </Button>
      <KakaoLinkShareButton />
    </Styled.Wrapper>
  );
};

export default BottomButtonGroup;
