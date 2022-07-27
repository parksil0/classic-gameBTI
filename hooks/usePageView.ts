import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '@/utils/gtag';

const usePageView = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url: URL) => {
        gtag.pageview(url);
      };
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }

    return () => {};
  }, [router.events]);
};

export default usePageView;
