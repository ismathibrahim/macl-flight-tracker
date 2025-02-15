import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

export type UIStatus =
	| "success"
	| "warning"
	| "info"
	| "error"
	| "highlight"
	| "neutral";
interface StatusBadgeProps {
	label: string;
	className?: string;
	variant: UIStatus;
	size?: "sm" | "md"
}

const styles = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: {
    variant: {
      neutral: 'border-border-neutral bg-bg-neutral-soft text-text-neutral',
      info: 'border-border-info bg-bg-info-soft text-text-info',
      success: 'border-border-success bg-bg-success-soft text-text-success',
      error: 'border-border-error bg-bg-error-soft text-text-error',
      highlight: 'border-border-highlight bg-bg-highlight-soft text-text-highlight',
      warning: 'border-border-warning bg-bg-warning-soft text-text-warning'
    }
  },
  defaultVariants: {
    variant: 'neutral'
  }
});

const StatusBadge = ({ label, className, variant }: StatusBadgeProps) => {
	return (
		<div
			className={twMerge(
				styles({
					variant
				}),
				`${className || ""}`
			)}
		>
			{label}
		</div>
	);
};

export default StatusBadge;
