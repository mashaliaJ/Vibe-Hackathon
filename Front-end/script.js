document.addEventListener('DOMContentLoaded', () => {
    // A simplified database of recipes.
    const recipes = [{
        title: 'Ugali & Sukuma Wiki',
        ingredients: ['maize flour', 'water', 'sukuma wiki', 'onions', 'tomatoes', 'salt'],
        url: 'recipes/ugali.html',
        image: 'https://media.istockphoto.com/id/1440695422/photo/cornmeal-mush-and-vegetable-dish-served-on-a-white-plate-on-a-wooden-table-african.jpg?s=1024x1024&w=is&k=20&c=LuUBrpLPEU2qy-nTOEJMh0rGXeOP9yyU7sZygDHiQsE='
    }, {
        title: 'Nyama Choma',
        ingredients: ['beef', 'goat meat', 'salt', 'pepper', 'lemon'],
        url: 'recipes/nyama-choma.html',
        image: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?cs=srgb&dl=pexels-gonzalo-guzman-391363-3997609.jpg&fm=jpg&_gl=1*1kszcf4*_ga*MTg4MDEwNDgxNS4xNzU1Mzc1MDY1*_ga_8JE65Q40S6*czE3NTY2NjY1NjMkbzIkZzEkdDE3NTY2NjY4MjMkajckbDAkaDA.'
    }, {
        title: 'Chapati',
        ingredients: ['wheat flour', 'water', 'oil', 'salt'],
        url: 'recipes/Chapati.html',
        image: 'https://media.istockphoto.com/id/618764348/photo/famous-asian-flat-bread-known-as-parathas.jpg?s=1024x1024&w=is&k=20&c=VBKErsVV0m8J92svxlJrQ9GB7Ce89nJ-3pwlkO4KUuw='
    }, {
        title: 'Pilau',
        ingredients: ['rice', 'beef', 'chicken', 'onions', 'pilau masala', 'garlic', 'ginger'],
        url: 'recipes/white-rice.html',
        image: 'https://images.pexels.com/photos/6646073/pexels-photo-6646073.jpeg'
    }, {
        title: 'Samosa',
        ingredients: ['wheat flour', 'meat', 'onions', 'spices', 'vegetable oil'],
        url: 'recipes/samosa.html',
        image: 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg'
    }, {
        title: 'Githeri',
        ingredients: ['maize', 'beans', 'potatoes', 'onions', 'tomatoes', 'salt'],
        url: 'recipes/githeri.html',
        image: 'https://media.istockphoto.com/id/1490554823/photo/african-githeri.jpg?s=1024x1024&w=is&k=20&c=-gVG8qgFhDZ-1jWgYEdL9ISjB_9ihQfTfpjXpykRCX8='
    }, {
        title: 'Mandazi',
        ingredients: ['wheat flour', 'sugar', 'milk', 'yeast', 'cardamom', 'oil'],
        url: 'recipes/mandazi.html',
        image: 'https://media.istockphoto.com/id/1210347205/photo/mandazi-is-a-slightly-sweet-east-african-street-food-spicy-airy-yeast-doughnut-dough-made.jpg?s=1024x1024&w=is&k=20&c=DAI4Dsa9Qu4FvdvQ99j3x7sU_NM6S--tmmGjRWvF8DI='
    }];

    const searchInput = document.getElementById('searchInput');
    const searchMessage = document.getElementById('searchMessage');
    const exploreBtn = document.getElementById('exploreBtn');

    // Function to handle the recipe search and redirection
    window.searchRecipes = () => {
        const query = searchInput.value.toLowerCase().trim();
        searchMessage.textContent = ''; // Clear previous message

        if (query === '') {
            searchMessage.textContent = 'Please enter an ingredient to search.';
            return;
        }

        const foundRecipe = recipes.find(recipe => {
            // Check if the query matches any ingredient directly
            return recipe.ingredients.some(ingredient => ingredient === query);
        });

        if (foundRecipe) {
            // Redirect the user to the recipe page
            window.location.href = foundRecipe.url;
        } else {
            // If no direct match is found, find recipes that contain the ingredient
            const filteredRecipes = recipes.filter(recipe => {
                return recipe.ingredients.some(ingredient => ingredient.includes(query));
            });

            if (filteredRecipes.length > 0) {
                // If there are partial matches, display them
                displaySearchResults(filteredRecipes);
            } else {
                searchMessage.textContent = `No recipes found containing "${query}". Try another ingredient!`;
            }
        }
    };

    // Function to display partial matches on the same page
    const displaySearchResults = (results) => {
        const searchResultsList = document.getElementById('searchResults');
        searchResultsList.innerHTML = '';
        results.forEach(recipe => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="recipe-card-small">
                    <a href="${recipe.url}">
                        <img src="${recipe.image}" alt="${recipe.title}">
                        <h4>${recipe.title}</h4>
                    </a>
                </div>
            `;
            searchResultsList.appendChild(li);
        });
        searchMessage.textContent = `Displaying recipes that contain "${searchInput.value}".`;
    };

    // Make the explore button scroll to the featured recipes section
    exploreBtn.addEventListener('click', () => {
        const featuredSection = document.getElementById('featured');
        featuredSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});