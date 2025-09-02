from flask import Flask, jsonify, request
from flask_cors import CORS # This is crucial for local testing

app = Flask(__name__)
CORS(app) # Enable Cross-Origin Resource Sharing

recipes_data = [
    {
      "title": "Ugali & Sukuma Wiki",
      "description": "A Kenyan staple dish that never goes out of style.",
      "link": "recipes/ugali.html"
    },
    {
      "title": "Nyama Choma",
      "description": "Grilled goat/beef, the ultimate Kenyan weekend vibe.",
      "link": "recipes/nyama-choma.html"
    },
    {
      "title": "Chapati",
      "description": "Soft, layered flatbread perfect with stew or tea.",
      "link": "recipes/Chapati.html"
    },
    {
      "title": "White Rice",
      "description": "Spiced rice dish with beef or chicken, a Swahili classic.",
      "link": "recipes/white-rice.html"
    },
    {
      "title": "Samosa",
      "description": "Crispy golden triangles stuffed with spiced meat or veggies.",
      "link": "recipes/samosa.html"
    },
    {
      "title": "Githeri",
      "description": "Hearty mix of maize and beans, a true Kenyan comfort food.",
      "link": "recipes/githeri.html"
    },
    {
      "title": "Mandazi",
      "description": "Sweet fried dough, perfect for breakfast or tea time.",
      "link": "recipes/mandazi.html"
    },
    {
      "title": "Chocolate Cake",
      "description": "Rich and moist cake topped with chocolate frosting.",
      "link": "#categories"
    },
    {
      "title": "Cookies",
      "description": "Crunchy and sweet cookies, perfect for tea time.",
      "link": "#categories"
    },
    {
      "title": "Strawberry Ice Cream",
      "description": "Refreshing ice cream made with fresh strawberries.",
      "link": "#categories"
    },
    {
      "title": "Mango",
      "description": "Juicy tropical fruit loved across Kenya.",
      "link": "#categories"
    },
    {
      "title": "Banana",
      "description": "Sweet and filling fruit, perfect for breakfast.",
      "link": "#categories"
    },
    {
      "title": "Pineapple",
      "description": "Tangy and juicy fruit, great for juice or eating raw.",
      "link": "#categories"
    },
    {
      "title": "Kachumbari",
      "description": "Fresh tomato, onion, and chili salad.",
      "link": "#categories"
    },
    {
      "title": "Fruit Salad",
      "description": "Mix of fresh tropical fruits.",
      "link": "#categories"
    },
    {
      "title": "Avocado Salad",
      "description": "Healthy salad made with ripe avocados.",
      "link": "#categories"
    },
    {
      "title": "Lemonade",
      "description": "Refreshing lemon drink perfect for hot days.",
      "link": "#categories"
    },
    {
      "title": "Mango Smoothie",
      "description": "Creamy smoothie made with ripe mangoes.",
      "link": "#categories"
    },
    {
      "title": "Iced Coffee",
      "description": "Cold coffee with ice and a touch of milk.",
      "link": "#categories"
    }
]


# Define a new endpoint to handle search requests
@app.route('/search-recipes')
def search_recipes():
    # Get the search query from the URL parameters
    query = request.args.get('query', '').lower()

    # Filter the mock database based on the query
    filtered_recipes = [
        recipe for recipe in recipes_data
        if query in recipe['title'].lower() or query in recipe['description'].lower()
    ]

    # Return the filtered data as a JSON response
    return jsonify(filtered_recipes)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
