const search = instantsearch({
  indexName: 'products_demo',
  searchClient: algoliasearch('R8B6JVP0WR', 'a3dc53b3528e1eb23f54841c2248e615'),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search for products',
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div class="hit">
          <img src="{{thumbnail}}" alt="{{name}}" />
          <div class="details">
            <h2>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h2>
            <p>£{{price}}</p>
          </div>
        </div>
      `,
    },
  }),

  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'brand',
    searchable: true,
    searchablePlaceholder: 'Search brands',
  }),

  instantsearch.widgets.refinementList({
    container: '#category-list',
    attribute: 'category',
    searchable: true,
    searchablePlaceholder: 'Search categories',
  }),
]);

search.start();
