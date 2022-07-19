import type { NextPage } from 'next';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

const Home: NextPage = () => {
  return (
    <Button backgroundColor="teal_shade_light" radius={50}>
      <Text as="h1" variant="pageHeading" color="white">
        감정이입
      </Text>
    </Button>
  );
};

export default Home;
