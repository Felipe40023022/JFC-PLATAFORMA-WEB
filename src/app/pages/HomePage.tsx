import { HeroCarousel } from '../components/HeroCarousel';
import { Certifications } from '../components/Certifications';
import { MotivationalCarousel } from '../components/MotivationalCarousel';
import { IndustrialCarousel } from '../components/IndustrialCarousel';
import { HomeProductCatalogs } from '../components/HomeProductCatalogs';

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Certifications />
      <MotivationalCarousel />
      <HomeProductCatalogs />
      <IndustrialCarousel />
    </>
  );
}
