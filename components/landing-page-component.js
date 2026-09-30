export default {
  name: 'landing-page-component',
  template: /* html */ `
    <section class="container py-5">
      <div class="hero-panel p-4 p-md-5 mb-5">
        <p class="text-primary fw-semibold mb-2">Quick help for common equipment problems</p>
        <h1 class="display-5 fw-bold mb-3">Simple fixes before you submit a ticket.</h1>
        <p class="lead mb-4">Choose your equipment type to find short, safe troubleshooting steps and learn when it is time to contact IT.</p>
        <router-link to="/items" class="btn btn-primary btn-lg"><i class="bi bi-tools me-2" aria-hidden="true"></i>View all troubleshooting guides</router-link>
      </div>
      <h2 class="h3 mb-3">What needs help?</h2>
      <div class="row g-3">
        <div class="col-12 col-md-4"><router-link :to="{ path: '/items', query: { category: 'Monitor' } }" class="category-card card h-100 text-decoration-none"><div class="card-body p-4"><i class="bi bi-display category-icon" aria-hidden="true"></i><h3 class="h5 mt-3">Monitors</h3><p class="text-body mb-0">Display, power, and picture problems.</p></div></router-link></div>
        <div class="col-12 col-md-4"><router-link :to="{ path: '/items', query: { category: 'Dock' } }" class="category-card card h-100 text-decoration-none"><div class="card-body p-4"><i class="bi bi-usb-symbol category-icon" aria-hidden="true"></i><h3 class="h5 mt-3">Docking Stations</h3><p class="text-body mb-0">Connections, monitors, and USB devices.</p></div></router-link></div>
        <div class="col-12 col-md-4"><router-link :to="{ path: '/items', query: { category: 'Laptop' } }" class="category-card card h-100 text-decoration-none"><div class="card-body p-4"><i class="bi bi-laptop category-icon" aria-hidden="true"></i><h3 class="h5 mt-3">Laptops</h3><p class="text-body mb-0">Power, charging, and startup problems.</p></div></router-link></div>
      </div>
    </section>
  `,
};
