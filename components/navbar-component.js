export default {
  name: 'navbar-component',
  template: /* html */ `
    <nav class="navbar navbar-expand bg-white border-bottom shadow-sm px-3" aria-label="Main navigation">
      <router-link class="navbar-brand fw-bold mb-0" to="/" aria-label="ReBootIT? home">
        <i class="bi bi-arrow-clockwise me-2" aria-hidden="true"></i>ReBootIT?
      </router-link>

      <div class="ms-auto d-flex gap-2">
        <router-link class="btn btn-outline-primary btn-sm" to="/">
          <i class="bi bi-house me-1" aria-hidden="true"></i><span class="nav-label">Home</span>
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm d-flex align-items-center" to="/items">
          <i class="bi bi-tools me-1" aria-hidden="true"></i><span class="nav-label">Troubleshooting</span>
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm" to="/about">
          <i class="bi bi-info-circle me-1" aria-hidden="true"></i><span class="nav-label">About</span>
        </router-link>
      </div>
    </nav>
  `,
};
