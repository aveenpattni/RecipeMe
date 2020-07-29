import axios from "axios";

export const searchRequest = async (parameters) => {
   // Filters include: ingredients#, 1 diet-label, 1 or more health label, cuisine type, meal type, dishType, cals, time, exluded food

  // const res = await axios.get("/api/search", {
  //   params: {
  //     search: parameters.q,
  //     from: parameters.from || 0,
  //     to: parameters.to
  //   }
  // });
  // return res.data;
  return {
    "from": 0,
    "to": 10,
    "count": 6075,
    "hits": [
       {
          "recipe": {
             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f6236d5981b59d2692c400c26f82b78f",
             "label": "Baked Tofu",
             "image": "https://www.edamam.com/web-img/b71/b710b321ef24d6dc06e437729fc954dd.jpg",
             "source": "Martha Stewart",
             "url": "https://www.marthastewart.com/1049665/baked-tofu",
             "shareAs": "http://www.edamam.com/recipe/baked-tofu-f6236d5981b59d2692c400c26f82b78f/tofu",
             "yield": 16,
             "dietLabels": [
                "Low-Carb"
             ],
             "healthLabels": [
                "Sugar-Conscious",
                "Vegan",
                "Vegetarian",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Alcohol-Free"
             ],
             "cautions": [
                "Gluten",
                "Wheat",
                "Sulfites"
             ],
             "ingredientLines": [
                "14-oz package drained firm tofu",
                "2 tablespoons tamari",
                "1 1/2 tablespoons extra-virgin olive oil",
                "Coarse salt and freshly ground black pepper"
             ],
             "ingredients": [
                {
                   "text": "14-oz package drained firm tofu",
                   "weight": 396.8933,
                   "image": "https://www.edamam.com/food-img/c44/c44799e4beb77540acad305ac9f9ef7e.jpg"
                },
                {
                   "text": "2 tablespoons tamari",
                   "weight": 36,
                   "image": "https://www.edamam.com/food-img/f52/f5263a232df96ad21cf2120e05c941ae.jpg"
                },
                {
                   "text": "1 1/2 tablespoons extra-virgin olive oil",
                   "weight": 20.25,
                   "image": null
                },
                {
                   "text": "Coarse salt and freshly ground black pepper",
                   "weight": 2.71886,
                   "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                   "text": "Coarse salt and freshly ground black pepper",
                   "weight": 1.35943,
                   "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                }
             ],
             "calories": 779.5175,
             "totalWeight": 454.50275,
             "totalTime": 0,
             "totalNutrients": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 779.5175,
                   "unit": "kcal"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 54.939415,
                   "unit": "g"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 7.823828,
                   "unit": "g"
                },
                "FATRN": {
                   "label": "Trans",
                   "quantity": 0,
                   "unit": "g"
                },
                "FAMS": {
                   "label": "Monounsaturated",
                   "quantity": 22.430965,
                   "unit": "g"
                },
                "FAPU": {
                   "label": "Polyunsaturated",
                   "quantity": 21.691435,
                   "unit": "g"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 19.821901,
                   "unit": "g"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 9.760482,
                   "unit": "g"
                },
                "SUGAR": {
                   "label": "Sugars",
                   "quantity": 0.62070036,
                   "unit": "g"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 66.55461,
                   "unit": "g"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "mg"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 2067.202,
                   "unit": "mg"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 2724.206,
                   "unit": "mg"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 246.92276,
                   "unit": "mg"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 1035.2266,
                   "unit": "mg"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 11.659563,
                   "unit": "mg"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 6.4022026,
                   "unit": "mg"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 803.0452,
                   "unit": "mg"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 0.3670461,
                   "unit": "µg"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 0.79378664,
                   "unit": "mg"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 0.64979964,
                   "unit": "mg"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 0.46199816,
                   "unit": "mg"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 2.9500618,
                   "unit": "mg"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 0.4410978,
                   "unit": "mg"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 121.810165,
                   "unit": "µg"
                },
                "FOLFD": {
                   "label": "Folate (food)",
                   "quantity": 121.810165,
                   "unit": "µg"
                },
                "FOLAC": {
                   "label": "Folic acid",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "µg"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 2.9200132,
                   "unit": "mg"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 14.415887,
                   "unit": "µg"
                },
                "WATER": {
                   "label": "Water",
                   "quantity": 301.08,
                   "unit": "g"
                }
             },
             "totalDaily": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 38.975876,
                   "unit": "%"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 84.52218,
                   "unit": "%"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 39.11914,
                   "unit": "%"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 6.6073003,
                   "unit": "%"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 39.041927,
                   "unit": "%"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 133.10922,
                   "unit": "%"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "%"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 86.133415,
                   "unit": "%"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 272.42062,
                   "unit": "%"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 58.79113,
                   "unit": "%"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 22.026096,
                   "unit": "%"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 64.77535,
                   "unit": "%"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 58.20184,
                   "unit": "%"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 114.72074,
                   "unit": "%"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 0.0407829,
                   "unit": "%"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 0.8819852,
                   "unit": "%"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 54.14997,
                   "unit": "%"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 35.53832,
                   "unit": "%"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 18.437887,
                   "unit": "%"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 33.9306,
                   "unit": "%"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 30.452541,
                   "unit": "%"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "%"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "%"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 19.466753,
                   "unit": "%"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 12.013239,
                   "unit": "%"
                }
             },
             "digest": [
                {
                   "label": "Fat",
                   "tag": "FAT",
                   "schemaOrgTag": "fatContent",
                   "total": 54.939415,
                   "hasRDI": true,
                   "daily": 84.52218,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Saturated",
                         "tag": "FASAT",
                         "schemaOrgTag": "saturatedFatContent",
                         "total": 7.823828,
                         "hasRDI": true,
                         "daily": 39.11914,
                         "unit": "g"
                      },
                      {
                         "label": "Trans",
                         "tag": "FATRN",
                         "schemaOrgTag": "transFatContent",
                         "total": 0,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Monounsaturated",
                         "tag": "FAMS",
                         "schemaOrgTag": null,
                         "total": 22.430965,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Polyunsaturated",
                         "tag": "FAPU",
                         "schemaOrgTag": null,
                         "total": 21.691435,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Carbs",
                   "tag": "CHOCDF",
                   "schemaOrgTag": "carbohydrateContent",
                   "total": 19.821901,
                   "hasRDI": true,
                   "daily": 6.6073003,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Carbs (net)",
                         "tag": "CHOCDF.net",
                         "schemaOrgTag": null,
                         "total": 10.061419,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Fiber",
                         "tag": "FIBTG",
                         "schemaOrgTag": "fiberContent",
                         "total": 9.760482,
                         "hasRDI": true,
                         "daily": 39.041927,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars",
                         "tag": "SUGAR",
                         "schemaOrgTag": "sugarContent",
                         "total": 0.62070036,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars, added",
                         "tag": "SUGAR.added",
                         "schemaOrgTag": null,
                         "total": 0,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Protein",
                   "tag": "PROCNT",
                   "schemaOrgTag": "proteinContent",
                   "total": 66.55461,
                   "hasRDI": true,
                   "daily": 133.10922,
                   "unit": "g"
                },
                {
                   "label": "Cholesterol",
                   "tag": "CHOLE",
                   "schemaOrgTag": "cholesterolContent",
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "mg"
                },
                {
                   "label": "Sodium",
                   "tag": "NA",
                   "schemaOrgTag": "sodiumContent",
                   "total": 2067.202,
                   "hasRDI": true,
                   "daily": 86.133415,
                   "unit": "mg"
                },
                {
                   "label": "Calcium",
                   "tag": "CA",
                   "schemaOrgTag": null,
                   "total": 2724.206,
                   "hasRDI": true,
                   "daily": 272.42062,
                   "unit": "mg"
                },
                {
                   "label": "Magnesium",
                   "tag": "MG",
                   "schemaOrgTag": null,
                   "total": 246.92276,
                   "hasRDI": true,
                   "daily": 58.79113,
                   "unit": "mg"
                },
                {
                   "label": "Potassium",
                   "tag": "K",
                   "schemaOrgTag": null,
                   "total": 1035.2266,
                   "hasRDI": true,
                   "daily": 22.026096,
                   "unit": "mg"
                },
                {
                   "label": "Iron",
                   "tag": "FE",
                   "schemaOrgTag": null,
                   "total": 11.659563,
                   "hasRDI": true,
                   "daily": 64.77535,
                   "unit": "mg"
                },
                {
                   "label": "Zinc",
                   "tag": "ZN",
                   "schemaOrgTag": null,
                   "total": 6.4022026,
                   "hasRDI": true,
                   "daily": 58.20184,
                   "unit": "mg"
                },
                {
                   "label": "Phosphorus",
                   "tag": "P",
                   "schemaOrgTag": null,
                   "total": 803.0452,
                   "hasRDI": true,
                   "daily": 114.72074,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin A",
                   "tag": "VITA_RAE",
                   "schemaOrgTag": null,
                   "total": 0.3670461,
                   "hasRDI": true,
                   "daily": 0.0407829,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin C",
                   "tag": "VITC",
                   "schemaOrgTag": null,
                   "total": 0.79378664,
                   "hasRDI": true,
                   "daily": 0.8819852,
                   "unit": "mg"
                },
                {
                   "label": "Thiamin (B1)",
                   "tag": "THIA",
                   "schemaOrgTag": null,
                   "total": 0.64979964,
                   "hasRDI": true,
                   "daily": 54.14997,
                   "unit": "mg"
                },
                {
                   "label": "Riboflavin (B2)",
                   "tag": "RIBF",
                   "schemaOrgTag": null,
                   "total": 0.46199816,
                   "hasRDI": true,
                   "daily": 35.53832,
                   "unit": "mg"
                },
                {
                   "label": "Niacin (B3)",
                   "tag": "NIA",
                   "schemaOrgTag": null,
                   "total": 2.9500618,
                   "hasRDI": true,
                   "daily": 18.437887,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin B6",
                   "tag": "VITB6A",
                   "schemaOrgTag": null,
                   "total": 0.4410978,
                   "hasRDI": true,
                   "daily": 33.9306,
                   "unit": "mg"
                },
                {
                   "label": "Folate equivalent (total)",
                   "tag": "FOLDFE",
                   "schemaOrgTag": null,
                   "total": 121.810165,
                   "hasRDI": true,
                   "daily": 30.452541,
                   "unit": "µg"
                },
                {
                   "label": "Folate (food)",
                   "tag": "FOLFD",
                   "schemaOrgTag": null,
                   "total": 121.810165,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Folic acid",
                   "tag": "FOLAC",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin B12",
                   "tag": "VITB12",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin D",
                   "tag": "VITD",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin E",
                   "tag": "TOCPHA",
                   "schemaOrgTag": null,
                   "total": 2.9200132,
                   "hasRDI": true,
                   "daily": 19.466753,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin K",
                   "tag": "VITK1",
                   "schemaOrgTag": null,
                   "total": 14.415887,
                   "hasRDI": true,
                   "daily": 12.013239,
                   "unit": "µg"
                },
                {
                   "label": "Sugar alcohols",
                   "tag": "Sugar.alcohol",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                },
                {
                   "label": "Water",
                   "tag": "WATER",
                   "schemaOrgTag": null,
                   "total": 301.08,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                }
             ]
          },
          "bookmarked": false,
          "bought": false
       },
       {
          "recipe": {
             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_77719b1deefdfc752d3dd7cc828f255f",
             "label": "Tofu With Crab Sauce",
             "image": "https://www.edamam.com/web-img/dee/dee201db843a5c408031f89842f3ea2b.jpg",
             "source": "No Recipes",
             "url": "http://norecipes.com/blog/2012/01/29/tofu-with-crab-sauce-recipe/",
             "shareAs": "http://www.edamam.com/recipe/tofu-with-crab-sauce-77719b1deefdfc752d3dd7cc828f255f/tofu",
             "yield": 4,
             "dietLabels": [
                "High-Protein",
                "Low-Carb"
             ],
             "healthLabels": [
                "Sugar-Conscious",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Alcohol-Free"
             ],
             "cautions": [
                "Gluten",
                "Wheat",
                "Sulfites"
             ],
             "ingredientLines": [
                "14 ounces silken tofu divided into 4 blocks",
                "5 ounce can crabmeat",
                "1/2 cup dashi",
                "2 teaspoons potato starch cornstarch will work as well",
                "1 teaspoon ginger grated",
                "1/2 teaspoon light soy sauce",
                "mitsuba for garnish"
             ],
             "ingredients": [
                {
                   "text": "14 ounces silken tofu divided into 4 blocks",
                   "weight": 396.8933,
                   "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
                },
                {
                   "text": "5 ounce can crabmeat",
                   "weight": 141.74762,
                   "image": "https://www.edamam.com/food-img/ac5/ac53a456f302ed1167f8bdc818161188.jpg"
                },
                {
                   "text": "1/2 cup dashi",
                   "weight": 116.5,
                   "image": "https://www.edamam.com/food-img/e07/e07d7b7a8320da9f235be9d663b7a9f4.jpg"
                },
                {
                   "text": "2 teaspoons potato starch cornstarch will work as well",
                   "weight": 5.3333335,
                   "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
                },
                {
                   "text": "1 teaspoon ginger grated",
                   "weight": 2,
                   "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                },
                {
                   "text": "1/2 teaspoon light soy sauce",
                   "weight": 2.25,
                   "image": "https://www.edamam.com/food-img/4bc/4bccc4c294a8dddb62020c62935e6fd8.jpg"
                }
             ],
             "calories": 437.31836,
             "totalWeight": 664.72424,
             "totalTime": 0,
             "totalNutrients": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 437.31836,
                   "unit": "kcal"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 18.567451,
                   "unit": "g"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 3.9519246,
                   "unit": "g"
                },
                "FATRN": {
                   "label": "Trans",
                   "quantity": 0.019844666,
                   "unit": "g"
                },
                "FAMS": {
                   "label": "Monounsaturated",
                   "quantity": 5.3285847,
                   "unit": "g"
                },
                "FAPU": {
                   "label": "Polyunsaturated",
                   "quantity": 7.6542635,
                   "unit": "g"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 12.056405,
                   "unit": "g"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 3.6757898,
                   "unit": "g"
                },
                "SUGAR": {
                   "label": "Sugars",
                   "quantity": 2.42661,
                   "unit": "g"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 60.736828,
                   "unit": "g"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 138.66019,
                   "unit": "mg"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 1109.1013,
                   "unit": "mg"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 931.3426,
                   "unit": "mg"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 208.60718,
                   "unit": "mg"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 1138.6685,
                   "unit": "mg"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 7.177812,
                   "unit": "mg"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 8.792474,
                   "unit": "mg"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 882.2787,
                   "unit": "mg"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 3.747476,
                   "unit": "µg"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 5.687958,
                   "unit": "mg"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 0.31058294,
                   "unit": "mg"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 0.47648808,
                   "unit": "mg"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 5.717009,
                   "unit": "mg"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 0.5528255,
                   "unit": "mg"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 151.24101,
                   "unit": "µg"
                },
                "FOLFD": {
                   "label": "Folate (food)",
                   "quantity": 151.24101,
                   "unit": "µg"
                },
                "FOLAC": {
                   "label": "Folic acid",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 5.5240455,
                   "unit": "µg"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "µg"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 2.8603206,
                   "unit": "mg"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 9.9526825,
                   "unit": "µg"
                },
                "WATER": {
                   "label": "Water",
                   "quantity": 566.3707,
                   "unit": "g"
                }
             },
             "totalDaily": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 21.865917,
                   "unit": "%"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 28.56531,
                   "unit": "%"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 19.759623,
                   "unit": "%"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 4.0188017,
                   "unit": "%"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 14.703159,
                   "unit": "%"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 121.473656,
                   "unit": "%"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 46.220062,
                   "unit": "%"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 46.212555,
                   "unit": "%"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 93.134254,
                   "unit": "%"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 49.668373,
                   "unit": "%"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 24.226988,
                   "unit": "%"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 39.876736,
                   "unit": "%"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 79.93158,
                   "unit": "%"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 126.03981,
                   "unit": "%"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 0.41638625,
                   "unit": "%"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 6.3199534,
                   "unit": "%"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 25.881912,
                   "unit": "%"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 36.652927,
                   "unit": "%"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 35.731308,
                   "unit": "%"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 42.52504,
                   "unit": "%"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 37.810253,
                   "unit": "%"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 230.16856,
                   "unit": "%"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "%"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 19.068804,
                   "unit": "%"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 8.293902,
                   "unit": "%"
                }
             },
             "digest": [
                {
                   "label": "Fat",
                   "tag": "FAT",
                   "schemaOrgTag": "fatContent",
                   "total": 18.567451,
                   "hasRDI": true,
                   "daily": 28.56531,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Saturated",
                         "tag": "FASAT",
                         "schemaOrgTag": "saturatedFatContent",
                         "total": 3.9519246,
                         "hasRDI": true,
                         "daily": 19.759623,
                         "unit": "g"
                      },
                      {
                         "label": "Trans",
                         "tag": "FATRN",
                         "schemaOrgTag": "transFatContent",
                         "total": 0.019844666,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Monounsaturated",
                         "tag": "FAMS",
                         "schemaOrgTag": null,
                         "total": 5.3285847,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Polyunsaturated",
                         "tag": "FAPU",
                         "schemaOrgTag": null,
                         "total": 7.6542635,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Carbs",
                   "tag": "CHOCDF",
                   "schemaOrgTag": "carbohydrateContent",
                   "total": 12.056405,
                   "hasRDI": true,
                   "daily": 4.0188017,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Carbs (net)",
                         "tag": "CHOCDF.net",
                         "schemaOrgTag": null,
                         "total": 8.380615,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Fiber",
                         "tag": "FIBTG",
                         "schemaOrgTag": "fiberContent",
                         "total": 3.6757898,
                         "hasRDI": true,
                         "daily": 14.703159,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars",
                         "tag": "SUGAR",
                         "schemaOrgTag": "sugarContent",
                         "total": 2.42661,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars, added",
                         "tag": "SUGAR.added",
                         "schemaOrgTag": null,
                         "total": 0,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Protein",
                   "tag": "PROCNT",
                   "schemaOrgTag": "proteinContent",
                   "total": 60.736828,
                   "hasRDI": true,
                   "daily": 121.473656,
                   "unit": "g"
                },
                {
                   "label": "Cholesterol",
                   "tag": "CHOLE",
                   "schemaOrgTag": "cholesterolContent",
                   "total": 138.66019,
                   "hasRDI": true,
                   "daily": 46.220062,
                   "unit": "mg"
                },
                {
                   "label": "Sodium",
                   "tag": "NA",
                   "schemaOrgTag": "sodiumContent",
                   "total": 1109.1013,
                   "hasRDI": true,
                   "daily": 46.212555,
                   "unit": "mg"
                },
                {
                   "label": "Calcium",
                   "tag": "CA",
                   "schemaOrgTag": null,
                   "total": 931.3426,
                   "hasRDI": true,
                   "daily": 93.134254,
                   "unit": "mg"
                },
                {
                   "label": "Magnesium",
                   "tag": "MG",
                   "schemaOrgTag": null,
                   "total": 208.60718,
                   "hasRDI": true,
                   "daily": 49.668373,
                   "unit": "mg"
                },
                {
                   "label": "Potassium",
                   "tag": "K",
                   "schemaOrgTag": null,
                   "total": 1138.6685,
                   "hasRDI": true,
                   "daily": 24.226988,
                   "unit": "mg"
                },
                {
                   "label": "Iron",
                   "tag": "FE",
                   "schemaOrgTag": null,
                   "total": 7.177812,
                   "hasRDI": true,
                   "daily": 39.876736,
                   "unit": "mg"
                },
                {
                   "label": "Zinc",
                   "tag": "ZN",
                   "schemaOrgTag": null,
                   "total": 8.792474,
                   "hasRDI": true,
                   "daily": 79.93158,
                   "unit": "mg"
                },
                {
                   "label": "Phosphorus",
                   "tag": "P",
                   "schemaOrgTag": null,
                   "total": 882.2787,
                   "hasRDI": true,
                   "daily": 126.03981,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin A",
                   "tag": "VITA_RAE",
                   "schemaOrgTag": null,
                   "total": 3.747476,
                   "hasRDI": true,
                   "daily": 0.41638625,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin C",
                   "tag": "VITC",
                   "schemaOrgTag": null,
                   "total": 5.687958,
                   "hasRDI": true,
                   "daily": 6.3199534,
                   "unit": "mg"
                },
                {
                   "label": "Thiamin (B1)",
                   "tag": "THIA",
                   "schemaOrgTag": null,
                   "total": 0.31058294,
                   "hasRDI": true,
                   "daily": 25.881912,
                   "unit": "mg"
                },
                {
                   "label": "Riboflavin (B2)",
                   "tag": "RIBF",
                   "schemaOrgTag": null,
                   "total": 0.47648808,
                   "hasRDI": true,
                   "daily": 36.652927,
                   "unit": "mg"
                },
                {
                   "label": "Niacin (B3)",
                   "tag": "NIA",
                   "schemaOrgTag": null,
                   "total": 5.717009,
                   "hasRDI": true,
                   "daily": 35.731308,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin B6",
                   "tag": "VITB6A",
                   "schemaOrgTag": null,
                   "total": 0.5528255,
                   "hasRDI": true,
                   "daily": 42.52504,
                   "unit": "mg"
                },
                {
                   "label": "Folate equivalent (total)",
                   "tag": "FOLDFE",
                   "schemaOrgTag": null,
                   "total": 151.24101,
                   "hasRDI": true,
                   "daily": 37.810253,
                   "unit": "µg"
                },
                {
                   "label": "Folate (food)",
                   "tag": "FOLFD",
                   "schemaOrgTag": null,
                   "total": 151.24101,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Folic acid",
                   "tag": "FOLAC",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin B12",
                   "tag": "VITB12",
                   "schemaOrgTag": null,
                   "total": 5.5240455,
                   "hasRDI": true,
                   "daily": 230.16856,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin D",
                   "tag": "VITD",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin E",
                   "tag": "TOCPHA",
                   "schemaOrgTag": null,
                   "total": 2.8603206,
                   "hasRDI": true,
                   "daily": 19.068804,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin K",
                   "tag": "VITK1",
                   "schemaOrgTag": null,
                   "total": 9.9526825,
                   "hasRDI": true,
                   "daily": 8.293902,
                   "unit": "µg"
                },
                {
                   "label": "Sugar alcohols",
                   "tag": "Sugar.alcohol",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                },
                {
                   "label": "Water",
                   "tag": "WATER",
                   "schemaOrgTag": null,
                   "total": 566.3707,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                }
             ]
          },
          "bookmarked": false,
          "bought": false
       },
       {
          "recipe": {
             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6372a76237454313df08ae22396dfb42",
             "label": "Marinated Tofu",
             "image": "https://www.edamam.com/web-img/a15/a152062192698381cdfd149e333981a2.jpg",
             "source": "Epicurious",
             "url": "https://www.epicurious.com/recipes/food/views/marinated-tofu-51181210",
             "shareAs": "http://www.edamam.com/recipe/marinated-tofu-6372a76237454313df08ae22396dfb42/tofu",
             "yield": 4,
             "dietLabels": [
                "Low-Carb"
             ],
             "healthLabels": [
                "Sugar-Conscious",
                "Vegan",
                "Vegetarian",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Alcohol-Free"
             ],
             "cautions": [
                "Gluten",
                "Wheat",
                "Sulfites"
             ],
             "ingredientLines": [
                "1 pound extra-firm tofu",
                "2 tablespoons low-sodium soy sauce",
                "1 tablespoon orange juice",
                "2 teaspoons sesame oil",
                "1 teaspoon canola oil",
                "Cooking spray"
             ],
             "ingredients": [
                {
                   "text": "1 pound extra-firm tofu",
                   "weight": 453.59238,
                   "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
                },
                {
                   "text": "2 tablespoons low-sodium soy sauce",
                   "weight": 28.4,
                   "image": "https://www.edamam.com/food-img/4bc/4bccc4c294a8dddb62020c62935e6fd8.jpg"
                },
                {
                   "text": "1 tablespoon orange juice",
                   "weight": 15.5,
                   "image": null
                },
                {
                   "text": "2 teaspoons sesame oil",
                   "weight": 9,
                   "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
                },
                {
                   "text": "1 teaspoon canola oil",
                   "weight": 4.5,
                   "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                },
                {
                   "text": "Cooking spray",
                   "weight": 6.9494963,
                   "image": null
                }
             ],
             "calories": 515.0577,
             "totalWeight": 517.9419,
             "totalTime": 0,
             "totalNutrients": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 515.0577,
                   "unit": "kcal"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 37.99956,
                   "unit": "g"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 5.8867993,
                   "unit": "g"
                },
                "FATRN": {
                   "label": "Trans",
                   "quantity": 0.017775,
                   "unit": "g"
                },
                "FAMS": {
                   "label": "Monounsaturated",
                   "quantity": 15.459264,
                   "unit": "g"
                },
                "FAPU": {
                   "label": "Polyunsaturated",
                   "quantity": 14.741195,
                   "unit": "g"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 12.303122,
                   "unit": "g"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 4.3121314,
                   "unit": "g"
                },
                "SUGAR": {
                   "label": "Sugars",
                   "quantity": 4.165554,
                   "unit": "g"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 39.845985,
                   "unit": "g"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "mg"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 1080.5183,
                   "unit": "mg"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 921.9457,
                   "unit": "mg"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 189.13017,
                   "unit": "mg"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 802.2847,
                   "unit": "mg"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 7.717237,
                   "unit": "mg"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 3.9969268,
                   "unit": "mg"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 598.6258,
                   "unit": "mg"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 1.55,
                   "unit": "µg"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 8.657185,
                   "unit": "mg"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 0.2974654,
                   "unit": "mg"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 0.3585732,
                   "unit": "mg"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 0.8438883,
                   "unit": "mg"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 0.37369058,
                   "unit": "mg"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 103.32855,
                   "unit": "µg"
                },
                "FOLFD": {
                   "label": "Folate (food)",
                   "quantity": 103.32855,
                   "unit": "µg"
                },
                "FOLAC": {
                   "label": "Folic acid",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "µg"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 1.0796993,
                   "unit": "mg"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 15.334217,
                   "unit": "µg"
                },
                "WATER": {
                   "label": "Water",
                   "quantity": 420.36063,
                   "unit": "g"
                }
             },
             "totalDaily": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 25.752884,
                   "unit": "%"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 58.46086,
                   "unit": "%"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 29.433996,
                   "unit": "%"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 4.101041,
                   "unit": "%"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 17.248526,
                   "unit": "%"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 79.69197,
                   "unit": "%"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "%"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 45.021595,
                   "unit": "%"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 92.194565,
                   "unit": "%"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 45.030994,
                   "unit": "%"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 17.069887,
                   "unit": "%"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 42.87354,
                   "unit": "%"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 36.335697,
                   "unit": "%"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 85.51797,
                   "unit": "%"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 0.17222223,
                   "unit": "%"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 9.619094,
                   "unit": "%"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 24.788786,
                   "unit": "%"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 27.582554,
                   "unit": "%"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 5.274302,
                   "unit": "%"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 28.74543,
                   "unit": "%"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 25.832138,
                   "unit": "%"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "%"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "%"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 7.1979947,
                   "unit": "%"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 12.778514,
                   "unit": "%"
                }
             },
             "digest": [
                {
                   "label": "Fat",
                   "tag": "FAT",
                   "schemaOrgTag": "fatContent",
                   "total": 37.99956,
                   "hasRDI": true,
                   "daily": 58.46086,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Saturated",
                         "tag": "FASAT",
                         "schemaOrgTag": "saturatedFatContent",
                         "total": 5.8867993,
                         "hasRDI": true,
                         "daily": 29.433996,
                         "unit": "g"
                      },
                      {
                         "label": "Trans",
                         "tag": "FATRN",
                         "schemaOrgTag": "transFatContent",
                         "total": 0.017775,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Monounsaturated",
                         "tag": "FAMS",
                         "schemaOrgTag": null,
                         "total": 15.459264,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Polyunsaturated",
                         "tag": "FAPU",
                         "schemaOrgTag": null,
                         "total": 14.741195,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Carbs",
                   "tag": "CHOCDF",
                   "schemaOrgTag": "carbohydrateContent",
                   "total": 12.303122,
                   "hasRDI": true,
                   "daily": 4.101041,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Carbs (net)",
                         "tag": "CHOCDF.net",
                         "schemaOrgTag": null,
                         "total": 7.9909906,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Fiber",
                         "tag": "FIBTG",
                         "schemaOrgTag": "fiberContent",
                         "total": 4.3121314,
                         "hasRDI": true,
                         "daily": 17.248526,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars",
                         "tag": "SUGAR",
                         "schemaOrgTag": "sugarContent",
                         "total": 4.165554,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars, added",
                         "tag": "SUGAR.added",
                         "schemaOrgTag": null,
                         "total": 0,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Protein",
                   "tag": "PROCNT",
                   "schemaOrgTag": "proteinContent",
                   "total": 39.845985,
                   "hasRDI": true,
                   "daily": 79.69197,
                   "unit": "g"
                },
                {
                   "label": "Cholesterol",
                   "tag": "CHOLE",
                   "schemaOrgTag": "cholesterolContent",
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "mg"
                },
                {
                   "label": "Sodium",
                   "tag": "NA",
                   "schemaOrgTag": "sodiumContent",
                   "total": 1080.5183,
                   "hasRDI": true,
                   "daily": 45.021595,
                   "unit": "mg"
                },
                {
                   "label": "Calcium",
                   "tag": "CA",
                   "schemaOrgTag": null,
                   "total": 921.9457,
                   "hasRDI": true,
                   "daily": 92.194565,
                   "unit": "mg"
                },
                {
                   "label": "Magnesium",
                   "tag": "MG",
                   "schemaOrgTag": null,
                   "total": 189.13017,
                   "hasRDI": true,
                   "daily": 45.030994,
                   "unit": "mg"
                },
                {
                   "label": "Potassium",
                   "tag": "K",
                   "schemaOrgTag": null,
                   "total": 802.2847,
                   "hasRDI": true,
                   "daily": 17.069887,
                   "unit": "mg"
                },
                {
                   "label": "Iron",
                   "tag": "FE",
                   "schemaOrgTag": null,
                   "total": 7.717237,
                   "hasRDI": true,
                   "daily": 42.87354,
                   "unit": "mg"
                },
                {
                   "label": "Zinc",
                   "tag": "ZN",
                   "schemaOrgTag": null,
                   "total": 3.9969268,
                   "hasRDI": true,
                   "daily": 36.335697,
                   "unit": "mg"
                },
                {
                   "label": "Phosphorus",
                   "tag": "P",
                   "schemaOrgTag": null,
                   "total": 598.6258,
                   "hasRDI": true,
                   "daily": 85.51797,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin A",
                   "tag": "VITA_RAE",
                   "schemaOrgTag": null,
                   "total": 1.55,
                   "hasRDI": true,
                   "daily": 0.17222223,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin C",
                   "tag": "VITC",
                   "schemaOrgTag": null,
                   "total": 8.657185,
                   "hasRDI": true,
                   "daily": 9.619094,
                   "unit": "mg"
                },
                {
                   "label": "Thiamin (B1)",
                   "tag": "THIA",
                   "schemaOrgTag": null,
                   "total": 0.2974654,
                   "hasRDI": true,
                   "daily": 24.788786,
                   "unit": "mg"
                },
                {
                   "label": "Riboflavin (B2)",
                   "tag": "RIBF",
                   "schemaOrgTag": null,
                   "total": 0.3585732,
                   "hasRDI": true,
                   "daily": 27.582554,
                   "unit": "mg"
                },
                {
                   "label": "Niacin (B3)",
                   "tag": "NIA",
                   "schemaOrgTag": null,
                   "total": 0.8438883,
                   "hasRDI": true,
                   "daily": 5.274302,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin B6",
                   "tag": "VITB6A",
                   "schemaOrgTag": null,
                   "total": 0.37369058,
                   "hasRDI": true,
                   "daily": 28.74543,
                   "unit": "mg"
                },
                {
                   "label": "Folate equivalent (total)",
                   "tag": "FOLDFE",
                   "schemaOrgTag": null,
                   "total": 103.32855,
                   "hasRDI": true,
                   "daily": 25.832138,
                   "unit": "µg"
                },
                {
                   "label": "Folate (food)",
                   "tag": "FOLFD",
                   "schemaOrgTag": null,
                   "total": 103.32855,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Folic acid",
                   "tag": "FOLAC",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin B12",
                   "tag": "VITB12",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin D",
                   "tag": "VITD",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin E",
                   "tag": "TOCPHA",
                   "schemaOrgTag": null,
                   "total": 1.0796993,
                   "hasRDI": true,
                   "daily": 7.1979947,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin K",
                   "tag": "VITK1",
                   "schemaOrgTag": null,
                   "total": 15.334217,
                   "hasRDI": true,
                   "daily": 12.778514,
                   "unit": "µg"
                },
                {
                   "label": "Sugar alcohols",
                   "tag": "Sugar.alcohol",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                },
                {
                   "label": "Water",
                   "tag": "WATER",
                   "schemaOrgTag": null,
                   "total": 420.36063,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                }
             ]
          },
          "bookmarked": false,
          "bought": false
       },
       {
          "recipe": {
             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5fca095dad0f25124c4fbc5d800e011b",
             "label": "Tofu Banana Mousse",
             "image": "https://www.edamam.com/web-img/7b1/7b1117396eeebef5da2d1d3e6c0ad8f0.jpg",
             "source": "Food52",
             "url": "https://food52.com/recipes/18565-tofu-banana-mousse",
             "shareAs": "http://www.edamam.com/recipe/tofu-banana-mousse-5fca095dad0f25124c4fbc5d800e011b/tofu",
             "yield": 2,
             "dietLabels": [],
             "healthLabels": [
                "Vegan",
                "Vegetarian",
                "Peanut-Free",
                "Alcohol-Free",
                "Immuno-Supportive"
             ],
             "cautions": [
                "Gluten",
                "Wheat",
                "Sulfites"
             ],
             "ingredientLines": [
                "7 ounces tofu, drained",
                "2 ripped bananas",
                "2 walnuts"
             ],
             "ingredients": [
                {
                   "text": "7 ounces tofu, drained",
                   "weight": 198.44666,
                   "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
                },
                {
                   "text": "2 ripped bananas",
                   "weight": 231.4,
                   "image": "https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg"
                },
                {
                   "text": "2 walnuts",
                   "weight": 8,
                   "image": "https://www.edamam.com/food-img/624/6243d320d94b15ebaece2634cc5b40c5.jpg"
                }
             ],
             "calories": 397.17865,
             "totalWeight": 437.84665,
             "totalTime": 108,
             "totalNutrients": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 397.17865,
                   "unit": "kcal"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 14.255646,
                   "unit": "g"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 2.4618428,
                   "unit": "g"
                },
                "FAMS": {
                   "label": "Monounsaturated",
                   "quantity": 3.2216442,
                   "unit": "g"
                },
                "FAPU": {
                   "label": "Polyunsaturated",
                   "quantity": 7.502975,
                   "unit": "g"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 57.302307,
                   "unit": "g"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 8.33842,
                   "unit": "g"
                },
                "SUGAR": {
                   "label": "Sugars",
                   "quantity": 29.6997,
                   "unit": "g"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 19.993443,
                   "unit": "g"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "mg"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 26.2876,
                   "unit": "mg"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 418.28778,
                   "unit": "mg"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 148.54326,
                   "unit": "mg"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 1157.3931,
                   "unit": "mg"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 4.0294313,
                   "unit": "mg"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 2.2414074,
                   "unit": "mg"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 318.70847,
                   "unit": "mg"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 7.022,
                   "unit": "µg"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 20.632694,
                   "unit": "mg"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 0.218082,
                   "unit": "mg"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 0.3059434,
                   "unit": "mg"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 1.8292412,
                   "unit": "mg"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 1.0330951,
                   "unit": "mg"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 91.82487,
                   "unit": "µg"
                },
                "FOLFD": {
                   "label": "Folate (food)",
                   "quantity": 91.82487,
                   "unit": "µg"
                },
                "FOLAC": {
                   "label": "Folic acid",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "µg"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 0.30724466,
                   "unit": "mg"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 6.13572,
                   "unit": "µg"
                },
                "WATER": {
                   "label": "Water",
                   "quantity": 342.24777,
                   "unit": "g"
                }
             },
             "totalDaily": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 19.858932,
                   "unit": "%"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 21.931763,
                   "unit": "%"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 12.309214,
                   "unit": "%"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 19.100769,
                   "unit": "%"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 33.35368,
                   "unit": "%"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 39.986885,
                   "unit": "%"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "%"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 1.0953166,
                   "unit": "%"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 41.828777,
                   "unit": "%"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 35.367443,
                   "unit": "%"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 24.625383,
                   "unit": "%"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 22.385729,
                   "unit": "%"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 20.37643,
                   "unit": "%"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 45.52978,
                   "unit": "%"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 0.78022224,
                   "unit": "%"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 22.925215,
                   "unit": "%"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 18.1735,
                   "unit": "%"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 23.534107,
                   "unit": "%"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 11.432757,
                   "unit": "%"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 79.46886,
                   "unit": "%"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 22.956217,
                   "unit": "%"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "%"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "%"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 2.048298,
                   "unit": "%"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 5.1131,
                   "unit": "%"
                }
             },
             "digest": [
                {
                   "label": "Fat",
                   "tag": "FAT",
                   "schemaOrgTag": "fatContent",
                   "total": 14.255646,
                   "hasRDI": true,
                   "daily": 21.931763,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Saturated",
                         "tag": "FASAT",
                         "schemaOrgTag": "saturatedFatContent",
                         "total": 2.4618428,
                         "hasRDI": true,
                         "daily": 12.309214,
                         "unit": "g"
                      },
                      {
                         "label": "Trans",
                         "tag": "FATRN",
                         "schemaOrgTag": "transFatContent",
                         "total": 0,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Monounsaturated",
                         "tag": "FAMS",
                         "schemaOrgTag": null,
                         "total": 3.2216442,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Polyunsaturated",
                         "tag": "FAPU",
                         "schemaOrgTag": null,
                         "total": 7.502975,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Carbs",
                   "tag": "CHOCDF",
                   "schemaOrgTag": "carbohydrateContent",
                   "total": 57.302307,
                   "hasRDI": true,
                   "daily": 19.100769,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Carbs (net)",
                         "tag": "CHOCDF.net",
                         "schemaOrgTag": null,
                         "total": 48.96389,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Fiber",
                         "tag": "FIBTG",
                         "schemaOrgTag": "fiberContent",
                         "total": 8.33842,
                         "hasRDI": true,
                         "daily": 33.35368,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars",
                         "tag": "SUGAR",
                         "schemaOrgTag": "sugarContent",
                         "total": 29.6997,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars, added",
                         "tag": "SUGAR.added",
                         "schemaOrgTag": null,
                         "total": 0,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Protein",
                   "tag": "PROCNT",
                   "schemaOrgTag": "proteinContent",
                   "total": 19.993443,
                   "hasRDI": true,
                   "daily": 39.986885,
                   "unit": "g"
                },
                {
                   "label": "Cholesterol",
                   "tag": "CHOLE",
                   "schemaOrgTag": "cholesterolContent",
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "mg"
                },
                {
                   "label": "Sodium",
                   "tag": "NA",
                   "schemaOrgTag": "sodiumContent",
                   "total": 26.2876,
                   "hasRDI": true,
                   "daily": 1.0953166,
                   "unit": "mg"
                },
                {
                   "label": "Calcium",
                   "tag": "CA",
                   "schemaOrgTag": null,
                   "total": 418.28778,
                   "hasRDI": true,
                   "daily": 41.828777,
                   "unit": "mg"
                },
                {
                   "label": "Magnesium",
                   "tag": "MG",
                   "schemaOrgTag": null,
                   "total": 148.54326,
                   "hasRDI": true,
                   "daily": 35.367443,
                   "unit": "mg"
                },
                {
                   "label": "Potassium",
                   "tag": "K",
                   "schemaOrgTag": null,
                   "total": 1157.3931,
                   "hasRDI": true,
                   "daily": 24.625383,
                   "unit": "mg"
                },
                {
                   "label": "Iron",
                   "tag": "FE",
                   "schemaOrgTag": null,
                   "total": 4.0294313,
                   "hasRDI": true,
                   "daily": 22.385729,
                   "unit": "mg"
                },
                {
                   "label": "Zinc",
                   "tag": "ZN",
                   "schemaOrgTag": null,
                   "total": 2.2414074,
                   "hasRDI": true,
                   "daily": 20.37643,
                   "unit": "mg"
                },
                {
                   "label": "Phosphorus",
                   "tag": "P",
                   "schemaOrgTag": null,
                   "total": 318.70847,
                   "hasRDI": true,
                   "daily": 45.52978,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin A",
                   "tag": "VITA_RAE",
                   "schemaOrgTag": null,
                   "total": 7.022,
                   "hasRDI": true,
                   "daily": 0.78022224,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin C",
                   "tag": "VITC",
                   "schemaOrgTag": null,
                   "total": 20.632694,
                   "hasRDI": true,
                   "daily": 22.925215,
                   "unit": "mg"
                },
                {
                   "label": "Thiamin (B1)",
                   "tag": "THIA",
                   "schemaOrgTag": null,
                   "total": 0.218082,
                   "hasRDI": true,
                   "daily": 18.1735,
                   "unit": "mg"
                },
                {
                   "label": "Riboflavin (B2)",
                   "tag": "RIBF",
                   "schemaOrgTag": null,
                   "total": 0.3059434,
                   "hasRDI": true,
                   "daily": 23.534107,
                   "unit": "mg"
                },
                {
                   "label": "Niacin (B3)",
                   "tag": "NIA",
                   "schemaOrgTag": null,
                   "total": 1.8292412,
                   "hasRDI": true,
                   "daily": 11.432757,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin B6",
                   "tag": "VITB6A",
                   "schemaOrgTag": null,
                   "total": 1.0330951,
                   "hasRDI": true,
                   "daily": 79.46886,
                   "unit": "mg"
                },
                {
                   "label": "Folate equivalent (total)",
                   "tag": "FOLDFE",
                   "schemaOrgTag": null,
                   "total": 91.82487,
                   "hasRDI": true,
                   "daily": 22.956217,
                   "unit": "µg"
                },
                {
                   "label": "Folate (food)",
                   "tag": "FOLFD",
                   "schemaOrgTag": null,
                   "total": 91.82487,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Folic acid",
                   "tag": "FOLAC",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin B12",
                   "tag": "VITB12",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin D",
                   "tag": "VITD",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin E",
                   "tag": "TOCPHA",
                   "schemaOrgTag": null,
                   "total": 0.30724466,
                   "hasRDI": true,
                   "daily": 2.048298,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin K",
                   "tag": "VITK1",
                   "schemaOrgTag": null,
                   "total": 6.13572,
                   "hasRDI": true,
                   "daily": 5.1131,
                   "unit": "µg"
                },
                {
                   "label": "Sugar alcohols",
                   "tag": "Sugar.alcohol",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                },
                {
                   "label": "Water",
                   "tag": "WATER",
                   "schemaOrgTag": null,
                   "total": 342.24777,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                }
             ]
          },
          "bookmarked": false,
          "bought": false
       },
       {
          "recipe": {
             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4699bcf5c4f00e0f468ac17fbaa4c26d",
             "label": "Black Pepper Tofu",
             "image": "https://www.edamam.com/web-img/7b3/7b34f65772c77c43fbfa483ea9475513.jpg",
             "source": "Lottie + Doof",
             "url": "http://www.lottieanddoof.com/2010/08/black-pepper-tofu/",
             "shareAs": "http://www.edamam.com/recipe/black-pepper-tofu-4699bcf5c4f00e0f468ac17fbaa4c26d/tofu",
             "yield": 12,
             "dietLabels": [
                "Low-Carb"
             ],
             "healthLabels": [
                "Vegetarian",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Alcohol-Free"
             ],
             "cautions": [
                "Gluten",
                "Wheat",
                "Sulfites",
                "FODMAP"
             ],
             "ingredientLines": [
                "800 g Tofu",
                "Cornflour, to dust the tofu",
                "Vegetable Oil,for frying",
                "1 stick Butter",
                "350 g shallots, peeled and thinly sliced",
                "4 x Red Chillies, thinly sliced",
                "12 x garlic cloves, minced",
                "3 tbsp chopped ginger",
                "4 tbsp Black Peppercorns.crushed",
                "3 tbsp sweet soy sauce",
                "3 tbsp Light Soy Sauce",
                "4 tsp Dark Soy Sauce",
                "2 tbsp Caster Sugar (superfine sugar)",
                "16 x spring onions, cut into segments 3cm long",
                "Jasmine Rice for serving"
             ],
             "ingredients": [
                {
                   "text": "800 g Tofu",
                   "weight": 800,
                   "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
                },
                {
                   "text": "Cornflour, to dust the tofu",
                   "weight": 17.1306,
                   "image": "https://www.edamam.com/food-img/95a/95a2e8b91ba3a3c42c36ae1a541782e8.jpg"
                },
                {
                   "text": "Vegetable Oil,for frying",
                   "weight": 25.88624,
                   "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                },
                {
                   "text": "1 stick Butter",
                   "weight": 113,
                   "image": null
                },
                {
                   "text": "350 g shallots, peeled and thinly sliced",
                   "weight": 350,
                   "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                },
                {
                   "text": "4 x Red Chillies, thinly sliced",
                   "weight": 180,
                   "image": "https://www.edamam.com/food-img/469/469213672957a242638e20c27e3e8acd.jpeg"
                },
                {
                   "text": "12 x garlic cloves, minced",
                   "weight": 36,
                   "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                   "text": "3 tbsp chopped ginger",
                   "weight": 18,
                   "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
                },
                {
                   "text": "4 tbsp Black Peppercorns.crushed",
                   "weight": 27.6,
                   "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                   "text": "3 tbsp sweet soy sauce",
                   "weight": 48,
                   "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                },
                {
                   "text": "3 tbsp Light Soy Sauce",
                   "weight": 42.6,
                   "image": "https://www.edamam.com/food-img/4bc/4bccc4c294a8dddb62020c62935e6fd8.jpg"
                },
                {
                   "text": "4 tsp Dark Soy Sauce",
                   "weight": 21.2,
                   "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                },
                {
                   "text": "2 tbsp Caster Sugar (superfine sugar)",
                   "weight": 24,
                   "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
                },
                {
                   "text": "16 x spring onions, cut into segments 3cm long",
                   "weight": 240,
                   "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                },
                {
                   "text": "Jasmine Rice for serving",
                   "weight": 3,
                   "image": "https://www.edamam.com/food-img/a5b/a5b3118bf900cc49ede19db7aa1869c7.jpg"
                }
             ],
             "calories": 3522.2437,
             "totalWeight": 2078.6602,
             "totalTime": 0,
             "totalNutrients": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 3522.2437,
                   "unit": "kcal"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 287.11102,
                   "unit": "g"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 76.06695,
                   "unit": "g"
                },
                "FATRN": {
                   "label": "Trans",
                   "quantity": 4.916994,
                   "unit": "g"
                },
                "FAMS": {
                   "label": "Monounsaturated",
                   "quantity": 148.04306,
                   "unit": "g"
                },
                "FAPU": {
                   "label": "Polyunsaturated",
                   "quantity": 46.50096,
                   "unit": "g"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 181.52663,
                   "unit": "g"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 37.38696,
                   "unit": "g"
                },
                "SUGAR": {
                   "label": "Sugars",
                   "quantity": 72.82924,
                   "unit": "g"
                },
                "SUGAR.added": {
                   "label": "Sugars, added",
                   "quantity": 23.952,
                   "unit": "g"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 99.41077,
                   "unit": "g"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 242.95,
                   "unit": "mg"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 5554.0405,
                   "unit": "mg"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 2212.4841,
                   "unit": "mg"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 621.6595,
                   "unit": "mg"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 4704.5884,
                   "unit": "mg"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 28.957561,
                   "unit": "mg"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 11.603471,
                   "unit": "mg"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 1701.2877,
                   "unit": "mg"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 988.6564,
                   "unit": "µg"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 345.512,
                   "unit": "mg"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 1.3564104,
                   "unit": "mg"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 1.4136213,
                   "unit": "mg"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 9.463811,
                   "unit": "mg"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 3.6417522,
                   "unit": "mg"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 562.9915,
                   "unit": "µg"
                },
                "FOLFD": {
                   "label": "Folate (food)",
                   "quantity": 510.57187,
                   "unit": "µg"
                },
                "FOLAC": {
                   "label": "Folic acid",
                   "quantity": 30.83508,
                   "unit": "µg"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0.1921,
                   "unit": "µg"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 1.695,
                   "unit": "µg"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 40.41315,
                   "unit": "mg"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 597.7212,
                   "unit": "µg"
                },
                "WATER": {
                   "label": "Water",
                   "quantity": 1477.8464,
                   "unit": "g"
                }
             },
             "totalDaily": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 176.11218,
                   "unit": "%"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 441.70926,
                   "unit": "%"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 380.33475,
                   "unit": "%"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 60.508877,
                   "unit": "%"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 149.54784,
                   "unit": "%"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 198.82153,
                   "unit": "%"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 80.98333,
                   "unit": "%"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 231.41835,
                   "unit": "%"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 221.24843,
                   "unit": "%"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 148.01416,
                   "unit": "%"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 100.09762,
                   "unit": "%"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 160.87534,
                   "unit": "%"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 105.4861,
                   "unit": "%"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 243.04109,
                   "unit": "%"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 109.85071,
                   "unit": "%"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 383.90222,
                   "unit": "%"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 113.034195,
                   "unit": "%"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 108.740105,
                   "unit": "%"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 59.14882,
                   "unit": "%"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 280.1348,
                   "unit": "%"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 140.74788,
                   "unit": "%"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 8.004167,
                   "unit": "%"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 11.3,
                   "unit": "%"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 269.421,
                   "unit": "%"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 498.101,
                   "unit": "%"
                }
             },
             "digest": [
                {
                   "label": "Fat",
                   "tag": "FAT",
                   "schemaOrgTag": "fatContent",
                   "total": 287.11102,
                   "hasRDI": true,
                   "daily": 441.70926,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Saturated",
                         "tag": "FASAT",
                         "schemaOrgTag": "saturatedFatContent",
                         "total": 76.06695,
                         "hasRDI": true,
                         "daily": 380.33475,
                         "unit": "g"
                      },
                      {
                         "label": "Trans",
                         "tag": "FATRN",
                         "schemaOrgTag": "transFatContent",
                         "total": 4.916994,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Monounsaturated",
                         "tag": "FAMS",
                         "schemaOrgTag": null,
                         "total": 148.04306,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Polyunsaturated",
                         "tag": "FAPU",
                         "schemaOrgTag": null,
                         "total": 46.50096,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Carbs",
                   "tag": "CHOCDF",
                   "schemaOrgTag": "carbohydrateContent",
                   "total": 181.52663,
                   "hasRDI": true,
                   "daily": 60.508877,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Carbs (net)",
                         "tag": "CHOCDF.net",
                         "schemaOrgTag": null,
                         "total": 144.13966,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Fiber",
                         "tag": "FIBTG",
                         "schemaOrgTag": "fiberContent",
                         "total": 37.38696,
                         "hasRDI": true,
                         "daily": 149.54784,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars",
                         "tag": "SUGAR",
                         "schemaOrgTag": "sugarContent",
                         "total": 72.82924,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars, added",
                         "tag": "SUGAR.added",
                         "schemaOrgTag": null,
                         "total": 23.952,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Protein",
                   "tag": "PROCNT",
                   "schemaOrgTag": "proteinContent",
                   "total": 99.41077,
                   "hasRDI": true,
                   "daily": 198.82153,
                   "unit": "g"
                },
                {
                   "label": "Cholesterol",
                   "tag": "CHOLE",
                   "schemaOrgTag": "cholesterolContent",
                   "total": 242.95,
                   "hasRDI": true,
                   "daily": 80.98333,
                   "unit": "mg"
                },
                {
                   "label": "Sodium",
                   "tag": "NA",
                   "schemaOrgTag": "sodiumContent",
                   "total": 5554.0405,
                   "hasRDI": true,
                   "daily": 231.41835,
                   "unit": "mg"
                },
                {
                   "label": "Calcium",
                   "tag": "CA",
                   "schemaOrgTag": null,
                   "total": 2212.4841,
                   "hasRDI": true,
                   "daily": 221.24843,
                   "unit": "mg"
                },
                {
                   "label": "Magnesium",
                   "tag": "MG",
                   "schemaOrgTag": null,
                   "total": 621.6595,
                   "hasRDI": true,
                   "daily": 148.01416,
                   "unit": "mg"
                },
                {
                   "label": "Potassium",
                   "tag": "K",
                   "schemaOrgTag": null,
                   "total": 4704.5884,
                   "hasRDI": true,
                   "daily": 100.09762,
                   "unit": "mg"
                },
                {
                   "label": "Iron",
                   "tag": "FE",
                   "schemaOrgTag": null,
                   "total": 28.957561,
                   "hasRDI": true,
                   "daily": 160.87534,
                   "unit": "mg"
                },
                {
                   "label": "Zinc",
                   "tag": "ZN",
                   "schemaOrgTag": null,
                   "total": 11.603471,
                   "hasRDI": true,
                   "daily": 105.4861,
                   "unit": "mg"
                },
                {
                   "label": "Phosphorus",
                   "tag": "P",
                   "schemaOrgTag": null,
                   "total": 1701.2877,
                   "hasRDI": true,
                   "daily": 243.04109,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin A",
                   "tag": "VITA_RAE",
                   "schemaOrgTag": null,
                   "total": 988.6564,
                   "hasRDI": true,
                   "daily": 109.85071,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin C",
                   "tag": "VITC",
                   "schemaOrgTag": null,
                   "total": 345.512,
                   "hasRDI": true,
                   "daily": 383.90222,
                   "unit": "mg"
                },
                {
                   "label": "Thiamin (B1)",
                   "tag": "THIA",
                   "schemaOrgTag": null,
                   "total": 1.3564104,
                   "hasRDI": true,
                   "daily": 113.034195,
                   "unit": "mg"
                },
                {
                   "label": "Riboflavin (B2)",
                   "tag": "RIBF",
                   "schemaOrgTag": null,
                   "total": 1.4136213,
                   "hasRDI": true,
                   "daily": 108.740105,
                   "unit": "mg"
                },
                {
                   "label": "Niacin (B3)",
                   "tag": "NIA",
                   "schemaOrgTag": null,
                   "total": 9.463811,
                   "hasRDI": true,
                   "daily": 59.14882,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin B6",
                   "tag": "VITB6A",
                   "schemaOrgTag": null,
                   "total": 3.6417522,
                   "hasRDI": true,
                   "daily": 280.1348,
                   "unit": "mg"
                },
                {
                   "label": "Folate equivalent (total)",
                   "tag": "FOLDFE",
                   "schemaOrgTag": null,
                   "total": 562.9915,
                   "hasRDI": true,
                   "daily": 140.74788,
                   "unit": "µg"
                },
                {
                   "label": "Folate (food)",
                   "tag": "FOLFD",
                   "schemaOrgTag": null,
                   "total": 510.57187,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Folic acid",
                   "tag": "FOLAC",
                   "schemaOrgTag": null,
                   "total": 30.83508,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin B12",
                   "tag": "VITB12",
                   "schemaOrgTag": null,
                   "total": 0.1921,
                   "hasRDI": true,
                   "daily": 8.004167,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin D",
                   "tag": "VITD",
                   "schemaOrgTag": null,
                   "total": 1.695,
                   "hasRDI": true,
                   "daily": 11.3,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin E",
                   "tag": "TOCPHA",
                   "schemaOrgTag": null,
                   "total": 40.41315,
                   "hasRDI": true,
                   "daily": 269.421,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin K",
                   "tag": "VITK1",
                   "schemaOrgTag": null,
                   "total": 597.7212,
                   "hasRDI": true,
                   "daily": 498.101,
                   "unit": "µg"
                },
                {
                   "label": "Sugar alcohols",
                   "tag": "Sugar.alcohol",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                },
                {
                   "label": "Water",
                   "tag": "WATER",
                   "schemaOrgTag": null,
                   "total": 1477.8464,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                }
             ]
          },
          "bookmarked": false,
          "bought": false
       },
       {
          "recipe": {
             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6ec33e71c01d364873319ca44420a4db",
             "label": "Crispy Pan-Fried Tofu recipes",
             "image": "https://www.edamam.com/web-img/fbb/fbb0e7c450a36325a99619cb8e8057d6",
             "source": "Food Republic",
             "url": "http://www.foodrepublic.com/recipes/crispy-pan-fried-tofu-recipe/",
             "shareAs": "http://www.edamam.com/recipe/crispy-pan-fried-tofu-recipes-6ec33e71c01d364873319ca44420a4db/tofu",
             "yield": 4,
             "dietLabels": [
                "Low-Carb"
             ],
             "healthLabels": [
                "Sugar-Conscious",
                "Vegan",
                "Vegetarian",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Alcohol-Free"
             ],
             "cautions": [
                "Gluten",
                "Wheat"
             ],
             "ingredientLines": [
                "2 to 3 tablespoons neutral oil",
                "1 to 2 pounds tofu, sliced crosswise 1/4 to 1 inch thick and patted dry",
                "salt"
             ],
             "ingredients": [
                {
                   "text": "2 to 3 tablespoons neutral oil",
                   "weight": 35,
                   "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                },
                {
                   "text": "1 to 2 pounds tofu, sliced crosswise 1/4 to 1 inch thick and patted dry",
                   "weight": 680.38855,
                   "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
                },
                {
                   "text": "salt",
                   "weight": 4.292331,
                   "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                }
             ],
             "calories": 785.672,
             "totalWeight": 719.4702,
             "totalTime": 25,
             "totalNutrients": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 785.672,
                   "unit": "kcal"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 63.372204,
                   "unit": "g"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 8.449503,
                   "unit": "g"
                },
                "FATRN": {
                   "label": "Trans",
                   "quantity": 0.13825,
                   "unit": "g"
                },
                "FAMS": {
                   "label": "Monounsaturated",
                   "quantity": 30.488163,
                   "unit": "g"
                },
                "FAPU": {
                   "label": "Polyunsaturated",
                   "quantity": 22.05587,
                   "unit": "g"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 11.498567,
                   "unit": "g"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 6.123497,
                   "unit": "g"
                },
                "SUGAR": {
                   "label": "Sugars",
                   "quantity": 4.082331,
                   "unit": "g"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 55.723824,
                   "unit": "g"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "mg"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 1663.6218,
                   "unit": "mg"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 1368.5605,
                   "unit": "mg"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 251.78458,
                   "unit": "mg"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 1007.3016,
                   "unit": "mg"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 10.967725,
                   "unit": "mg"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 5.6513066,
                   "unit": "mg"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 823.27014,
                   "unit": "mg"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 1.3607771,
                   "unit": "mg"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 0.40823314,
                   "unit": "mg"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 0.42864478,
                   "unit": "mg"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 0.68719244,
                   "unit": "mg"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 0.4830759,
                   "unit": "mg"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 129.27382,
                   "unit": "µg"
                },
                "FOLFD": {
                   "label": "Folate (food)",
                   "quantity": 129.27382,
                   "unit": "µg"
                },
                "FOLAC": {
                   "label": "Folic acid",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "µg"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 6.179039,
                   "unit": "mg"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 41.284325,
                   "unit": "µg"
                },
                "WATER": {
                   "label": "Water",
                   "quantity": 577.9982,
                   "unit": "g"
                }
             },
             "totalDaily": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 39.2836,
                   "unit": "%"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 97.4957,
                   "unit": "%"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 42.247517,
                   "unit": "%"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 3.8328555,
                   "unit": "%"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 24.493988,
                   "unit": "%"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 111.44765,
                   "unit": "%"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "%"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 69.31757,
                   "unit": "%"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 136.85606,
                   "unit": "%"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 59.94871,
                   "unit": "%"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 21.43195,
                   "unit": "%"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 60.93181,
                   "unit": "%"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 51.375515,
                   "unit": "%"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 117.61002,
                   "unit": "%"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 0,
                   "unit": "%"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 1.5119746,
                   "unit": "%"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 34.01943,
                   "unit": "%"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 32.972675,
                   "unit": "%"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 4.294953,
                   "unit": "%"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 37.159683,
                   "unit": "%"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 32.318455,
                   "unit": "%"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "%"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "%"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 41.193592,
                   "unit": "%"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 34.403603,
                   "unit": "%"
                }
             },
             "digest": [
                {
                   "label": "Fat",
                   "tag": "FAT",
                   "schemaOrgTag": "fatContent",
                   "total": 63.372204,
                   "hasRDI": true,
                   "daily": 97.4957,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Saturated",
                         "tag": "FASAT",
                         "schemaOrgTag": "saturatedFatContent",
                         "total": 8.449503,
                         "hasRDI": true,
                         "daily": 42.247517,
                         "unit": "g"
                      },
                      {
                         "label": "Trans",
                         "tag": "FATRN",
                         "schemaOrgTag": "transFatContent",
                         "total": 0.13825,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Monounsaturated",
                         "tag": "FAMS",
                         "schemaOrgTag": null,
                         "total": 30.488163,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Polyunsaturated",
                         "tag": "FAPU",
                         "schemaOrgTag": null,
                         "total": 22.05587,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Carbs",
                   "tag": "CHOCDF",
                   "schemaOrgTag": "carbohydrateContent",
                   "total": 11.498567,
                   "hasRDI": true,
                   "daily": 3.8328555,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Carbs (net)",
                         "tag": "CHOCDF.net",
                         "schemaOrgTag": null,
                         "total": 5.3750696,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Fiber",
                         "tag": "FIBTG",
                         "schemaOrgTag": "fiberContent",
                         "total": 6.123497,
                         "hasRDI": true,
                         "daily": 24.493988,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars",
                         "tag": "SUGAR",
                         "schemaOrgTag": "sugarContent",
                         "total": 4.082331,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars, added",
                         "tag": "SUGAR.added",
                         "schemaOrgTag": null,
                         "total": 0,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Protein",
                   "tag": "PROCNT",
                   "schemaOrgTag": "proteinContent",
                   "total": 55.723824,
                   "hasRDI": true,
                   "daily": 111.44765,
                   "unit": "g"
                },
                {
                   "label": "Cholesterol",
                   "tag": "CHOLE",
                   "schemaOrgTag": "cholesterolContent",
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "mg"
                },
                {
                   "label": "Sodium",
                   "tag": "NA",
                   "schemaOrgTag": "sodiumContent",
                   "total": 1663.6218,
                   "hasRDI": true,
                   "daily": 69.31757,
                   "unit": "mg"
                },
                {
                   "label": "Calcium",
                   "tag": "CA",
                   "schemaOrgTag": null,
                   "total": 1368.5605,
                   "hasRDI": true,
                   "daily": 136.85606,
                   "unit": "mg"
                },
                {
                   "label": "Magnesium",
                   "tag": "MG",
                   "schemaOrgTag": null,
                   "total": 251.78458,
                   "hasRDI": true,
                   "daily": 59.94871,
                   "unit": "mg"
                },
                {
                   "label": "Potassium",
                   "tag": "K",
                   "schemaOrgTag": null,
                   "total": 1007.3016,
                   "hasRDI": true,
                   "daily": 21.43195,
                   "unit": "mg"
                },
                {
                   "label": "Iron",
                   "tag": "FE",
                   "schemaOrgTag": null,
                   "total": 10.967725,
                   "hasRDI": true,
                   "daily": 60.93181,
                   "unit": "mg"
                },
                {
                   "label": "Zinc",
                   "tag": "ZN",
                   "schemaOrgTag": null,
                   "total": 5.6513066,
                   "hasRDI": true,
                   "daily": 51.375515,
                   "unit": "mg"
                },
                {
                   "label": "Phosphorus",
                   "tag": "P",
                   "schemaOrgTag": null,
                   "total": 823.27014,
                   "hasRDI": true,
                   "daily": 117.61002,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin A",
                   "tag": "VITA_RAE",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin C",
                   "tag": "VITC",
                   "schemaOrgTag": null,
                   "total": 1.3607771,
                   "hasRDI": true,
                   "daily": 1.5119746,
                   "unit": "mg"
                },
                {
                   "label": "Thiamin (B1)",
                   "tag": "THIA",
                   "schemaOrgTag": null,
                   "total": 0.40823314,
                   "hasRDI": true,
                   "daily": 34.01943,
                   "unit": "mg"
                },
                {
                   "label": "Riboflavin (B2)",
                   "tag": "RIBF",
                   "schemaOrgTag": null,
                   "total": 0.42864478,
                   "hasRDI": true,
                   "daily": 32.972675,
                   "unit": "mg"
                },
                {
                   "label": "Niacin (B3)",
                   "tag": "NIA",
                   "schemaOrgTag": null,
                   "total": 0.68719244,
                   "hasRDI": true,
                   "daily": 4.294953,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin B6",
                   "tag": "VITB6A",
                   "schemaOrgTag": null,
                   "total": 0.4830759,
                   "hasRDI": true,
                   "daily": 37.159683,
                   "unit": "mg"
                },
                {
                   "label": "Folate equivalent (total)",
                   "tag": "FOLDFE",
                   "schemaOrgTag": null,
                   "total": 129.27382,
                   "hasRDI": true,
                   "daily": 32.318455,
                   "unit": "µg"
                },
                {
                   "label": "Folate (food)",
                   "tag": "FOLFD",
                   "schemaOrgTag": null,
                   "total": 129.27382,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Folic acid",
                   "tag": "FOLAC",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin B12",
                   "tag": "VITB12",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin D",
                   "tag": "VITD",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin E",
                   "tag": "TOCPHA",
                   "schemaOrgTag": null,
                   "total": 6.179039,
                   "hasRDI": true,
                   "daily": 41.193592,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin K",
                   "tag": "VITK1",
                   "schemaOrgTag": null,
                   "total": 41.284325,
                   "hasRDI": true,
                   "daily": 34.403603,
                   "unit": "µg"
                },
                {
                   "label": "Sugar alcohols",
                   "tag": "Sugar.alcohol",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                },
                {
                   "label": "Water",
                   "tag": "WATER",
                   "schemaOrgTag": null,
                   "total": 577.9982,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                }
             ]
          },
          "bookmarked": false,
          "bought": false
       },
       {
          "recipe": {
             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e5781cb6a5aa8dcef86dff1a912a6e86",
             "label": "Grilled Tofu & Soba Noodles",
             "image": "https://www.edamam.com/web-img/3cf/3cf2989c81cc4e234aefb6a3f29e9eee.jpg",
             "source": "101 Cookbooks",
             "url": "http://www.101cookbooks.com/archives/grilled-tofu-soba-noodles-recipe.html",
             "shareAs": "http://www.edamam.com/recipe/grilled-tofu-soba-noodles-e5781cb6a5aa8dcef86dff1a912a6e86/tofu",
             "yield": 6,
             "dietLabels": [],
             "healthLabels": [
                "Sugar-Conscious",
                "Vegan",
                "Vegetarian",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Alcohol-Free"
             ],
             "cautions": [
                "Gluten",
                "Wheat",
                "Sulfites",
                "FODMAP"
             ],
             "ingredientLines": [
                "12 oz Soba Noodles, dried",
                "2 tsp Extra Virgin Olive Oil, plus a bit for tofu",
                "16 oz Extra firm tofu, drained & patted dry",
                "3 medium Clove Garlic",
                "scant 3/4 tsp fine grain Sea Salt",
                "3 small or medium Shallots",
                "3 small Serrano Pepper, minced",
                "1 bunch Cilantro, stems trimmed",
                "1 tsp natural cane sugar or brown sugar",
                "2 tsp fresh Lime Juice",
                "3/4 cup Extra Virgin Olive Oil"
             ],
             "ingredients": [
                {
                   "text": "12 oz Soba Noodles, dried",
                   "weight": 340.19427,
                   "image": "https://www.edamam.com/food-img/85c/85c4c240b7838a2de80c5dcab3107e97.jpg"
                },
                {
                   "text": "2 tsp Extra Virgin Olive Oil, plus a bit for tofu",
                   "weight": 9,
                   "image": null
                },
                {
                   "text": "2 tsp Extra Virgin Olive Oil, plus a bit for tofu",
                   "weight": 324,
                   "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
                },
                {
                   "text": "16 oz Extra firm tofu, drained & patted dry",
                   "weight": 453.59238,
                   "image": "https://www.edamam.com/food-img/c44/c44799e4beb77540acad305ac9f9ef7e.jpg"
                },
                {
                   "text": "3 medium Clove Garlic",
                   "weight": 9,
                   "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                   "text": "scant 3/4 tsp fine grain Sea Salt",
                   "weight": 4.5,
                   "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                   "text": "3 small or medium Shallots",
                   "weight": 180,
                   "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                },
                {
                   "text": "3 small Serrano Pepper, minced",
                   "weight": 13.725,
                   "image": "https://www.edamam.com/food-img/e3d/e3d161d6cfe5ef287053aed5461738ba.jpg"
                },
                {
                   "text": "1 bunch Cilantro, stems trimmed",
                   "weight": 40,
                   "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                },
                {
                   "text": "1 tsp natural cane sugar or brown sugar",
                   "weight": 3,
                   "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                },
                {
                   "text": "2 tsp fresh Lime Juice",
                   "weight": 10.266666,
                   "image": "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg"
                },
                {
                   "text": "3/4 cup Extra Virgin Olive Oil",
                   "weight": 162,
                   "image": null
                }
             ],
             "calories": 3709.7703,
             "totalWeight": 1546.7089,
             "totalTime": 0,
             "totalNutrients": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 3709.7703,
                   "unit": "kcal"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 226.98001,
                   "unit": "g"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 32.643394,
                   "unit": "g"
                },
                "FAMS": {
                   "label": "Monounsaturated",
                   "quantity": 138.23672,
                   "unit": "g"
                },
                "FAPU": {
                   "label": "Polyunsaturated",
                   "quantity": 47.01804,
                   "unit": "g"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 318.1071,
                   "unit": "g"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 20.966516,
                   "unit": "g"
                },
                "SUGAR": {
                   "label": "Sugars",
                   "quantity": 20.157774,
                   "unit": "g"
                },
                "SUGAR.added": {
                   "label": "Sugars, added",
                   "quantity": 2.9106,
                   "unit": "g"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 153.24236,
                   "unit": "g"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "mg"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 3592.351,
                   "unit": "mg"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 3985.6443,
                   "unit": "mg"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 760.7283,
                   "unit": "mg"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 3317.2412,
                   "unit": "mg"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 30.600748,
                   "unit": "mg"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 16.69905,
                   "unit": "mg"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 2265.9763,
                   "unit": "mg"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 141.45609,
                   "unit": "µg"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 38.80571,
                   "unit": "mg"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 2.7067866,
                   "unit": "mg"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 1.232394,
                   "unit": "mg"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 14.073095,
                   "unit": "mg"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 2.3300037,
                   "unit": "mg"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 487.70178,
                   "unit": "µg"
                },
                "FOLFD": {
                   "label": "Folate (food)",
                   "quantity": 487.70178,
                   "unit": "µg"
                },
                "FOLAC": {
                   "label": "Folic acid",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "µg"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 25.76739,
                   "unit": "mg"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 237.99216,
                   "unit": "µg"
                },
                "WATER": {
                   "label": "Water",
                   "quantity": 822.9351,
                   "unit": "g"
                }
             },
             "totalDaily": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 185.48853,
                   "unit": "%"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 349.2,
                   "unit": "%"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 163.21696,
                   "unit": "%"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 106.0357,
                   "unit": "%"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 83.866066,
                   "unit": "%"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 306.4847,
                   "unit": "%"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "%"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 149.68129,
                   "unit": "%"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 398.56442,
                   "unit": "%"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 181.12578,
                   "unit": "%"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 70.5796,
                   "unit": "%"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 170.00417,
                   "unit": "%"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 151.80956,
                   "unit": "%"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 323.7109,
                   "unit": "%"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 15.717342,
                   "unit": "%"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 43.117455,
                   "unit": "%"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 225.56555,
                   "unit": "%"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 94.79954,
                   "unit": "%"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 87.95685,
                   "unit": "%"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 179.23106,
                   "unit": "%"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 121.925446,
                   "unit": "%"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "%"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "%"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 171.7826,
                   "unit": "%"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 198.3268,
                   "unit": "%"
                }
             },
             "digest": [
                {
                   "label": "Fat",
                   "tag": "FAT",
                   "schemaOrgTag": "fatContent",
                   "total": 226.98001,
                   "hasRDI": true,
                   "daily": 349.2,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Saturated",
                         "tag": "FASAT",
                         "schemaOrgTag": "saturatedFatContent",
                         "total": 32.643394,
                         "hasRDI": true,
                         "daily": 163.21696,
                         "unit": "g"
                      },
                      {
                         "label": "Trans",
                         "tag": "FATRN",
                         "schemaOrgTag": "transFatContent",
                         "total": 0,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Monounsaturated",
                         "tag": "FAMS",
                         "schemaOrgTag": null,
                         "total": 138.23672,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Polyunsaturated",
                         "tag": "FAPU",
                         "schemaOrgTag": null,
                         "total": 47.01804,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Carbs",
                   "tag": "CHOCDF",
                   "schemaOrgTag": "carbohydrateContent",
                   "total": 318.1071,
                   "hasRDI": true,
                   "daily": 106.0357,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Carbs (net)",
                         "tag": "CHOCDF.net",
                         "schemaOrgTag": null,
                         "total": 297.14056,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Fiber",
                         "tag": "FIBTG",
                         "schemaOrgTag": "fiberContent",
                         "total": 20.966516,
                         "hasRDI": true,
                         "daily": 83.866066,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars",
                         "tag": "SUGAR",
                         "schemaOrgTag": "sugarContent",
                         "total": 20.157774,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars, added",
                         "tag": "SUGAR.added",
                         "schemaOrgTag": null,
                         "total": 2.9106,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Protein",
                   "tag": "PROCNT",
                   "schemaOrgTag": "proteinContent",
                   "total": 153.24236,
                   "hasRDI": true,
                   "daily": 306.4847,
                   "unit": "g"
                },
                {
                   "label": "Cholesterol",
                   "tag": "CHOLE",
                   "schemaOrgTag": "cholesterolContent",
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "mg"
                },
                {
                   "label": "Sodium",
                   "tag": "NA",
                   "schemaOrgTag": "sodiumContent",
                   "total": 3592.351,
                   "hasRDI": true,
                   "daily": 149.68129,
                   "unit": "mg"
                },
                {
                   "label": "Calcium",
                   "tag": "CA",
                   "schemaOrgTag": null,
                   "total": 3985.6443,
                   "hasRDI": true,
                   "daily": 398.56442,
                   "unit": "mg"
                },
                {
                   "label": "Magnesium",
                   "tag": "MG",
                   "schemaOrgTag": null,
                   "total": 760.7283,
                   "hasRDI": true,
                   "daily": 181.12578,
                   "unit": "mg"
                },
                {
                   "label": "Potassium",
                   "tag": "K",
                   "schemaOrgTag": null,
                   "total": 3317.2412,
                   "hasRDI": true,
                   "daily": 70.5796,
                   "unit": "mg"
                },
                {
                   "label": "Iron",
                   "tag": "FE",
                   "schemaOrgTag": null,
                   "total": 30.600748,
                   "hasRDI": true,
                   "daily": 170.00417,
                   "unit": "mg"
                },
                {
                   "label": "Zinc",
                   "tag": "ZN",
                   "schemaOrgTag": null,
                   "total": 16.69905,
                   "hasRDI": true,
                   "daily": 151.80956,
                   "unit": "mg"
                },
                {
                   "label": "Phosphorus",
                   "tag": "P",
                   "schemaOrgTag": null,
                   "total": 2265.9763,
                   "hasRDI": true,
                   "daily": 323.7109,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin A",
                   "tag": "VITA_RAE",
                   "schemaOrgTag": null,
                   "total": 141.45609,
                   "hasRDI": true,
                   "daily": 15.717342,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin C",
                   "tag": "VITC",
                   "schemaOrgTag": null,
                   "total": 38.80571,
                   "hasRDI": true,
                   "daily": 43.117455,
                   "unit": "mg"
                },
                {
                   "label": "Thiamin (B1)",
                   "tag": "THIA",
                   "schemaOrgTag": null,
                   "total": 2.7067866,
                   "hasRDI": true,
                   "daily": 225.56555,
                   "unit": "mg"
                },
                {
                   "label": "Riboflavin (B2)",
                   "tag": "RIBF",
                   "schemaOrgTag": null,
                   "total": 1.232394,
                   "hasRDI": true,
                   "daily": 94.79954,
                   "unit": "mg"
                },
                {
                   "label": "Niacin (B3)",
                   "tag": "NIA",
                   "schemaOrgTag": null,
                   "total": 14.073095,
                   "hasRDI": true,
                   "daily": 87.95685,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin B6",
                   "tag": "VITB6A",
                   "schemaOrgTag": null,
                   "total": 2.3300037,
                   "hasRDI": true,
                   "daily": 179.23106,
                   "unit": "mg"
                },
                {
                   "label": "Folate equivalent (total)",
                   "tag": "FOLDFE",
                   "schemaOrgTag": null,
                   "total": 487.70178,
                   "hasRDI": true,
                   "daily": 121.925446,
                   "unit": "µg"
                },
                {
                   "label": "Folate (food)",
                   "tag": "FOLFD",
                   "schemaOrgTag": null,
                   "total": 487.70178,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Folic acid",
                   "tag": "FOLAC",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin B12",
                   "tag": "VITB12",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin D",
                   "tag": "VITD",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin E",
                   "tag": "TOCPHA",
                   "schemaOrgTag": null,
                   "total": 25.76739,
                   "hasRDI": true,
                   "daily": 171.7826,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin K",
                   "tag": "VITK1",
                   "schemaOrgTag": null,
                   "total": 237.99216,
                   "hasRDI": true,
                   "daily": 198.3268,
                   "unit": "µg"
                },
                {
                   "label": "Sugar alcohols",
                   "tag": "Sugar.alcohol",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                },
                {
                   "label": "Water",
                   "tag": "WATER",
                   "schemaOrgTag": null,
                   "total": 822.9351,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                }
             ]
          },
          "bookmarked": false,
          "bought": false
       },
       {
          "recipe": {
             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_2c2308f133350be5dd59d23157e1e2ec",
             "label": "Tofu Fries",
             "image": "https://www.edamam.com/web-img/923/923a5695c21673352373147b02e69c52.jpg",
             "source": "Cooking Channel",
             "url": "http://www.cookingchanneltv.com/recipes/roger-mooking/tofu-fries.html",
             "shareAs": "http://www.edamam.com/recipe/tofu-fries-2c2308f133350be5dd59d23157e1e2ec/tofu",
             "yield": 4,
             "dietLabels": [
                "Low-Carb"
             ],
             "healthLabels": [
                "Sugar-Conscious",
                "Vegan",
                "Vegetarian",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Alcohol-Free"
             ],
             "cautions": [
                "Gluten",
                "Wheat"
             ],
             "ingredientLines": [
                "Vegetable oil, for frying",
                "1/2 cup cornstarch",
                "1 1/4 pounds extra-firm tofu, drained, cut into 3/4-inch sticks",
                "Salt"
             ],
             "ingredients": [
                {
                   "text": "Vegetable oil, for frying",
                   "weight": 8.5814705,
                   "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                },
                {
                   "text": "1/2 cup cornstarch",
                   "weight": 64,
                   "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
                },
                {
                   "text": "1 1/4 pounds extra-firm tofu, drained, cut into 3/4-inch sticks",
                   "weight": 566.9905,
                   "image": "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg"
                },
                {
                   "text": "Salt",
                   "weight": 3.7859428,
                   "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                }
             ],
             "calories": 1482.4468,
             "totalWeight": 729.99286,
             "totalTime": 25,
             "totalNutrients": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 1482.4468,
                   "unit": "kcal"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 118.89196,
                   "unit": "g"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 11.098432,
                   "unit": "g"
                },
                "FATRN": {
                   "label": "Trans",
                   "quantity": 0.73031026,
                   "unit": "g"
                },
                "FAMS": {
                   "label": "Monounsaturated",
                   "quantity": 75.50883,
                   "unit": "g"
                },
                "FAPU": {
                   "label": "Polyunsaturated",
                   "quantity": 26.46792,
                   "unit": "g"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 67.99494,
                   "unit": "g"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 5.678914,
                   "unit": "g"
                },
                "SUGAR": {
                   "label": "Sugars",
                   "quantity": 3.4019427,
                   "unit": "g"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 46.60292,
                   "unit": "g"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "mg"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 1541.1545,
                   "unit": "mg"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 1141.8395,
                   "unit": "mg"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 211.74432,
                   "unit": "mg"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 841.3688,
                   "unit": "mg"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 9.44184,
                   "unit": "mg"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 4.7482066,
                   "unit": "mg"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 694.3785,
                   "unit": "mg"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 1.1339809,
                   "unit": "mg"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 0.34019428,
                   "unit": "mg"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 0.357204,
                   "unit": "mg"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 0.5726604,
                   "unit": "mg"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 0.4025632,
                   "unit": "mg"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 107.72819,
                   "unit": "µg"
                },
                "FOLFD": {
                   "label": "Folate (food)",
                   "quantity": 107.72819,
                   "unit": "µg"
                },
                "FOLAC": {
                   "label": "Folic acid",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "µg"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 20.813887,
                   "unit": "mg"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 13.607771,
                   "unit": "µg"
                },
                "WATER": {
                   "label": "Water",
                   "quantity": 486.99078,
                   "unit": "g"
                }
             },
             "totalDaily": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 74.122345,
                   "unit": "%"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 182.9107,
                   "unit": "%"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 55.492157,
                   "unit": "%"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 22.66498,
                   "unit": "%"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 22.715656,
                   "unit": "%"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 93.20584,
                   "unit": "%"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 0,
                   "unit": "%"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 64.214775,
                   "unit": "%"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 114.183945,
                   "unit": "%"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 50.415318,
                   "unit": "%"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 17.901463,
                   "unit": "%"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 52.454666,
                   "unit": "%"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 43.165516,
                   "unit": "%"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 99.19692,
                   "unit": "%"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 0,
                   "unit": "%"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 1.2599788,
                   "unit": "%"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 28.349524,
                   "unit": "%"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 27.47723,
                   "unit": "%"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 3.5791273,
                   "unit": "%"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 30.966402,
                   "unit": "%"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 26.932047,
                   "unit": "%"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0,
                   "unit": "%"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0,
                   "unit": "%"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 138.75925,
                   "unit": "%"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 11.339809,
                   "unit": "%"
                }
             },
             "digest": [
                {
                   "label": "Fat",
                   "tag": "FAT",
                   "schemaOrgTag": "fatContent",
                   "total": 118.89196,
                   "hasRDI": true,
                   "daily": 182.9107,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Saturated",
                         "tag": "FASAT",
                         "schemaOrgTag": "saturatedFatContent",
                         "total": 11.098432,
                         "hasRDI": true,
                         "daily": 55.492157,
                         "unit": "g"
                      },
                      {
                         "label": "Trans",
                         "tag": "FATRN",
                         "schemaOrgTag": "transFatContent",
                         "total": 0.73031026,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Monounsaturated",
                         "tag": "FAMS",
                         "schemaOrgTag": null,
                         "total": 75.50883,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Polyunsaturated",
                         "tag": "FAPU",
                         "schemaOrgTag": null,
                         "total": 26.46792,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Carbs",
                   "tag": "CHOCDF",
                   "schemaOrgTag": "carbohydrateContent",
                   "total": 67.99494,
                   "hasRDI": true,
                   "daily": 22.66498,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Carbs (net)",
                         "tag": "CHOCDF.net",
                         "schemaOrgTag": null,
                         "total": 62.316025,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Fiber",
                         "tag": "FIBTG",
                         "schemaOrgTag": "fiberContent",
                         "total": 5.678914,
                         "hasRDI": true,
                         "daily": 22.715656,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars",
                         "tag": "SUGAR",
                         "schemaOrgTag": "sugarContent",
                         "total": 3.4019427,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars, added",
                         "tag": "SUGAR.added",
                         "schemaOrgTag": null,
                         "total": 0,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Protein",
                   "tag": "PROCNT",
                   "schemaOrgTag": "proteinContent",
                   "total": 46.60292,
                   "hasRDI": true,
                   "daily": 93.20584,
                   "unit": "g"
                },
                {
                   "label": "Cholesterol",
                   "tag": "CHOLE",
                   "schemaOrgTag": "cholesterolContent",
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "mg"
                },
                {
                   "label": "Sodium",
                   "tag": "NA",
                   "schemaOrgTag": "sodiumContent",
                   "total": 1541.1545,
                   "hasRDI": true,
                   "daily": 64.214775,
                   "unit": "mg"
                },
                {
                   "label": "Calcium",
                   "tag": "CA",
                   "schemaOrgTag": null,
                   "total": 1141.8395,
                   "hasRDI": true,
                   "daily": 114.183945,
                   "unit": "mg"
                },
                {
                   "label": "Magnesium",
                   "tag": "MG",
                   "schemaOrgTag": null,
                   "total": 211.74432,
                   "hasRDI": true,
                   "daily": 50.415318,
                   "unit": "mg"
                },
                {
                   "label": "Potassium",
                   "tag": "K",
                   "schemaOrgTag": null,
                   "total": 841.3688,
                   "hasRDI": true,
                   "daily": 17.901463,
                   "unit": "mg"
                },
                {
                   "label": "Iron",
                   "tag": "FE",
                   "schemaOrgTag": null,
                   "total": 9.44184,
                   "hasRDI": true,
                   "daily": 52.454666,
                   "unit": "mg"
                },
                {
                   "label": "Zinc",
                   "tag": "ZN",
                   "schemaOrgTag": null,
                   "total": 4.7482066,
                   "hasRDI": true,
                   "daily": 43.165516,
                   "unit": "mg"
                },
                {
                   "label": "Phosphorus",
                   "tag": "P",
                   "schemaOrgTag": null,
                   "total": 694.3785,
                   "hasRDI": true,
                   "daily": 99.19692,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin A",
                   "tag": "VITA_RAE",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin C",
                   "tag": "VITC",
                   "schemaOrgTag": null,
                   "total": 1.1339809,
                   "hasRDI": true,
                   "daily": 1.2599788,
                   "unit": "mg"
                },
                {
                   "label": "Thiamin (B1)",
                   "tag": "THIA",
                   "schemaOrgTag": null,
                   "total": 0.34019428,
                   "hasRDI": true,
                   "daily": 28.349524,
                   "unit": "mg"
                },
                {
                   "label": "Riboflavin (B2)",
                   "tag": "RIBF",
                   "schemaOrgTag": null,
                   "total": 0.357204,
                   "hasRDI": true,
                   "daily": 27.47723,
                   "unit": "mg"
                },
                {
                   "label": "Niacin (B3)",
                   "tag": "NIA",
                   "schemaOrgTag": null,
                   "total": 0.5726604,
                   "hasRDI": true,
                   "daily": 3.5791273,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin B6",
                   "tag": "VITB6A",
                   "schemaOrgTag": null,
                   "total": 0.4025632,
                   "hasRDI": true,
                   "daily": 30.966402,
                   "unit": "mg"
                },
                {
                   "label": "Folate equivalent (total)",
                   "tag": "FOLDFE",
                   "schemaOrgTag": null,
                   "total": 107.72819,
                   "hasRDI": true,
                   "daily": 26.932047,
                   "unit": "µg"
                },
                {
                   "label": "Folate (food)",
                   "tag": "FOLFD",
                   "schemaOrgTag": null,
                   "total": 107.72819,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Folic acid",
                   "tag": "FOLAC",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin B12",
                   "tag": "VITB12",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin D",
                   "tag": "VITD",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": true,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin E",
                   "tag": "TOCPHA",
                   "schemaOrgTag": null,
                   "total": 20.813887,
                   "hasRDI": true,
                   "daily": 138.75925,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin K",
                   "tag": "VITK1",
                   "schemaOrgTag": null,
                   "total": 13.607771,
                   "hasRDI": true,
                   "daily": 11.339809,
                   "unit": "µg"
                },
                {
                   "label": "Sugar alcohols",
                   "tag": "Sugar.alcohol",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                },
                {
                   "label": "Water",
                   "tag": "WATER",
                   "schemaOrgTag": null,
                   "total": 486.99078,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                }
             ]
          },
          "bookmarked": false,
          "bought": false
       },
       {
          "recipe": {
             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_a420ea59b1e9a0ec054859421027796b",
             "label": "Zucchini-Tofu Croquettes",
             "image": "https://www.edamam.com/web-img/52f/52f1f9255488e7554700db0102262fa2.jpg",
             "source": "Big Girls Small Kitchen",
             "url": "http://www.biggirlssmallkitchen.com/2009/06/recipe-flash-zucchini-tofu-croquettes.html",
             "shareAs": "http://www.edamam.com/recipe/zucchini-tofu-croquettes-a420ea59b1e9a0ec054859421027796b/tofu",
             "yield": 8,
             "dietLabels": [],
             "healthLabels": [
                "Sugar-Conscious",
                "Vegetarian",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Alcohol-Free"
             ],
             "cautions": [
                "Gluten",
                "Wheat",
                "Sulfites"
             ],
             "ingredientLines": [
                "1 large zucchini",
                "4 ounces firm tofu",
                "2 teaspoons salt",
                "1 tablespoon olive oil, plus more for frying",
                "1 tablespoon fresh basil, finely chopped",
                "1 egg",
                "1/2 cup bread crumbs, preferably fresh"
             ],
             "ingredients": [
                {
                   "text": "1 large zucchini",
                   "weight": 323,
                   "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
                },
                {
                   "text": "4 ounces firm tofu",
                   "weight": 113.398094,
                   "image": "https://www.edamam.com/food-img/c44/c44799e4beb77540acad305ac9f9ef7e.jpg"
                },
                {
                   "text": "2 teaspoons salt",
                   "weight": 12,
                   "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                   "text": "1 tablespoon olive oil, plus more for frying",
                   "weight": 13.5,
                   "image": null
                },
                {
                   "text": "1 tablespoon fresh basil, finely chopped",
                   "weight": 2.65,
                   "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
                },
                {
                   "text": "1 egg",
                   "weight": 43,
                   "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                },
                {
                   "text": "1/2 cup bread crumbs, preferably fresh",
                   "weight": 54,
                   "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
                }
             ],
             "calories": 614.0767,
             "totalWeight": 551.5594,
             "totalTime": 0,
             "totalNutrients": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 614.0767,
                   "unit": "kcal"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 31.390173,
                   "unit": "g"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 5.5602365,
                   "unit": "g"
                },
                "FATRN": {
                   "label": "Trans",
                   "quantity": 0.01634,
                   "unit": "g"
                },
                "FAMS": {
                   "label": "Monounsaturated",
                   "quantity": 14.19587,
                   "unit": "g"
                },
                "FAPU": {
                   "label": "Polyunsaturated",
                   "quantity": 9.239294,
                   "unit": "g"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 54.136425,
                   "unit": "g"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 8.310556,
                   "unit": "g"
                },
                "SUGAR": {
                   "label": "Sugars",
                   "quantity": 11.59005,
                   "unit": "g"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 34.495792,
                   "unit": "g"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 159.96,
                   "unit": "mg"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 1277.9631,
                   "unit": "mg"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 954.39716,
                   "unit": "mg"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 154.007,
                   "unit": "mg"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 1285.0769,
                   "unit": "mg"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 7.7384315,
                   "unit": "mg"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 4.1751266,
                   "unit": "mg"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 513.92035,
                   "unit": "mg"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 108.096,
                   "unit": "µg"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 58.520798,
                   "unit": "mg"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 0.8648,
                   "unit": "mg"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 0.83543,
                   "unit": "mg"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 5.52729,
                   "unit": "mg"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 0.77336377,
                   "unit": "mg"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 220.97745,
                   "unit": "µg"
                },
                "FOLFD": {
                   "label": "Folate (food)",
                   "quantity": 145.91745,
                   "unit": "µg"
                },
                "FOLAC": {
                   "label": "Folic acid",
                   "quantity": 44.28,
                   "unit": "µg"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0.5717,
                   "unit": "µg"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0.86,
                   "unit": "µg"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 2.84075,
                   "unit": "mg"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 36.7012,
                   "unit": "µg"
                },
                "WATER": {
                   "label": "Water",
                   "quantity": 424.0611,
                   "unit": "g"
                }
             },
             "totalDaily": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 30.703836,
                   "unit": "%"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 48.292576,
                   "unit": "%"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 27.801182,
                   "unit": "%"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 18.045475,
                   "unit": "%"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 33.242226,
                   "unit": "%"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 68.991585,
                   "unit": "%"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 53.32,
                   "unit": "%"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 53.248463,
                   "unit": "%"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 95.43972,
                   "unit": "%"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 36.668335,
                   "unit": "%"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 27.342062,
                   "unit": "%"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 42.991287,
                   "unit": "%"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 37.955692,
                   "unit": "%"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 73.4172,
                   "unit": "%"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 12.010667,
                   "unit": "%"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 65.02311,
                   "unit": "%"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 72.066666,
                   "unit": "%"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 64.26385,
                   "unit": "%"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 34.54556,
                   "unit": "%"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 59.489517,
                   "unit": "%"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 55.24436,
                   "unit": "%"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 23.820833,
                   "unit": "%"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 5.733333,
                   "unit": "%"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 18.938334,
                   "unit": "%"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 30.584333,
                   "unit": "%"
                }
             },
             "digest": [
                {
                   "label": "Fat",
                   "tag": "FAT",
                   "schemaOrgTag": "fatContent",
                   "total": 31.390173,
                   "hasRDI": true,
                   "daily": 48.292576,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Saturated",
                         "tag": "FASAT",
                         "schemaOrgTag": "saturatedFatContent",
                         "total": 5.5602365,
                         "hasRDI": true,
                         "daily": 27.801182,
                         "unit": "g"
                      },
                      {
                         "label": "Trans",
                         "tag": "FATRN",
                         "schemaOrgTag": "transFatContent",
                         "total": 0.01634,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Monounsaturated",
                         "tag": "FAMS",
                         "schemaOrgTag": null,
                         "total": 14.19587,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Polyunsaturated",
                         "tag": "FAPU",
                         "schemaOrgTag": null,
                         "total": 9.239294,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Carbs",
                   "tag": "CHOCDF",
                   "schemaOrgTag": "carbohydrateContent",
                   "total": 54.136425,
                   "hasRDI": true,
                   "daily": 18.045475,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Carbs (net)",
                         "tag": "CHOCDF.net",
                         "schemaOrgTag": null,
                         "total": 45.825867,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Fiber",
                         "tag": "FIBTG",
                         "schemaOrgTag": "fiberContent",
                         "total": 8.310556,
                         "hasRDI": true,
                         "daily": 33.242226,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars",
                         "tag": "SUGAR",
                         "schemaOrgTag": "sugarContent",
                         "total": 11.59005,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars, added",
                         "tag": "SUGAR.added",
                         "schemaOrgTag": null,
                         "total": 0,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Protein",
                   "tag": "PROCNT",
                   "schemaOrgTag": "proteinContent",
                   "total": 34.495792,
                   "hasRDI": true,
                   "daily": 68.991585,
                   "unit": "g"
                },
                {
                   "label": "Cholesterol",
                   "tag": "CHOLE",
                   "schemaOrgTag": "cholesterolContent",
                   "total": 159.96,
                   "hasRDI": true,
                   "daily": 53.32,
                   "unit": "mg"
                },
                {
                   "label": "Sodium",
                   "tag": "NA",
                   "schemaOrgTag": "sodiumContent",
                   "total": 1277.9631,
                   "hasRDI": true,
                   "daily": 53.248463,
                   "unit": "mg"
                },
                {
                   "label": "Calcium",
                   "tag": "CA",
                   "schemaOrgTag": null,
                   "total": 954.39716,
                   "hasRDI": true,
                   "daily": 95.43972,
                   "unit": "mg"
                },
                {
                   "label": "Magnesium",
                   "tag": "MG",
                   "schemaOrgTag": null,
                   "total": 154.007,
                   "hasRDI": true,
                   "daily": 36.668335,
                   "unit": "mg"
                },
                {
                   "label": "Potassium",
                   "tag": "K",
                   "schemaOrgTag": null,
                   "total": 1285.0769,
                   "hasRDI": true,
                   "daily": 27.342062,
                   "unit": "mg"
                },
                {
                   "label": "Iron",
                   "tag": "FE",
                   "schemaOrgTag": null,
                   "total": 7.7384315,
                   "hasRDI": true,
                   "daily": 42.991287,
                   "unit": "mg"
                },
                {
                   "label": "Zinc",
                   "tag": "ZN",
                   "schemaOrgTag": null,
                   "total": 4.1751266,
                   "hasRDI": true,
                   "daily": 37.955692,
                   "unit": "mg"
                },
                {
                   "label": "Phosphorus",
                   "tag": "P",
                   "schemaOrgTag": null,
                   "total": 513.92035,
                   "hasRDI": true,
                   "daily": 73.4172,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin A",
                   "tag": "VITA_RAE",
                   "schemaOrgTag": null,
                   "total": 108.096,
                   "hasRDI": true,
                   "daily": 12.010667,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin C",
                   "tag": "VITC",
                   "schemaOrgTag": null,
                   "total": 58.520798,
                   "hasRDI": true,
                   "daily": 65.02311,
                   "unit": "mg"
                },
                {
                   "label": "Thiamin (B1)",
                   "tag": "THIA",
                   "schemaOrgTag": null,
                   "total": 0.8648,
                   "hasRDI": true,
                   "daily": 72.066666,
                   "unit": "mg"
                },
                {
                   "label": "Riboflavin (B2)",
                   "tag": "RIBF",
                   "schemaOrgTag": null,
                   "total": 0.83543,
                   "hasRDI": true,
                   "daily": 64.26385,
                   "unit": "mg"
                },
                {
                   "label": "Niacin (B3)",
                   "tag": "NIA",
                   "schemaOrgTag": null,
                   "total": 5.52729,
                   "hasRDI": true,
                   "daily": 34.54556,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin B6",
                   "tag": "VITB6A",
                   "schemaOrgTag": null,
                   "total": 0.77336377,
                   "hasRDI": true,
                   "daily": 59.489517,
                   "unit": "mg"
                },
                {
                   "label": "Folate equivalent (total)",
                   "tag": "FOLDFE",
                   "schemaOrgTag": null,
                   "total": 220.97745,
                   "hasRDI": true,
                   "daily": 55.24436,
                   "unit": "µg"
                },
                {
                   "label": "Folate (food)",
                   "tag": "FOLFD",
                   "schemaOrgTag": null,
                   "total": 145.91745,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Folic acid",
                   "tag": "FOLAC",
                   "schemaOrgTag": null,
                   "total": 44.28,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin B12",
                   "tag": "VITB12",
                   "schemaOrgTag": null,
                   "total": 0.5717,
                   "hasRDI": true,
                   "daily": 23.820833,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin D",
                   "tag": "VITD",
                   "schemaOrgTag": null,
                   "total": 0.86,
                   "hasRDI": true,
                   "daily": 5.733333,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin E",
                   "tag": "TOCPHA",
                   "schemaOrgTag": null,
                   "total": 2.84075,
                   "hasRDI": true,
                   "daily": 18.938334,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin K",
                   "tag": "VITK1",
                   "schemaOrgTag": null,
                   "total": 36.7012,
                   "hasRDI": true,
                   "daily": 30.584333,
                   "unit": "µg"
                },
                {
                   "label": "Sugar alcohols",
                   "tag": "Sugar.alcohol",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                },
                {
                   "label": "Water",
                   "tag": "WATER",
                   "schemaOrgTag": null,
                   "total": 424.0611,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                }
             ]
          },
          "bookmarked": false,
          "bought": false
       },
       {
          "recipe": {
             "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_56820b5069c1673114eedaa262a77cab",
             "label": "Tofu Burgers",
             "image": "https://www.edamam.com/web-img/6ab/6ab447c32d644ed62409255a98ecb6b2.jpg",
             "source": "Cookstr",
             "url": "http://www.cookstr.com/recipes/tofu-burgers-terry-golson",
             "shareAs": "http://www.edamam.com/recipe/tofu-burgers-56820b5069c1673114eedaa262a77cab/tofu",
             "yield": 4,
             "dietLabels": [
                "Low-Carb"
             ],
             "healthLabels": [
                "Sugar-Conscious",
                "Vegetarian",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Alcohol-Free"
             ],
             "cautions": [
                "Gluten",
                "Wheat",
                "Sulfites"
             ],
             "ingredientLines": [
                "1 pound extra-firm or firm tofu",
                "1 clove garlic, peeled",
                "1 egg",
                "1½ teaspoons minced chives, fresh or frozen",
                "½ teaspoon dried oregano",
                "1 tablespoon soy sauce",
                "½ cup rolled oats",
                "1 teaspoon sesame seeds",
                "¼ teaspoon freshly ground pepper"
             ],
             "ingredients": [
                {
                   "text": "1 pound extra-firm or firm tofu",
                   "weight": 453.59238,
                   "image": "https://www.edamam.com/food-img/c44/c44799e4beb77540acad305ac9f9ef7e.jpg"
                },
                {
                   "text": "1 clove garlic, peeled",
                   "weight": 3,
                   "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                   "text": "1 egg",
                   "weight": 43,
                   "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                },
                {
                   "text": "1½ teaspoons minced chives, fresh or frozen",
                   "weight": 1.5,
                   "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
                },
                {
                   "text": "½ teaspoon dried oregano",
                   "weight": 0.5,
                   "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
                },
                {
                   "text": "1 tablespoon soy sauce",
                   "weight": 16,
                   "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                },
                {
                   "text": "½ cup rolled oats",
                   "weight": 40,
                   "image": null
                },
                {
                   "text": "1 teaspoon sesame seeds",
                   "weight": 3,
                   "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
                },
                {
                   "text": "¼ teaspoon freshly ground pepper",
                   "weight": 0.725,
                   "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                }
             ],
             "calories": 901.3337,
             "totalWeight": 561.3174,
             "totalTime": 30,
             "totalNutrients": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 901.3337,
                   "unit": "kcal"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 48.04284,
                   "unit": "g"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 7.7510767,
                   "unit": "g"
                },
                "FATRN": {
                   "label": "Trans",
                   "quantity": 0.01634,
                   "unit": "g"
                },
                "FAMS": {
                   "label": "Monounsaturated",
                   "quantity": 11.684135,
                   "unit": "g"
                },
                "FAPU": {
                   "label": "Polyunsaturated",
                   "quantity": 24.783836,
                   "unit": "g"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 50.307583,
                   "unit": "g"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 15.171049,
                   "unit": "g"
                },
                "SUGAR": {
                   "label": "Sugars",
                   "quantity": 0.88294,
                   "unit": "g"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 84.65215,
                   "unit": "g"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 159.96,
                   "unit": "mg"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 1005.7979,
                   "unit": "mg"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 3193.4526,
                   "unit": "mg"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 402.5833,
                   "unit": "mg"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 1393.5991,
                   "unit": "mg"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 15.671954,
                   "unit": "mg"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 9.393078,
                   "unit": "mg"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 1182.941,
                   "unit": "mg"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 72.69075,
                   "unit": "µg"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 2.7261848,
                   "unit": "mg"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 0.98772395,
                   "unit": "mg"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 0.7499542,
                   "unit": "mg"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 2.6374388,
                   "unit": "mg"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 0.62423474,
                   "unit": "mg"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 172.67503,
                   "unit": "µg"
                },
                "FOLFD": {
                   "label": "Folate (food)",
                   "quantity": 172.67503,
                   "unit": "µg"
                },
                "FOLAC": {
                   "label": "Folic acid",
                   "quantity": 0,
                   "unit": "µg"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 0.3827,
                   "unit": "µg"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 0.86,
                   "unit": "µg"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 0.73139,
                   "unit": "mg"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 8.465825,
                   "unit": "µg"
                },
                "WATER": {
                   "label": "Water",
                   "quantity": 368.01788,
                   "unit": "g"
                }
             },
             "totalDaily": {
                "ENERC_KCAL": {
                   "label": "Energy",
                   "quantity": 45.066685,
                   "unit": "%"
                },
                "FAT": {
                   "label": "Fat",
                   "quantity": 73.91206,
                   "unit": "%"
                },
                "FASAT": {
                   "label": "Saturated",
                   "quantity": 38.755383,
                   "unit": "%"
                },
                "CHOCDF": {
                   "label": "Carbs",
                   "quantity": 16.769194,
                   "unit": "%"
                },
                "FIBTG": {
                   "label": "Fiber",
                   "quantity": 60.684196,
                   "unit": "%"
                },
                "PROCNT": {
                   "label": "Protein",
                   "quantity": 169.3043,
                   "unit": "%"
                },
                "CHOLE": {
                   "label": "Cholesterol",
                   "quantity": 53.32,
                   "unit": "%"
                },
                "NA": {
                   "label": "Sodium",
                   "quantity": 41.90825,
                   "unit": "%"
                },
                "CA": {
                   "label": "Calcium",
                   "quantity": 319.34528,
                   "unit": "%"
                },
                "MG": {
                   "label": "Magnesium",
                   "quantity": 95.85317,
                   "unit": "%"
                },
                "K": {
                   "label": "Potassium",
                   "quantity": 29.651047,
                   "unit": "%"
                },
                "FE": {
                   "label": "Iron",
                   "quantity": 87.066414,
                   "unit": "%"
                },
                "ZN": {
                   "label": "Zinc",
                   "quantity": 85.39162,
                   "unit": "%"
                },
                "P": {
                   "label": "Phosphorus",
                   "quantity": 168.99158,
                   "unit": "%"
                },
                "VITA_RAE": {
                   "label": "Vitamin A",
                   "quantity": 8.07675,
                   "unit": "%"
                },
                "VITC": {
                   "label": "Vitamin C",
                   "quantity": 3.0290942,
                   "unit": "%"
                },
                "THIA": {
                   "label": "Thiamin (B1)",
                   "quantity": 82.310326,
                   "unit": "%"
                },
                "RIBF": {
                   "label": "Riboflavin (B2)",
                   "quantity": 57.688786,
                   "unit": "%"
                },
                "NIA": {
                   "label": "Niacin (B3)",
                   "quantity": 16.483992,
                   "unit": "%"
                },
                "VITB6A": {
                   "label": "Vitamin B6",
                   "quantity": 48.018055,
                   "unit": "%"
                },
                "FOLDFE": {
                   "label": "Folate equivalent (total)",
                   "quantity": 43.16876,
                   "unit": "%"
                },
                "VITB12": {
                   "label": "Vitamin B12",
                   "quantity": 15.945833,
                   "unit": "%"
                },
                "VITD": {
                   "label": "Vitamin D",
                   "quantity": 5.733333,
                   "unit": "%"
                },
                "TOCPHA": {
                   "label": "Vitamin E",
                   "quantity": 4.875933,
                   "unit": "%"
                },
                "VITK1": {
                   "label": "Vitamin K",
                   "quantity": 7.0548544,
                   "unit": "%"
                }
             },
             "digest": [
                {
                   "label": "Fat",
                   "tag": "FAT",
                   "schemaOrgTag": "fatContent",
                   "total": 48.04284,
                   "hasRDI": true,
                   "daily": 73.91206,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Saturated",
                         "tag": "FASAT",
                         "schemaOrgTag": "saturatedFatContent",
                         "total": 7.7510767,
                         "hasRDI": true,
                         "daily": 38.755383,
                         "unit": "g"
                      },
                      {
                         "label": "Trans",
                         "tag": "FATRN",
                         "schemaOrgTag": "transFatContent",
                         "total": 0.01634,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Monounsaturated",
                         "tag": "FAMS",
                         "schemaOrgTag": null,
                         "total": 11.684135,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Polyunsaturated",
                         "tag": "FAPU",
                         "schemaOrgTag": null,
                         "total": 24.783836,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Carbs",
                   "tag": "CHOCDF",
                   "schemaOrgTag": "carbohydrateContent",
                   "total": 50.307583,
                   "hasRDI": true,
                   "daily": 16.769194,
                   "unit": "g",
                   "sub": [
                      {
                         "label": "Carbs (net)",
                         "tag": "CHOCDF.net",
                         "schemaOrgTag": null,
                         "total": 35.13653,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Fiber",
                         "tag": "FIBTG",
                         "schemaOrgTag": "fiberContent",
                         "total": 15.171049,
                         "hasRDI": true,
                         "daily": 60.684196,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars",
                         "tag": "SUGAR",
                         "schemaOrgTag": "sugarContent",
                         "total": 0.88294,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      },
                      {
                         "label": "Sugars, added",
                         "tag": "SUGAR.added",
                         "schemaOrgTag": null,
                         "total": 0,
                         "hasRDI": false,
                         "daily": 0,
                         "unit": "g"
                      }
                   ]
                },
                {
                   "label": "Protein",
                   "tag": "PROCNT",
                   "schemaOrgTag": "proteinContent",
                   "total": 84.65215,
                   "hasRDI": true,
                   "daily": 169.3043,
                   "unit": "g"
                },
                {
                   "label": "Cholesterol",
                   "tag": "CHOLE",
                   "schemaOrgTag": "cholesterolContent",
                   "total": 159.96,
                   "hasRDI": true,
                   "daily": 53.32,
                   "unit": "mg"
                },
                {
                   "label": "Sodium",
                   "tag": "NA",
                   "schemaOrgTag": "sodiumContent",
                   "total": 1005.7979,
                   "hasRDI": true,
                   "daily": 41.90825,
                   "unit": "mg"
                },
                {
                   "label": "Calcium",
                   "tag": "CA",
                   "schemaOrgTag": null,
                   "total": 3193.4526,
                   "hasRDI": true,
                   "daily": 319.34528,
                   "unit": "mg"
                },
                {
                   "label": "Magnesium",
                   "tag": "MG",
                   "schemaOrgTag": null,
                   "total": 402.5833,
                   "hasRDI": true,
                   "daily": 95.85317,
                   "unit": "mg"
                },
                {
                   "label": "Potassium",
                   "tag": "K",
                   "schemaOrgTag": null,
                   "total": 1393.5991,
                   "hasRDI": true,
                   "daily": 29.651047,
                   "unit": "mg"
                },
                {
                   "label": "Iron",
                   "tag": "FE",
                   "schemaOrgTag": null,
                   "total": 15.671954,
                   "hasRDI": true,
                   "daily": 87.066414,
                   "unit": "mg"
                },
                {
                   "label": "Zinc",
                   "tag": "ZN",
                   "schemaOrgTag": null,
                   "total": 9.393078,
                   "hasRDI": true,
                   "daily": 85.39162,
                   "unit": "mg"
                },
                {
                   "label": "Phosphorus",
                   "tag": "P",
                   "schemaOrgTag": null,
                   "total": 1182.941,
                   "hasRDI": true,
                   "daily": 168.99158,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin A",
                   "tag": "VITA_RAE",
                   "schemaOrgTag": null,
                   "total": 72.69075,
                   "hasRDI": true,
                   "daily": 8.07675,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin C",
                   "tag": "VITC",
                   "schemaOrgTag": null,
                   "total": 2.7261848,
                   "hasRDI": true,
                   "daily": 3.0290942,
                   "unit": "mg"
                },
                {
                   "label": "Thiamin (B1)",
                   "tag": "THIA",
                   "schemaOrgTag": null,
                   "total": 0.98772395,
                   "hasRDI": true,
                   "daily": 82.310326,
                   "unit": "mg"
                },
                {
                   "label": "Riboflavin (B2)",
                   "tag": "RIBF",
                   "schemaOrgTag": null,
                   "total": 0.7499542,
                   "hasRDI": true,
                   "daily": 57.688786,
                   "unit": "mg"
                },
                {
                   "label": "Niacin (B3)",
                   "tag": "NIA",
                   "schemaOrgTag": null,
                   "total": 2.6374388,
                   "hasRDI": true,
                   "daily": 16.483992,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin B6",
                   "tag": "VITB6A",
                   "schemaOrgTag": null,
                   "total": 0.62423474,
                   "hasRDI": true,
                   "daily": 48.018055,
                   "unit": "mg"
                },
                {
                   "label": "Folate equivalent (total)",
                   "tag": "FOLDFE",
                   "schemaOrgTag": null,
                   "total": 172.67503,
                   "hasRDI": true,
                   "daily": 43.16876,
                   "unit": "µg"
                },
                {
                   "label": "Folate (food)",
                   "tag": "FOLFD",
                   "schemaOrgTag": null,
                   "total": 172.67503,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Folic acid",
                   "tag": "FOLAC",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin B12",
                   "tag": "VITB12",
                   "schemaOrgTag": null,
                   "total": 0.3827,
                   "hasRDI": true,
                   "daily": 15.945833,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin D",
                   "tag": "VITD",
                   "schemaOrgTag": null,
                   "total": 0.86,
                   "hasRDI": true,
                   "daily": 5.733333,
                   "unit": "µg"
                },
                {
                   "label": "Vitamin E",
                   "tag": "TOCPHA",
                   "schemaOrgTag": null,
                   "total": 0.73139,
                   "hasRDI": true,
                   "daily": 4.875933,
                   "unit": "mg"
                },
                {
                   "label": "Vitamin K",
                   "tag": "VITK1",
                   "schemaOrgTag": null,
                   "total": 8.465825,
                   "hasRDI": true,
                   "daily": 7.0548544,
                   "unit": "µg"
                },
                {
                   "label": "Sugar alcohols",
                   "tag": "Sugar.alcohol",
                   "schemaOrgTag": null,
                   "total": 0,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                },
                {
                   "label": "Water",
                   "tag": "WATER",
                   "schemaOrgTag": null,
                   "total": 368.01788,
                   "hasRDI": false,
                   "daily": 0,
                   "unit": "g"
                }
             ]
          },
          "bookmarked": false,
          "bought": false
       }
    ]
 }
}