import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, RecipeType, selectRecipes } from '../store/recipeSlice';
import { AppDispatch } from '../store/store';
import { Button, List, ListItem, ListItemText, Box } from '@mui/material';
import RecipeDetails from './RecipeDetails';
import { containerStyle, recipeListStyle, recipeDetailsStyle, buttonStyle } from './styles';

const RecipeList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const recipes = useSelector(selectRecipes);
  const [recipe, setRecipe] = useState<RecipeType | null>(null);

  const handleRecipeClick = (recipe: RecipeType) => {
    setRecipe(recipe);
  };

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <Box sx={containerStyle}>
      <Box sx={recipeListStyle}>
        <List>
          {recipes.map((recipe) => (
            <ListItem key={recipe.id}>
              <Button
                sx={buttonStyle}
                variant="outlined"
                onClick={() => handleRecipeClick(recipe)}
              >
                <ListItemText primary={recipe.title} secondary={recipe.description} />
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>

      {recipe && (
        <Box sx={recipeDetailsStyle}>
          <RecipeDetails recipe={recipe} />
        </Box>
      )}
    </Box>
  );
};

export default RecipeList;
