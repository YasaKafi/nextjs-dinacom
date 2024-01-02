import LandingHero from "@/app/(pages)/(feature-pages)/landing-component/landing-hero";
import LandingFeature from "@/app/(pages)/(feature-pages)/landing-component/landing-feature";
import LandingSmartCarrier from "@/app/(pages)/(feature-pages)/landing-component/landing-smartcarrier";
import LandingTestimony from "@/app/(pages)/(feature-pages)/landing-component/landing-testimony/landing-testimony";
import LandingContact from "@/app/(pages)/(feature-pages)/landing-component/landing-contact/landing-contact";


export default function Home() {
  return (
    <>
        <LandingHero/>
        <LandingFeature/>
        <LandingSmartCarrier/>
        <LandingTestimony/>
        <LandingContact/>
    </>
  )
}
