const nutrition = {
	CARBS: {
		FIBEROUS: [
			"Strawberry",
			"spinach",
			"apples",
			"bananas",
			"apricots",
			"black berries",
			"cherries",
			"dates",
			"fruit cocktail",
			"grapes",
			"kiwi",
			"mango",
			"melons",
			"cantaloupe",
			"orange",
			"peaches",
			"pear",
			"pineapple",
			"plum",
			"raisins",
			"rasberries",
			"watermelon",
		],
		NON_FIBEROUS: [
			"Pasta",
			"Rice",
			"Cake",
			"milk",
			"yogurt",
			"ice cream",
			"bread ",
			"bagel",
			"cereal",
			"fruits",
			"potatoes",
			"chips",
			"cookies",
			"corn",
			"peas",
			"sweet potato",
			"french fries",
			"crackers",
			"popcorn",
			"tortillas",
		],
	},
	PROTEIN: [
		"Fish",
		"Chicken",
		"beef",
		"1/2 cup of nuts",
		"peanuts",
		"ham ",
		"turkey",
		"egg",
		"cheese",
		"peanut butter",
		"light tuna",
		"pork",
		"beans",
		"hummus",
	],
	VEGETABLES: [
		"carrots",
		"celery",
		"cucumbers",
		"peppers",
		"broccoli",
		"green beans",
		"lettuce",
	],
	FATS: [
		"2-3 tbsp salad dressing",
		"2-3 tbsp sour cream dip",
		"asiago cheese",
	],
};

export default nutrition;

/*
Each section of the pie chart is a section of the plate (carbs, proteins, etc)
And when you click on each section of the pie chart is takes you to a new screen that has a list of foods that fall under this category
We also want it so that the first time you open the page it picks a random food for each category

Adult male: 66 + (6.3 x weight in lbs) + (12.9 x height in inches) - (6.8 x age in years) = BMR
Adult female: 655 + (4.3 x weight in lbs) + (4.7 x height in inches) - (4.7 x age in years) = BMR

Sedentary -> Calorie-Calculation = BMR x 1.2
Lightly Active -> Calorie-Calculation = BMR x 1.375
Moderately Active -> Calorie-Calculation = BMR x 1.55
Very Active -> Calorie-Calculation = BMR x 1.725
Extra Active -> Calorie-Calculation = BMR x 1.9

50% carbs and fibres
20% protein
30% fat
*/
