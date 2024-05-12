import HeroBanner from './hero-banner/hero-banner-desktop/HeroBanner';
import HeroBannerMobile from './hero-banner/hero-banner-mobile/HeroBannerMobile';
import { useGetIsSmallScreen } from 'hooks/useGetIsSmallScreen';

type Props = {
  isMobile: boolean;
};

export default function HomeContainer({ isMobile }: Props) {
  const isSmallScreen = useGetIsSmallScreen()

  if (isMobile || isSmallScreen) {
    return <HeroBannerMobile />;
  }
  return <HeroBanner />;
}
