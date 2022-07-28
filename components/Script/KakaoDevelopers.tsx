import Script from 'next/script';

const KakaoDevelopers = () => {
  return (
    <Script
      id="nextjs-kakao-developers"
      async
      src="https://developers.kakao.com/sdk/js/kakao.js"
    />
  );
};

export default KakaoDevelopers;
