import Image from 'next/image';

import { ApplicationHeroImageType } from '@/types';
import MotionWrapperCardDiv from '@/HOC/MotionWrapperCardDiv';

const ApplicationHeroImage = ({
  imageUrl,
  imageAlt,
}: ApplicationHeroImageType) => (
  <MotionWrapperCardDiv
    direction="right"
    type="spring"
    delay={0.5}
    duration={2.75}
    additionalStyles="flex items-center justify-center bg-white-800 pb-[1.5rem] dark:bg-black-300"
  >
    <Image src={imageUrl} width={720} height={347} alt={imageAlt} />
  </MotionWrapperCardDiv>
);

export default ApplicationHeroImage;
