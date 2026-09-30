export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();
    const selectedItem = Vue.computed(() => itemsStore.items.find((item) => item.id === route.params.id));
    const safetyLabel = Vue.computed(() => selectedItem.value?.safetyLevel === 'contact_it' ? 'Contact IT' : 'Safe to try');
    return { itemsStore, selectedItem, safetyLabel };
  },
  template: /* html */ `
    <section class="container py-4 py-md-5">
      <router-link to="/items" class="btn btn-link ps-0 mb-3"><i class="bi bi-arrow-left me-1" aria-hidden="true"></i>Back to troubleshooting</router-link>
      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">Loading guide...</div>
      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">{{ itemsStore.error }}</div>
      <div v-else-if="!selectedItem" class="alert alert-warning" role="alert"><h1 class="h4">Guide not found</h1><p class="mb-0">This troubleshooting guide may have moved or no longer exists.</p></div>
      <article v-else>
        <div class="detail-heading mb-4">
          <div class="d-flex flex-wrap gap-2 mb-3"><span class="badge text-bg-primary">{{ selectedItem.category === 'Dock' ? 'Docking Station' : selectedItem.category }}</span><span class="badge" :class="selectedItem.safetyLevel === 'contact_it' ? 'text-bg-danger' : 'text-bg-success'"><i class="bi me-1" :class="selectedItem.safetyLevel === 'contact_it' ? 'bi-headset' : 'bi-check-circle'" aria-hidden="true"></i>{{ safetyLabel }}</span></div>
          <h1 class="display-6 fw-bold">{{ selectedItem.name }}</h1>
          <p class="lead">{{ selectedItem.description }}</p>
          <div class="row g-3"><div class="col-12 col-md-6"><div class="info-box"><span class="small text-muted d-block">Models</span><strong>{{ selectedItem.model || 'General equipment' }}</strong></div></div><div class="col-12 col-md-6"><div class="info-box"><span class="small text-muted d-block">Estimated time</span><strong>{{ selectedItem.estimatedTime || 'Not listed' }}</strong></div></div></div>
        </div>
        <div v-if="selectedItem.warning" class="alert" :class="selectedItem.safetyLevel === 'contact_it' ? 'alert-danger' : 'alert-warning'" role="alert"><i class="bi bi-exclamation-triangle-fill me-2" aria-hidden="true"></i><strong>Before you begin:</strong> {{ selectedItem.warning }}</div>
        <section class="card shadow-sm mb-4"><div class="card-body p-4"><h2 class="h3 mb-3">Steps to try</h2><ol class="troubleshooting-steps mb-0"><li v-for="step in selectedItem.steps" :key="step">{{ step }}</li></ol><p v-if="selectedItem.steps.length === 0" class="text-muted">No steps are available for this guide.</p></div></section>
        <section class="help-panel p-4"><h2 class="h4">Still need help?</h2><p class="mb-2">If the problem continues, contact your IT support team and share the equipment model and the steps you already tried.</p><p class="mb-0"><strong>Contact IT right away</strong> if equipment is damaged, unusually hot, smoking, wet, or has a swollen battery.</p></section>
      </article>
    </section>
  `,
};
