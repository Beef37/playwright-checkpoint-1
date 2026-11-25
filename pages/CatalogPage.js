export class CatalogPage {
  constructor(page) {
    this.page = page;
  }

  async search(query) {
    // BEGIN
    const searchInput = this.page.getByRole('searchbox')
      .or(this.page.getByPlaceholder(/search/i))
      .or(this.page.getByLabel(/search/i))
    await searchInput.fill(query)
    // END
  }

  async selectBrand(brand) {
    // BEGIN
     await this.page.getByRole('checkbox', { name: brand, exact: true }).check()
    // END
  }

  async openProduct(name) {
    // BEGIN
    await this.page.getByRole('link', { name, exact: true }).click()
    // END
  }

  async nextPage() {
    // BEGIN
    await this.page.getByRole('link', { name: 'Next' }).first().click()
    // END
  }
}

