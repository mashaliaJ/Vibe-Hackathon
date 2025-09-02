/*
 * Wait for the entire page to load before running the script.
 * This ensures all HTML elements are available in the DOM.
 */
window.onload = function() {
  // Array of all recipes with their titles and descriptions for searching
  const recipesData = [
    {
      title: 'Ugali & Sukuma Wiki',
      description: 'A Kenyan staple dish that never goes out of style.',
      link: 'recipes/ugali.html'
    },
    {
      title: 'Nyama Choma',
      description: 'Grilled goat/beef, the ultimate Kenyan weekend vibe.',
      link: 'recipes/nyama-choma.html'
    },
    {
      title: 'Chapati',
      description: 'Soft, layered flatbread perfect with stew or tea.',
      link: 'recipes/Chapati.html'
    },
    {
      title: 'White Rice',
      description: 'Spiced rice dish with beef or chicken, a Swahili classic.',
      link: 'recipes/white-rice.html'
    },
    {
      title: 'Samosa',
      description: 'Crispy golden triangles stuffed with spiced meat or veggies.',
      link: 'recipes/samosa.html'
    },
    {
      title: 'Githeri',
      description: 'Hearty mix of maize and beans, a true Kenyan comfort food.',
      link: 'recipes/githeri.html'
    },
    {
      title: 'Mandazi',
      description: 'Sweet fried dough, perfect for breakfast or tea time.',
      link: 'recipes/mandazi.html'
    },
    {
      title: 'Chocolate Cake',
      description: 'Rich and moist cake topped with chocolate frosting.',
      link: '#categories'
    },
    {
      title: 'Cookies',
      description: 'Crunchy and sweet cookies, perfect for tea time.',
      link: '#categories'
    },
    {
      title: 'Strawberry Ice Cream',
      description: 'Refreshing ice cream made with fresh strawberries.',
      link: '#categories'
    },
    {
      title: 'Mango',
      description: 'Juicy tropical fruit loved across Kenya.',
      link: '#categories'
    },
    {
      title: 'Banana',
      description: 'Sweet and filling fruit, perfect for breakfast.',
      link: '#categories'
    },
    {
      title: 'Pineapple',
      description: 'Tangy and juicy fruit, great for juice or eating raw.',
      link: '#categories'
    },
    {
      title: 'Kachumbari',
      description: 'Fresh tomato, onion, and chili salad.',
      link: '#categories'
    },
    {
      title: 'Fruit Salad',
      description: 'Mix of fresh tropical fruits.',
      link: '#categories'
    },
    {
      title: 'Avocado Salad',
      description: 'Healthy salad made with ripe avocados.',
      link: '#categories'
    },
    {
      title: 'Lemonade',
      description: 'Refreshing lemon drink perfect for hot days.',
      link: '#categories'
    },
    {
      title: 'Mango Smoothie',
      description: 'Creamy smoothie made with ripe mangoes.',
      link: '#categories'
    },
    {
      title: 'Iced Coffee',
      description: 'Cold coffee with ice and a touch of milk.',
      link: '#categories'
    }
  ];

  /*
   * Smooth scroll functionality for the "Explore Recipes" button.
   * This provides a better user experience than an abrupt jump.
   */
  const exploreBtn = document.getElementById('exploreBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
      const recipesSection = document.getElementById('recipes');
      if (recipesSection) {
        recipesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /*
   * Search functionality for recipes.
   * This filters the recipes based on the user's input.
   */
  const searchSection = document.getElementById('search-section');
  const searchInput = document.getElementById('searchInput');
  const searchResultsUl = document.getElementById('searchResults');
  const searchMessage = document.getElementById('searchMessage');

  // Add a click event listener to the search button
  const searchButton = document.querySelector('#search-section button');
  if (searchButton) {
    searchButton.addEventListener('click', searchRecipes);
  }

  // Allow users to press "Enter" in the input field to trigger the search
  if (searchInput) {
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        searchRecipes();
      }
    });
  }

  // The main function to perform the search and display results
  function searchRecipes() {
    const query = searchInput.value.toLowerCase().trim();
    searchResultsUl.innerHTML = ''; // Clear previous results
    searchMessage.textContent = ''; // Clear previous message

    if (query === '') {
      searchMessage.textContent = 'Please enter an ingredient or recipe name to search.';
      return;
    }

    // Filter the recipesData array based on the query
    const filteredRecipes = recipesData.filter(recipe => {
      return recipe.title.toLowerCase().includes(query) ||
             recipe.description.toLowerCase().includes(query);
    });

    if (filteredRecipes.length > 0) {
      searchMessage.textContent = `Found ${filteredRecipes.length} result(s).`;
      filteredRecipes.forEach(recipe => {
        const li = document.createElement('li');
        li.innerHTML = `
          <h3>${recipe.title}</h3>
          <p>${recipe.description}</p>
          <a href="${recipe.link}" class="recipe-link">View Recipe</a>
        `;
        searchResultsUl.appendChild(li);
      });
    } else {
      searchMessage.textContent = 'No recipes found matching your search.';
    }

    // Scroll to the search section after a search is performed.
    searchSection.scrollIntoView({ behavior: 'smooth' });
  }
};
