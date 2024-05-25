import * as React from "react";

// Remove the unused import if `cn` is not utilized
// import { cn } from "@/lib/utils";

const Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <footer
      ref={ref}
      {...props}
      className="flex h-16 shrink-0 items-center border-t bg-white px-6 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="flex w-full max-w-6xl items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2023 studyNet. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Privacy Policy
          </span>
          <span className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  )
);

Footer.displayName = 'Footer';

export { Footer };
