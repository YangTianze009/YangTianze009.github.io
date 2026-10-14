/* Optional enhancements: all research stays visible without JavaScript. */
(() => {
  const filters = document.querySelector('.publication-filters');
  const publications = Array.from(document.querySelectorAll('.pub[data-kind]'));
  if (filters && publications.length) {
    filters.hidden = false;
    filters.addEventListener('click', event => {
      const button = event.target.closest('button[data-filter]');
      if (!button) return;
      const kind = button.dataset.filter;
      filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      publications.forEach(item => { item.hidden = kind !== 'all' && item.dataset.kind !== kind; });
      const status = document.getElementById('publication-status');
      if (status) status.textContent = `${publications.filter(item => !item.hidden).length} ${kind === 'report' ? 'report' : 'publications'} shown`;
    });
  }
  if ('IntersectionObserver' in window) {
    const links = Array.from(document.querySelectorAll('.site-nav a'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('.section-heading[id], #intro').forEach(section => observer.observe(section));
  }
})();
