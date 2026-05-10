import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div 
      className={twMerge(
        clsx("shimmer-wrapper bg-[var(--color-brand-soft-stone)] rounded-lg"), 
        className
      )} 
    />
  );
}
