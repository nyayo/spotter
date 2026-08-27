export function PublicFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest py-12">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <span className="mb-2 block font-display text-[28px] text-secondary">AfroHot</span>
            <p className="max-w-xs text-sm text-on-surface-variant">
              © 2024 AfroHot. All rights reserved. High-end discreet companion directory.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">Company</span>
              <a className="text-on-surface-variant transition-colors hover:text-secondary" href="#">About</a>
              <a className="text-on-surface-variant transition-colors hover:text-secondary" href="#">Blog</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">Support</span>
              <a className="text-on-surface-variant transition-colors hover:text-secondary" href="#">Help</a>
              <a className="text-on-surface-variant transition-colors hover:text-secondary" href="#">Guide</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">Legal</span>
              <a className="text-on-surface-variant transition-colors hover:text-secondary" href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
