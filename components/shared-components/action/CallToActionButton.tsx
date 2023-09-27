import Link from 'next/link';

import CustomButton from '@/components/reusable/CustomButton';

const CallToActionButton = () => {
  return (
    <Link className="" href="/contact">
      <CustomButton title="Get in touch with me" />
    </Link>
  );
};

export default CallToActionButton;
