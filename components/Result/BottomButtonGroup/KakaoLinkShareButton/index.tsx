import Image from 'next/image';
import React, { useEffect } from 'react';

import Button from '@/components/common/Button';

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoLinkShareButton = () => {
  const createKakaoButton = () => {
    if (!window.Kakao) {
      return;
    }

    const { Kakao: kakao } = window;

    if (!kakao.isInitialized()) {
      kakao.init(process.env.KAKAO_DEVELOPERS_JAVASCRIPT_KEY);
    }

    window.Kakao.Share.createDefaultButton({
      container: '#create-kakaotalk-sharing-btn',
      objectType: 'feed',
      content: {
        title: '고전겜BTI',
        description: '고전 게임 성향을 통해 확인하는 성향 테스트',
        imageUrl:
          'https://user-images.githubusercontent.com/41149744/181452591-c2c52272-a4bc-4f4c-83a4-871574918d92.png',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    });
  };

  useEffect(() => {
    createKakaoButton();
  }, []);

  return (
    <Button
      type="button"
      id="create-kakaotalk-sharing-btn"
      paddingX={0}
      paddingY={0}
    >
      <Image
        src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        alt="카카오톡 공유 보내기 버튼"
        width={52}
        height={52}
      />
    </Button>
  );
};

export default KakaoLinkShareButton;
