/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { WhyDiff } from './components/WhyDiff';
import { FilmDestination } from './components/FilmDestination';
import { FilmTourismCTA } from './components/FilmTourismCTA';
import { Experience } from './components/Experience';
import { DirectorBites } from './components/DirectorBites';
import { Competition } from './components/Competition';
import { Gallery } from './components/Gallery';
import { Culture } from './components/Culture';
import { Program } from './components/Program';
import { Sponsors } from './components/Sponsors';
import { Guests } from './components/Guests';
import { Press } from './components/Press';
import { Community } from './components/Community';
import { LiveCoverage } from './components/LiveCoverage';
import { TravelCTA } from './components/TravelCTA';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-[#0A0A0B] min-h-screen text-[#EBE6E0] overflow-hidden font-sans">
      <div className="film-grain"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Intro />
        <WhyDiff />
        <FilmDestination />
        <FilmTourismCTA />
        <Experience />
        <DirectorBites />
        <Competition />
        <Gallery />
        <Culture />
        <Program />
        <Sponsors />
        <Guests />
        <Press />
        <Community />
        <LiveCoverage />
        <TravelCTA />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
