'use client';

import { useTransform, type MotionValue } from 'framer-motion';

/**
 * Linear map of a progress motion value, clamped. Uses the function form of
 * useTransform on purpose: Framer v12 hands array-form scroll transforms of
 * opacity/transform to native ScrollTimeline, which ignores our section
 * offsets and Lenis smoothing. The function form keeps everything on the JS
 * path and in sync.
 */
export function useRange(mv: MotionValue<number>, input: [number, number], output: [number, number]) {
  return useTransform(mv, (p) => {
    const t = Math.min(1, Math.max(0, (p - input[0]) / (input[1] - input[0])));
    return output[0] + (output[1] - output[0]) * t;
  });
}

export function useRangeUnit(mv: MotionValue<number>, input: [number, number], output: [number, number], unit: string) {
  return useTransform(mv, (p) => {
    const t = Math.min(1, Math.max(0, (p - input[0]) / (input[1] - input[0])));
    return `${output[0] + (output[1] - output[0]) * t}${unit}`;
  });
}
