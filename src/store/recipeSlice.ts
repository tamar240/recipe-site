import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';
import { UserType } from '../components/User';

export type RecipeType = {
    id: number;
    title: string;
    description: string;
    authorId: number;
    ingredients: string[];
    instructions: string;
};

interface RecipeState {
    recipes: RecipeType[];
    currentRecipe: RecipeType | null; 
    loading: boolean;
    error: string | null;
}

const initialState: RecipeState = {
    recipes: [],
    currentRecipe: null,
    loading: false,
    error: null,
};

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async (_, thunkAPI) => {
    try {
        const response = await axios.get<RecipeType[]>('http://localhost:3000/api/recipes');
        return response.data;
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return thunkAPI.rejectWithValue(errorMessage);
    }
});

export const addRecipe = createAsyncThunk(
    'recipes/addRecipe',
    async ({newRecipe,user}:{ newRecipe:Omit<RecipeType, 'id'>,user:UserType}, thunkAPI) => {
        
         console.log(user.id);
        try {
            const headers = {
                'Content-Type': 'application/json',
                'user-id':user.id,
            };
            const response = await axios.post(
                'http://localhost:3000/api/recipes',
                newRecipe,
                { headers }
            );
            return response.data;
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<RecipeType[]>) => {
                state.loading = false;
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string; 
            })
            .addCase(addRecipe.fulfilled, (state, action: PayloadAction<RecipeType>) => {
                state.recipes.push(action.payload);
            })
            .addCase(addRecipe.rejected, (state, action) => {
                state.error = action.payload as string;
            })
    },
});
export const selectRecipes = (state: RootState) => state.recipes.recipes;
export const selectCurrentRecipe = (state: RootState) => state.recipes.currentRecipe; 
export default recipeSlice.reducer;
