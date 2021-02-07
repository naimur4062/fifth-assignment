// this is for getting foods by searching
document.getElementById('search').addEventListener('click', function () {
    const food = document.getElementById('food').value;
    document.getElementById('food').value = '';
    const foodNone = document.getElementById('food-detail');
    foodNone.style.display = 'none';
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + food + '')
        .then(res => res.json())
        .then(data => displayFoods(data.meals))

    const displayFoods = foods => {
        console.log(foods)
        document.getElementById('food-area').innerHTML = '';
        const foodsArea = document.getElementById('food-area');

        foods.forEach(food => {
            console.log(food.strMeal)
            const foodDiv = document.createElement('div');
            foodDiv.className = 'food';
            const foodInfo = `
                 <div onclick="displayFoodDetail('${food.strMeal}')">
                    <img src="${food.strMealThumb}">
                    <h1> ${food.strMeal} </h1>
                 </div>
                `
            foodDiv.innerHTML = foodInfo;
            foodsArea.appendChild(foodDiv);
        });
    }
})

// this is for food's detail
const displayFoodDetail = name => {
    const foodBlock = document.getElementById('food-detail');
    foodBlock.style.display = 'block';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodInfo(data.meals[0]));
}

const renderFoodInfo = food => {
    console.log(food);
    const foodDiv = document.getElementById('food-detail');
    foodDiv.className = "ingredients"
    foodDiv.innerHTML = `
         <div>
         <img src="${food.strMealThumb}">
         <h2> ${food.strMeal} </h2>
         <h6>Ingredients</h6>
         
         <ul>
         <li>${food.strMeasure1} ${food.strIngredient1}</li>
         <li>${food.strMeasure2} ${food.strIngredient2}</li>
         <li>${food.strMeasure3} ${food.strIngredient3}</li>
         <li>${food.strMeasure4} ${food.strIngredient4}</li>
         <li>${food.strMeasure5} ${food.strIngredient5}</li>
         <li>${food.strMeasure6} ${food.strIngredient6}</li>
         <li>${food.strMeasure7} ${food.strIngredient7}</li>
         <li>${food.strMeasure8} ${food.strIngredient8}</li>
         <li>${food.strMeasure9} ${food.strIngredient9}</li>
         <li>${food.strMeasure10} ${food.strIngredient10}</li>
         </ul>
         </div>
    `
}

// Thank You