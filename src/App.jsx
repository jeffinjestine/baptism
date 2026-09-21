import React, { useState, useEffect, useRef } from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import EnvelopeModal from './components/EnvelopeModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BibleVerse from './components/BibleVerse';
import Parents from './components/Parents';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';

export default function App() {
  const [envelopeOpen, setEnvelopeOpen] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(null);

  // Soft ambient music source
  useEffect(() => {
    // Elegant royalty-free ambient piano background stream
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=soft-ambient-piano-111153.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleOpenEnvelope = () => {
    setEnvelopeOpen(false);
    // Start ambient music softly after user interaction
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch((err) => {
        console.log("Audio playback waiting for gesture:", err);
      });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch(console.error);
    }
  };

  const handleReplayEnvelope = () => {
    setEnvelopeOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-poppins relative selection:bg-gold selection:text-black overflow-x-hidden">
      
      {/* Dynamic Gold Dust Canvas Particles */}
      <BackgroundParticles />

      {/* Interactive Unsealing Envelope Modal */}
      <EnvelopeModal
        isOpen={envelopeOpen}
        onOpen={handleOpenEnvelope}
      />

      {/* Main Website Experience (visible after or alongside envelope) */}
      <div className={`transition-opacity duration-1000 ${envelopeOpen ? 'opacity-30 blur-sm pointer-events-none' : 'opacity-100 blur-none'}`}>
        
        {/* Navbar Header */}
        <Navbar
          isPlayingMusic={isPlayingMusic}
          toggleMusic={toggleMusic}
          onReplayEnvelope={handleReplayEnvelope}
        />

        {/* Sections */}
        <main>
          <Hero
            onReplayEnvelope={handleReplayEnvelope}
          />
          <BibleVerse />
          <Parents />
          <Countdown />
          <EventDetails />
          <Gallery />
          <Location />
          <Rsvp />
        </main>

        {/* Footer */}
        <Footer />

      </div>

    </div>
  );
}
