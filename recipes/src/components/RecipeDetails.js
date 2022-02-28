import React from 'react';

import Recipe from './Recipe';

const RecipeDetails = ({ recipes, user_id }) => {
    return (
        <div>
            {
                recipes.map(recipe => {
                    return (
                        <div>
                            <Recipe
                            recipe={recipe}
                            id={recipe.id}
                            key={recipe.id}
                            title={recipe.title}
                            source={recipe.source}
                            ingredients={recipe.ingredients}
                            instructions={recipe.instructions}
                            category={recipe.category}
                            userId={recipe.user_id}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
};




export default RecipeDetails;