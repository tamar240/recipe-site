import { RecipeType } from '../store/recipeSlice';
import { Box, Typography, List, ListItem, Divider, Card, CardContent, Grid2 as Grid } from '@mui/material';
import { styled } from '@mui/system';

interface RecipeDetailsProps {
  recipe: RecipeType;
}

const StyledCard = styled(Card)({
  maxWidth: 800,
  margin: '20px auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
});

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <StyledCard>
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            {recipe.title}
          </Typography>
          <Typography variant="body1" paragraph sx={{ marginBottom: 2 }}>
            <strong>Description:</strong> {recipe.description}
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            <strong>Ingredients:</strong>
          </Typography>
          <List sx={{ marginBottom: 2 }}>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <Typography variant="body1">- {ingredient}</Typography>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            <strong>Instructions:</strong>
          </Typography>
          <Typography variant="body1" paragraph sx={{ marginBottom: 2 }}>
            {recipe.instructions}
          </Typography>
        </CardContent>
      </StyledCard>

      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid >
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecipeDetails;
