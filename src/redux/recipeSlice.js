import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recipes: [
    { id: "Crispy Fried Poached Eggs", title: "Crispy Fried Poached Eggs", description:"This wow-worthy dish is inspired by an appetizer I once had at a restaurant and couldn't stop dreaming out. This recipe is a bit more challenging than your average egg dish, but tasting the crispy outer crust next to the smooth, silky yolk is worth all the effort! You can garnish with whatever toppings you want, but pickled red onions will offer a pop of brightness to cut through the richness.", ingredients:["4 large fresh eggs", "2 tablespoons white vinegar", "4 cups vegetable oil", "1 ½ cups all-purpose flour", "2 large eggs, lightly beaten", "2 teaspoons salt", "1 teaspoon freshly ground black pepper", "1 ½ cups panko bread crumbs","2 tablespoons chopped pickled red onions (for garnish)", "2 tablespoons chopped green onions (for garnish)", "1 tablespoon red pepper flakes for garnish, or to taste"], instructions:["Fill a saucepan with cold water and place over medium heat. Stir in vinegar and bring to a gentle, slow simmer. Working with one egg at a time, crack an egg into a ramekin or measuring cup for easier transfer.","Stir the water vigorously to create a whirlpool effect. As the whirlpool is turning, drop the egg into the center of the water. Continue to stir gently, cooking until the egg white turns opaque. Using a slotted spoon, carefully remove the egg from the water and move to a paper towel-lined plate to drain.", "In a medium saucepan, heat oil to 375 degrees F (190 degrees C).", "Meanwhile, set up a dredging station with 3 separate bowls. To the first bowl, add the flour. Beat 2 eggs with salt and pepper in a second bowl. Add breadcrumbs to the third bowl. Carefully dip the cooled egg first into the flour, second into the egg mixture, and last into the breadcrumbs, coating egg on all sides at each station.", "Using a slotted spoon, carefully drop the egg into the hot oil and fry until golden brown, 2 to 3 minutes, being careful not to overcook. Drain on a paper-towel lined plate.", "Garnish with pickled red onions, green onions, and red pepper flakes. Serve immediately."] },  
    {id:"Easy Morning Glory Muffins",title:"Easy Morning Glory Muffins",description:"These morning glory muffins are easy to make and a glorious way to start any day. They combine the great taste and chewy texture of carrots with the wonderful flavors of apple, raisins, coconut, walnuts, and cinnamon.",ingredients:["2 cups all-purpose flour", "1 ¼ cups white sugar", "2 teaspoons baking soda","2 teaspoons ground cinnamon","¼ teaspoon salt","2 cups shredded carrots","1 apple - peeled, cored and shredded","½ cup raisins","½ cup chopped walnuts","½ cup unsweetened flaked coconut","3 large eggs","1 cup vegetable oil","2 teaspoons vanilla extract"],instructions:["Preheat the oven to 350 degrees F (175 degrees C). Grease a 12-cup muffin tin or line cups with paper liners.","Mix flour, sugar, baking soda, cinnamon, and salt together in a large bowl; stir in carrots, apple, raisins, walnuts, and coconut.","Beat eggs, oil, and vanilla together in a separate bowl.","Stir egg mixture into the carrot mixture until just moistened.","Spoon batter into the prepared muffin cups, filling each 2/3 full.","Bake in the preheated oven until tops spring back when lightly pressed, about 20 minutes. Cool in the tin for 5 minutes. Transfer to a wire rack to cool completely.","Enjoy!"]}  
  ],
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {   
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { addRecipe} = recipeSlice.actions

export default recipeSlice.reducer