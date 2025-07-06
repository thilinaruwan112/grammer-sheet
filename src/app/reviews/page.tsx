import AllTestimonialsSection from '@/components/reviews/all-testimonials-section';
import HeroSection from '@/components/reviews/hero-section';
import SuccessStoriesSection from '@/components/reviews/success-stories-section';
import VideoTestimonialsSection from '@/components/reviews/video-testimonials-section';

export default function ReviewsPage() {
  return (
    <>
      <HeroSection />
      <SuccessStoriesSection />
      <VideoTestimonialsSection />
      <AllTestimonialsSection />
    </>
  );
}
