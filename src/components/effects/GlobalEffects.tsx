"use client";

import { GrainOverlay, MouseFollowBlob, FloatingParticles } from "./index";

export default function GlobalEffects() {
  return (
    <>
      {/* <CustomCursor /> Removed per user request */}
      <MouseFollowBlob />
      <FloatingParticles count={15} />
      <GrainOverlay />
    </>
  );
}
