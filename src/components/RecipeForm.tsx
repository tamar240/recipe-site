import React, { useContext, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button, TextField, Typography, Box, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../store/recipeSlice';
import { AppDispatch } from '../store/store';
import { UserContext } from './User';
import SuccessAlert from './SuccessAlert';

const schema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  ingredients: yup.array().of(yup.string().required('Ingredient is required')),
  instructions: yup.string().required('Instructions are required'),
}).required();

const RecipeForm: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { title: '', description: '', ingredients: [''], instructions: '', }
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'ingredients' });
  const [user] = useContext(UserContext);
  const [error, setError] = useState('');

  const onSubmit= async (data: any) => {
    if (user.id == 0)
      return alert('Please login to add a recipe');
    try {
      await dispatch(addRecipe({ newRecipe: data, user })).unwrap();
      setError('Your recipe added successfully!');
      reset();
    } 
    catch (error) {
      alert(`Error: ${error}`);
    }
  };
  return (
    <>
      <SuccessAlert error={error} setError={setError} />
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
        <Typography variant="h4" gutterBottom>Add a New Recipe</Typography>
        <TextField label="Title" fullWidth margin="normal"
          {...register('title')}
          error={!!errors.title}
          helperText={errors.title?.message}
          sx={{ mb: 2 }} />
        <TextField label="Description" fullWidth margin="normal"
          {...register('description')}
          error={!!errors.description}
          helperText={errors.description?.message}
          sx={{ mb: 2 }} />

        <Typography variant="h6" sx={{ mt: 2 }}>Ingredients</Typography>
        <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
          <TextField
            label="Ingredient 1"
            fullWidth
            {...register(`ingredients.0` as const)}
            error={!!errors.ingredients?.[0]}
            helperText={errors.ingredients?.[0]?.message}
            sx={{ mr: 2 }} />
          <IconButton onClick={() => remove(0)} color="error">
            <Remove />
          </IconButton>
        </Box>
        {fields.length > 1 && fields.slice(1).map((field, index) => (
          <Box key={field.id} display="flex" alignItems="center" sx={{ mb: 2 }}>
            <TextField label={`Ingredient ${index + 2}`} fullWidth
              {...register(`ingredients.${index + 1}` as const)}
              error={!!errors.ingredients?.[index + 1]}
              helperText={errors.ingredients?.[index + 1]?.message}
              sx={{ mr: 2 }}
            />
            <IconButton onClick={() => remove(index + 1)} color="error">
              <Remove />
            </IconButton>
          </Box>
        ))}
        <Button onClick={() => append('')} startIcon={<Add />} variant="outlined" sx={{ mb: 3 }}>
          Add Ingredient
        </Button>
        <TextField label="Instructions" fullWidth multiline rows={4} margin="normal"{...register('instructions')} error={!!errors.instructions}
          helperText={errors.instructions?.message}
          sx={{ mb: 3 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit Recipe
        </Button>
      </Box>
    </>
  );
};
export default RecipeForm;