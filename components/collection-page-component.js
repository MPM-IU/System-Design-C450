export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();
    const router = VueRouter.useRouter();
    const searchText = Vue.ref('');
    const selectedCategory = Vue.ref(String(route.query.category || 'All'));
    const categories = ['All', 'Monitor', 'Dock', 'Laptop'];

    const filteredItems = Vue.computed(() => {
      const search = searchText.value.trim().toLowerCase();
      return itemsStore.items.filter((item) => {
        const categoryMatch = selectedCategory.value === 'All' || item.category === selectedCategory.value;
        const searchableText = `${item.name} ${item.description} ${item.category} ${item.model}`.toLowerCase();
        return categoryMatch && (!search || searchableText.includes(search));
      });
    });

    const setCategory = (category) => {
      selectedCategory.value = category;
      router.replace({ path: '/items', query: category === 'All' ? {} : { category } });
    };

    const clearFilters = () => {
      searchText.value = '';
      setCategory('All');
    };

    return { itemsStore, searchText, selectedCategory, categories, filteredItems, setCategory, clearFilters };
  },
  template: /* html */ `
    <section class="container py-4 py-md-5">
      <div class="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-3">
        <div><h1 class="h2 mb-1">Troubleshooting Guides</h1><p class="text-muted mb-0">Search for a problem or choose an equipment type.</p></div>
        <span v-if="!itemsStore.isLoading && !itemsStore.error" class="badge text-bg-light border">{{ filteredItems.length }} shown</span>
      </div>
      <div class="search-panel p-3 mb-4">
        <label for="guide-search" class="form-label fw-semibold">Search by issue, category, or model</label>
        <div class="input-group mb-3"><span class="input-group-text"><i class="bi bi-search" aria-hidden="true"></i></span><input id="guide-search" v-model="searchText" type="search" class="form-control" placeholder="Example: no signal or WD19" /></div>
        <div class="d-flex flex-wrap gap-2" aria-label="Filter by equipment category">
          <button v-for="category in categories" :key="category" type="button" class="btn btn-sm" :class="selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'" :aria-pressed="selectedCategory === category" @click="setCategory(category)">{{ category === 'All' ? 'All equipment' : category === 'Dock' ? 'Docking Stations' : category + 's' }}</button>
        </div>
      </div>
      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">Loading troubleshooting guides...</div>
      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert"><i class="bi bi-exclamation-triangle me-2" aria-hidden="true"></i>{{ itemsStore.error }}</div>
      <div v-else-if="filteredItems.length === 0" class="alert alert-warning" role="status"><h2 class="h5">No guides matched your search.</h2><p>Try a different word or view all equipment.</p><button type="button" class="btn btn-outline-dark btn-sm" @click="clearFilters">Clear search and filters</button></div>
      <div v-else class="row g-3">
        <div class="col-12 col-md-6 col-lg-4" v-for="item in filteredItems" :key="item.id">
          <article class="card guide-card h-100 shadow-sm">
            <img v-if="item.imageUrl" :src="item.imageUrl" :alt="item.name" class="card-img-top collection-card-image object-fit-cover" />
            <div v-else class="collection-card-image d-flex flex-column align-items-center justify-content-center bg-body-tertiary text-secondary" role="img" :aria-label="'No image available for ' + item.name"><i class="bi bi-tools fs-1" aria-hidden="true"></i><span class="small">Troubleshooting guide</span></div>
            <div class="card-body d-flex flex-column">
              <div class="mb-2"><span class="badge text-bg-primary">{{ item.category === 'Dock' ? 'Docking Station' : item.category }}</span></div>
              <h2 class="h5 card-title">{{ item.name }}</h2>
              <p class="card-text text-muted flex-grow-1 collection-description">{{ item.description || 'No description available.' }}</p>
              <p class="small mb-3"><i class="bi bi-clock me-1" aria-hidden="true"></i><strong>Estimated time:</strong> {{ item.estimatedTime || 'Not listed' }}</p>
              <router-link :to="'/items/' + item.id" class="btn btn-outline-primary stretched-link">View steps<span class="visually-hidden"> for {{ item.name }}</span></router-link>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
};
