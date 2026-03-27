import Lottie from "lottie-react";
import animationCat from "../data/cat_playing_animation.json";
import animationHand from "../data/loading_hand.json";
import animationPaper from "../data/loading_paperplane.json";
import animationElephant from "../data/walking_elephant.json";
import animationChameleon from "../data/loading_chameleon.json";

import { useMemo } from "react";

const animations = [
  animationCat,
  animationHand,
  animationPaper,
  animationElephant,
  animationChameleon,
];

export default function AnimationLoading() {
  const randomAnimation = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  }, []);

  return (
    <>
      <Lottie
        animationData={randomAnimation}
        loop
        autoplay
        style={{ maxWidth: 350, width: "100%" }}
      />
    </>
  );
}
