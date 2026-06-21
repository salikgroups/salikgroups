"use client";

import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/use-in-view";
import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
};

export function TypewriterText({
  text,
  className,
  speed = 24,
  delay = 0,
  showCursor = true,
}: TypewriterTextProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    let intervalId = 0;
    let delayId = 0;

    const resetId = window.setTimeout(() => setLength(0), 0);

    delayId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setLength((current) => {
          if (current >= text.length) {
            window.clearInterval(intervalId);
            return current;
          }
          return current + 1;
        });
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(resetId);
      window.clearTimeout(delayId);
      window.clearInterval(intervalId);
    };
  }, [delay, reducedMotion, speed, text]);

  const output = reducedMotion ? text : text.slice(0, length);
  const isDone = reducedMotion || length >= text.length;

  return (
    <span className={cn("inline", className)}>
      {output}
      {showCursor && !isDone ? (
        <span
          className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.08em] animate-sg-cursor bg-sg-accent"
          aria-hidden
        />
      ) : null}
    </span>
  );
}

type RotatingTypewriterProps = {
  phrases: readonly string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

export function RotatingTypewriter({
  phrases,
  className,
  typingSpeed = 55,
  deletingSpeed = 30,
  pauseMs = 2000,
}: RotatingTypewriterProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex] ?? "";
  const output = reducedMotion ? currentPhrase : currentPhrase.slice(0, charIndex);

  useEffect(() => {
    if (reducedMotion || phrases.length === 0) return;

    let delay = typingSpeed;

    if (deleting) {
      delay = deletingSpeed;
    } else if (charIndex >= currentPhrase.length && currentPhrase.length > 0) {
      delay = pauseMs;
    }

    const timer = window.setTimeout(() => {
      if (!deleting && charIndex < currentPhrase.length) {
        setCharIndex((value) => value + 1);
        return;
      }

      if (!deleting && charIndex >= currentPhrase.length) {
        setDeleting(true);
        return;
      }

      if (deleting && charIndex > 0) {
        setCharIndex((value) => value - 1);
        return;
      }

      setDeleting(false);
      setPhraseIndex((value) => (value + 1) % phrases.length);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [
    charIndex,
    currentPhrase,
    deleting,
    deletingSpeed,
    pauseMs,
    phrases.length,
    reducedMotion,
    typingSpeed,
  ]);

  return (
    <span className={cn("inline text-sg-accent", className)}>
      {output}
      {!reducedMotion ? (
        <span
          className="ml-0.5 inline-block h-[0.95em] w-[3px] translate-y-[0.08em] animate-sg-cursor bg-sg-accent"
          aria-hidden
        />
      ) : null}
    </span>
  );
}
