import { Mark } from '@/components/ui/Logo';
import styles from './PageLoader.module.css';

// Run while the initial HTML is being parsed, independently of React hydration.
// The dialog stays closed if scripting is disabled or blocked.
const startLoader = `(() => {
  const panel = document.getElementById('page-loader');
  if (!panel || !panel.showModal) return;
  panel.showModal();

  const close = () => panel.close();
  function reveal() {
    if (!panel.open || panel.hasAttribute('data-leaving')) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return close();
    panel.addEventListener('animationend', event => {
      if (event.target === panel) close();
    });
    panel.setAttribute('data-leaving', '');
    setTimeout(close, 750);
  }

  // A stalled resource must not keep an otherwise usable page covered.
  const deadline = setTimeout(reveal, 12000);
  panel.addEventListener('close', () => clearTimeout(deadline), { once: true });
  window.addEventListener('pagehide', close, { once: true });
  if (document.readyState === 'complete') reveal();
  else window.addEventListener('load', reveal, { once: true });
})();`;

export default function PageLoader() {
  return (
    <>
      <dialog id="page-loader" className={styles.panel} aria-label="Loading Seltiv" suppressHydrationWarning>
        <div className={styles.lockup} aria-hidden="true">
          <div className={styles.frame}>
            <Mark size={76} color="currentColor" />
          </div>
          <span className={styles.signature}>Seltiv Studio</span>
          <span className={styles.track} />
        </div>
      </dialog>
      <script dangerouslySetInnerHTML={{ __html: startLoader }} />
    </>
  );
}
