import './App.css'
import Helmet from 'react-helmet'

const DEFAULT_BASE_MEDIA_URL = '/test-food-pics/'

const DEFAULT_PAIRS = [
  [400, 320],
  [1500, 1500],
]

export const createMediaSet = (
  fileNameBase,
  baseMediaUrl = DEFAULT_BASE_MEDIA_URL,
  pairs = DEFAULT_PAIRS,
) => {
  return pairs.map(([fileSize, displaySize]) => {
    const url = `${baseMediaUrl}${fileNameBase}-x${fileSize}.jpg`

    return { url, width: displaySize }
  })
}

const INSTRUCTION_PAIRS = [
  [350, 320],
  [800, 10000],
]

export const createInstructionMediaSet = (fileNameBase) =>
  createMediaSet(
    fileNameBase,
    '/test-food-pics/recipe-step-image/',
    INSTRUCTION_PAIRS,
  )

export const allRecipes = [
  {
    id: 1248,
    title: 'Jamaican Squash & Coconut Stew',
    mainCategory: 'vegan',
    media: createMediaSet('1264---Jamaican-Squash--Coconut-Stew'),
    description:
      "Caribbean cuisine is a melting pot of flavours from across the globe. For this plant-based stew, you'll blend warming spices with chilli, coconut and butternut squash, and serve with pineapple salsa. Yum!",
    cookingTime: 35,
    amountOfReviews: 5557,
    averageRating: 4.5,
    cuisine: 'Jamaican',
    slug: 'jamaican-squash-coconut-stew',
    url: '/cookbook/vegan-recipes/jamaican-squash-coconut-stew',
    ingredients: [
      {
        ref: 'pineapple-in-juice',
        label: '1 can of pineapple slices (220g)',
      },
      {
        ref: 'brown-rice',
        label: '130g brown rice',
      },
      {
        ref: 'red-chilli',
        label: '1 red chilli',
      },
      {
        ref: 'tomato',
        label: '1 tomato',
      },
      {
        ref: 'garlic-clove',
        label: '1 garlic clove',
      },
      {
        ref: 'fresh-coriander',
        label: '10g coriander',
      },
      {
        ref: 'ground-coriander',
        label: '2 tsp ground coriander',
      },
      {
        ref: 'ground-allspice',
        label: '1 tsp ground allspice',
      },
      {
        ref: 'mild-curry-powder',
        label: '1/2 tbsp curry powder',
      },
      {
        ref: 'romano-pepper-2',
        label: '1 Romano pepper',
      },
      {
        ref: '1-kallo-vegetable-stock-cube',
        label: '1 Kallo vegetable stock cube',
      },
      {
        ref: 'tomato-paste',
        label: '1 tomato paste sachet (16g)',
      },
      {
        ref: 'Flecked-coconut-cream-2',
        label: '50g solid coconut cream',
      },
      {
        ref: 'butternut-cubes',
        label: '160g butternut squash cubes',
      },
    ],
    basics: [
      {
        slug: 'vegetable oil',
        title: 'vegetable oil',
      },
    ],
    instructions: [
      {
        html:
          "<p>Rinse the <strong>brown rice</strong>, add it to a pot with plenty of <strong>cold water</strong> and bring to the boil over a high heat</p><p>Once boiling, reduce the heat to medium and cook for 20-25 min or until it's tender with a slight bite</p><p>Once cooked, drain and return it to the pot and keep covered until serving</p>",
        media: createInstructionMediaSet('1264.-step-1-correct'),
      },
      {
        html:
          '<p>Meanwhile, deseed the<strong> Romano pepper<span class="text-danger">[s]</span></strong> (scrape the seeds and pith out with a teaspoon) and cut into bite-sized pieces</p><p>Heat a large, wide-based pan (preferably non-stick) with a drizzle of <strong>vegetable oil</strong> over a medium heat</p><p>Once hot, add the <strong>chopped</strong> <strong>pepper</strong> and <strong>butternut squash cubes </strong>and cook for 4-5 min or until starting to caramelise</p>',
        media: createInstructionMediaSet('1264.-step-2'),
      },
      {
        html:
          '<p>While the vegetables are cooking, boil half a kettle</p><p>Dice the <strong>tomato<span class="text-danger">[es]</span></strong></p><p>Peel and finely chop (or grate) the<strong> garlic</strong></p><p>Cut the<strong> red chilli<span class="text-danger">[es]</span></strong> in half lengthways, deseed (scrape the seeds out with a teaspoon) and chop finely</p>',
        media: null, // to check rendering in absence of a middle step
      },
      {
        html:
          '<p>Remove the <strong>coconut cream</strong> from the sachet<span class="text-danger">[s]</span> and chop it roughly</p><p>Dissolve the<strong> Kallo vegetable stock cube<span class="text-danger">[s]</span></strong>, <strong>tomato paste</strong> and <strong>chopped coconut cream</strong> in 300ml <span class="text-danger">[550ml]</span> <strong>boiled water </strong>– this is your<strong> coconut stock</strong></p><p>Remove the<strong> pineapple rings<span class="text-danger"> </span></strong>from the can and reserve the <strong>juice</strong></p>',
        media: createInstructionMediaSet('1264.-step-4'),
      },
      {
        html:
          "<p>Add the <strong>ground coriander</strong>,<strong> allspice </strong>and<strong> curry powder </strong>to the pan and cook for 30 secs or until fragrant</p><p>Once fragrant, add the <strong>chopped garlic</strong>, <strong>tomato</strong> and <strong>half</strong> of the <strong>chopped chilli</strong> (can't handle the heat? Go easy!) and cook for 1 min further</p><p>Add the <strong>coconut stock</strong> and the <strong>pineapple juice</strong> (save the pineapple for later!) and cook for 15 min or until the squash is fork-tender</p>",
        media: createInstructionMediaSet('1264.-step-5'),
      },
      {
        html:
          "<p>While the squash is cooking, chop the <strong>pineapple rings</strong> roughly</p><p>Chop the <strong>coriander</strong> finely, including the stalks</p><p>Combine the <strong>chopped pineapple</strong>, the <strong>remaining</strong> <strong>chilli</strong> (remember to go easy if you’re not a fan of spice!) and <strong>half</strong> of the <strong>chopped coriander</strong> (you'll use the rest later!) – this is your <strong>pineapple salsa</strong></p>",
        media: createInstructionMediaSet('1264.-step-6'),
      },
      {
        html:
          '<p>Once the squash is fork-tender and the sauce has thickened, stir through the <strong>remaining coriander </strong>– this is your <strong>squash &amp; coconut stew</strong></p>',
        media: createInstructionMediaSet('1264.-step-7'),
      },
      {
        html:
          '<p>Serve the <strong>squash &amp; coconut stew</strong> next to the <strong>cooked brown rice</strong></p><p>Top with the<strong> pineapple salsa</strong></p><p>Enjoy!</p>',
        media: null,
      },
    ],
    nutritional_information: {
      per_hundred_grams: {
        energy_kj: 590,
        energy_kcal: 141,
        fat_mg: 5200,
        fat_saturates_mg: 4000,
        carbs_mg: 19100,
        carbs_sugars_mg: 6000,
        fibre_mg: 2800,
        protein_mg: 2800,
        salt_mg: 630,
      },
      per_portion: {
        energy_kj: 2435,
        energy_kcal: 580,
        fat_mg: 21600,
        fat_saturates_mg: 17300,
        carbs_mg: 78800,
        carbs_sugars_mg: 24800,
        fibre_mg: 11400,
        protein_mg: 11500,
        salt_mg: 2610,
      },
    },
    allergens: [
      {
        title: 'celery',
        slug: 'celery',
      },
    ],
  },
  {
    id: 233,
    title: 'Sweet Potato Dal',
    mainCategory: 'vegan',
    media: createMediaSet('240.SweetPotatoDal'),
    description:
      'Incredibly nutritious, Dal is high in protein, low G.I. and counts as 1 of your 5-a-day! Here, the dal is a bed for the spicy roast sweet potatoes; a tangle of onion and a smattering of fresh coriander garnish this lovely healthy vegetarian dish.',
    cookingTime: 35,
    amountOfReviews: 668,
    averageRating: 4,
    cuisine: 'Indian',
    slug: 'sweet-potato-dal',
    url: '/cookbook/vegan-recipes/sweet-potato-dal',
    ingredients: [
      {
        ref: 'onion',
        label: '2 brown onions',
      },
      {
        ref: 'red-lentils',
        label: '300g red lentils',
      },
      {
        ref: 'chilli-flakes',
        label: '1/2 tsp chilli flakes',
      },
      {
        ref: 'turmeric',
        label: '1 tsp ground turmeric',
      },
      {
        ref: 'garlic-clove',
        label: '2 garlic cloves',
      },
      {
        ref: 'fresh-ginger',
        label: '15g root ginger',
      },
      {
        ref: 'fresh-coriander',
        label: '10g fresh coriander',
      },
      {
        ref: 'spinach',
        label: '150g spinach',
      },
      {
        ref: 'vegetable-stock-cube',
        label: '1 vegetable stock cube',
      },
      {
        ref: 'mild-curry-powder',
        label: '1 tbsp curry powder',
      },
      {
        ref: 'sweet-potato',
        label: '300g sweet potato',
      },
      {
        ref: 'dried-bay-leaves-1',
        label: '1 dried bay leaf',
      },
    ],
    basics: [
      {
        slug: 'pepper',
        title: 'pepper',
      },
      {
        slug: 'salt',
        title: 'salt',
      },
      {
        slug: 'vegetable oil',
        title: 'vegetable oil',
      },
    ],
    instructions: [
      {
        html:
          '<p><strong>Preheat</strong> the oven to 220°C/ 200°C (fan)/ 425°F/ Gas 7</p>\n<p><strong>Cut</strong> the sweet potatoes into wedges (approx. 2cm thick)</p>\n<p><strong>Crush</strong> the garlic with the back of a knife, peel and chop (or grate) very finely</p>\n<p><strong>Peel</strong> the ginger with a teaspoon and chop (or grate) very finely</p>',
        media: createInstructionMediaSet('240-step-1'),
      },
      {
        html:
          '<p><strong>Add</strong> the sweet potatoe wedges, garlic, ginger and chilli flakes (careful, adjust the amount to your preferred heat) in a mixing bowl</p>\n<p><strong>Toss</strong> together with 1-2 tbsp of vegetable oil and season to taste with salt and pepper</p>',
        media: createInstructionMediaSet('240-step-2'),
      },
      {
        html:
          '<p><strong>Transfer</strong> the coated wedges onto a baking tray (non-stick preferable) and cook for 20-25 min, or until cooked and caramelised around the edges</p>\n<p><strong>Meanwhile</strong>, rinse the lentils and add to a wide pot (with a lid) with 650ml <span class="text-danger">(1.3L)</span> of water on a high heat and bring to a boil</p>',
        media: createInstructionMediaSet('240-step-3'),
      },
      {
        html:
          '<p><strong>Add</strong> the turmeric, curry powder, bay leaf<span class="text-danger">(ves)</span>, half <span class="text-danger">(whole)</span> stock cube and mix briefly</p>\n<p><strong>Once</strong> boiling, reduce the heat to medium-low and simmer covered for 20 min, or until the water is nearly evaporated</p>\n<p><strong>Stir</strong> until resembling a thin mash</p>',
        media: createInstructionMediaSet('240-step-4'),
      },
      {
        html:
          '<p><strong>Meanwhile</strong>, slice the onions finely</p>\n<p><strong>Add</strong> 1-2 tbsp of vegetable oil to a large pan on a medium-high heat</p>\n<p><strong>Once</strong> hot, add the onion and a pinch of both the sugar and salt to the pan</p>\n<p><strong>Reduce</strong> the heat to a medium-low and cook for 20-25 min, or until crispy and brown, stirring occasionally (lowering the heat to prevent burning)</p>',
        media: createInstructionMediaSet('240-step-5'),
      },
      {
        html:
          '<p><strong>Wash</strong>, drain and pat dry the spinach for step 7</p>\n<p><strong>Chop</strong> the coriander finely for serving</p>',
        media: createInstructionMediaSet('240-step-6'),
      },
      {
        html:
          '<p><strong>Once</strong> the lentils are cooked and most of the water has evaporated, toss in the drained spinach on a low heat</p>\n<p><strong>Gently</strong> fold the spinach through until wilted but holding its shape - this is your dal</p>\n<p><strong>Tip:</strong> This will thicken your dal, so thin it with a couple splashes of tap water</p>\n<p><strong>Season</strong> the onion with salt to taste</p>',
        media: createInstructionMediaSet('240-step-7'),
      },
      // Note: the "serve" step was removed in order to check rendering in a
      // rare case that the last step has image.
    ],
    nutritional_information: {
      per_hundred_grams: {
        energy_kj: 660,
        energy_kcal: 155,
        fat_mg: 1100,
        fat_saturates_mg: 300,
        carbs_mg: 28600,
        carbs_sugars_mg: 4200,
        fibre_mg: 900,
        protein_mg: 9400,
        salt_mg: 640,
      },
      per_portion: {
        energy_kj: 2976,
        energy_kcal: 699,
        fat_mg: 4900,
        fat_saturates_mg: 1400,
        carbs_mg: 128700,
        carbs_sugars_mg: 18800,
        fibre_mg: 3900,
        protein_mg: 42500,
        salt_mg: 2890,
      },
    },
    allergens: [
      {
        title: 'celery',
        slug: 'celery',
      },
    ],
  },
  {
    id: 267,
    title: 'Cauli Mac & Cheese',
    mainCategory: 'vegan',
    media: createMediaSet('287.CauliMac&Cheese'),
    description:
      'The beauty of this bake is that the pasta and cauliflower cook in the same pot, while you make your white sauce. The cauliflower wants to be slightly underdone when it’s boiled, so that it has the perfect texture once baked.',
    cookingTime: 40,
    amountOfReviews: 113,
    averageRating: 4,
    cuisine: 'British',
    slug: 'cauli-mac-cheese',
    url: '/cookbook/vegan-recipes/cauli-mac-cheese',
    ingredients: [
      {
        ref: 'conchiglie',
        label: '200g conchiglie',
      },
      {
        ref: 'tomato',
        label: '1 tomato',
      },
      {
        ref: 'cauliflower',
        label: '1 cauliflower',
      },
      {
        ref: 'dijon-mustard',
        label: '2 tbsp Dijon mustard',
      },
      {
        ref: 'capers',
        label: '15g capers',
      },
      {
        ref: 'Panko-breadcrumbs-2_edit',
        label: '30g breadcrumbs',
      },
    ],
    basics: [
      {
        slug: 'oven-proof dish',
        title: 'oven-proof dish',
      },
      {
        slug: 'butter',
        title: 'butter',
      },
      {
        slug: 'flour',
        title: 'flour',
      },
      {
        slug: 'milk',
        title: 'milk',
      },
      {
        slug: 'olive oil',
        title: 'olive oil',
      },
      {
        slug: 'pepper',
        title: 'pepper',
      },
      {
        slug: 'salt',
        title: 'salt',
      },
    ],
    instructions: [
      {
        html:
          '<p><strong>Boil</strong> a kettle (used in step 2)</p>\n<p><strong>Preheat</strong> the oven to 240°C/ 220°C (fan)/ 475°F/ Gas 9</p>\n<p><strong>Cut</strong> the cauliflower into similar size pieces - roughly the size of a ping pong ball</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Bring</strong> a large pot of water to the boil with salt (optional) and add the pasta</p>\n<p><strong>Cook</strong> for 8 min, adding the cauliflower halfway through the cooking time </p>\n<p><strong>Drain</strong> and reserve the pan</p>\n<p><strong>Cut</strong> the tallegio (including the rind) into 2cm pieces, ready for step 4</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Return</strong> the pot to a medium heat and melt 30g <span class="text-danger">(60g)</span> of butter</p>\n<p><strong>Once</strong> melted stir in 30g <span class="text-danger">(60g)</span> of flour and cook for 2 min, stirring constantly with a wooden spoon</p>\n<p><strong>This</strong> is your roux</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Whisk</strong> 300ml <span class="text-danger">(600ml)</span> of milk and 100ml <span class="text-danger">(200ml)</span> of boiling water gradually into the roux</p>\n<p><strong>Cook</strong> for 5 min, stirring constantly, or until the sauce has the same consistency as double cream</p>\n<p><strong>Combine</strong> the dijon, half the taleggio, drained pasta and cauliflower and season generously</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Transfer</strong> to the oven-proof dish, tuck the remaining half of taleggio in amongst the pasta and sprinkle with breadcrumbs </p>\n<p><strong>Cook</strong> in the oven for 5 min </p>\n<p><strong>Then</strong> grill on high for a further 5 min</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Chop</strong> the tomato up finely</p>\n<p><strong>Chop</strong> the capers finely</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Combine</strong> the tomatoes, capers, 1 tbsp <span class="text-danger">(2 tbsp)</span> olive oil, salt and pepper to taste </p>\n<p><strong>This</strong> is your salsa</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Serve</strong> the dish straight from the oven with the salsa as a garnish</p>\n<p>Enjoy!</p>',
        media: null,
      },
    ],
    nutritional_information: {
      per_hundred_grams: {
        energy_kj: 558,
        energy_kcal: 132,
        fat_mg: 1300,
        fat_saturates_mg: 200,
        carbs_mg: 25000,
        carbs_sugars_mg: 2800,
        fibre_mg: 2000,
        protein_mg: 5400,
        salt_mg: 350,
      },
      per_portion: {
        energy_kj: 2151,
        energy_kcal: 508,
        fat_mg: 4900,
        fat_saturates_mg: 800,
        carbs_mg: 96300,
        carbs_sugars_mg: 10900,
        fibre_mg: 7700,
        protein_mg: 20700,
        salt_mg: 1330,
      },
    },

    allergens: [
      {
        title: 'gluten',
        slug: 'gluten',
      },
      {
        title: 'mustard',
        slug: 'mustard',
      },
      {
        title: 'sulphites',
        slug: 'sulphites',
      },
    ],
  },
  {
    id: 283,
    title: 'Sweet Potato Sag Aloo',
    mainCategory: 'vegan',
    media: createMediaSet('299.SweetPotatoSagAlooV2'),
    description:
      'Spicy yet wholesome, Sag Aloo is a traditional Indian side dish of spinach and potatoes that makes for the perfect midweek meal. Here we\u2019ve swapped potatoes for sweet potatoes, which are less starchy and better for slow energy release, and exchanged the spinach for seasonal spring greens.',
    cookingTime: 25,
    amountOfReviews: 338,
    averageRating: 4,
    cuisine: 'Indian',
    slug: 'sweet-potato-sag-aloo',
    url: '/cookbook/vegan-recipes/sweet-potato-sag-aloo',
    ingredients: [
      {
        ref: 'Can-of-chopped-tomatoes',
        label: '1 tin of chopped tomatoes',
      },
      {
        ref: 'brown-rice',
        label: '80g brown rice',
      },
      {
        ref: 'red-chilli',
        label: '1 red chilli',
      },
      {
        ref: 'turmeric',
        label: '1 tbsp ground turmeric',
      },
      {
        ref: 'garlic-clove',
        label: '2 garlic cloves',
      },
      {
        ref: 'cumin-seeds',
        label: '2 tsp cumin seeds',
      },
      {
        ref: 'ground-coriander',
        label: '1 tsp ground coriander',
      },
      {
        ref: 'cashew-nuts',
        label: '1 bag of cashew nuts',
      },
      {
        ref: 'spring-greens',
        label: '150g spring greens',
      },
      {
        ref: 'vegetable-stock-cube',
        label: '1 vegetable stock cube',
      },
      {
        ref: 'sweet-potato',
        label: '400g sweet potato',
      },
    ],
    basics: [
      {
        slug: 'pepper',
        title: 'pepper',
      },
      {
        slug: 'salt',
        title: 'salt',
      },
      {
        slug: 'vegetable oil',
        title: 'vegetable oil',
      },
    ],
    instructions: [
      {
        html:
          '<p><strong>Add</strong> the rice, plenty of water (approx. 4x more) and salt (optional) to a pot with a lid on a high heat and bring to the boil</p>\n<p><strong>Once</strong> boiling, reduce the heat and simmer gently with the lid on for 15-20 min or until tender</p>\n<p><strong>Check</strong> occasionally and once done, drain and set aside until serving</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Dice</strong> the sweet potato, with the skin on, into 1-2cm pieces</p>\n<p><strong>Heat</strong> 2 tbsp <span class="text-danger">(3 tbsp)</span> of vegetable oil in a wide pot with a matching lid on a high heat</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Once</strong> hot, toss in the cumin seeds, ground turmeric, and ground coriander and toast for 1 min</p>\n<p><strong>Toss</strong> in the sweet potatoes and cook for 2 min, stirring to coat</p>\n<p><strong>Cover</strong> with a lid until step 4</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Meanwhile</strong>, cut away the stem<span class="text-danger">(s)</span> from the chilli<span class="text-danger">(es)</span>, deseed and slice into half-moons</p>\n<p><strong>Crush</strong> the garlic with the side of the knife, peel, and chop finely</p>\n<p><strong>Add</strong> the garlic and chilli to the pot (careful, adjust the amount to your preferred hotness) and stir for 1 min, or until fragrant</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Add</strong> the chopped tomatoes to the pot</p>\n<p><strong>Add</strong> the stock cube and 250ml <span class="text-danger">(400ml)</span> of boiling water</p>\n<p><strong>Stir</strong> to combine, bring to a boil and then reduce to a rapid simmer</p>\n<p><strong>Cover</strong> with a lid and stir occasionally until adding the spring greens</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Meanwhile</strong>, rip the leaves off of the spring greens and discard the tough inner stalks</p>\n<p><strong>Bunch</strong> up the greens and chop or tear into 3-4cm thick strips</p>\n<p><strong>Add</strong> to the pot, mix well, and cook on a high heat for 7-9 min, or until the potatoes are tender</p>\n<p><strong>This</strong> is your sag aloo</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Crush</strong> the cashews in their bag using a rolling pin, taking care not to split the bag! </p>\n<p><strong>Set</strong> aside for step 8</p>',
        media: null,
      },
      {
        html:
          '<p><strong>Season</strong> the sag aloo to your taste with salt and plenty of pepper</p>\n<p><strong>Spoon</strong> the sag aloo into bowls and serve the rice beside it</p>\n<p><strong>Garnish</strong> with the chopped cashew nuts</p>\n<p>Enjoy!</p>',
        media: null,
      },
    ],
    nutritional_information: {
      per_hundred_grams: {
        energy_kj: 383,
        energy_kcal: 91,
        fat_mg: 2000,
        fat_saturates_mg: 500,
        carbs_mg: 16200,
        carbs_sugars_mg: 3800,
        fibre_mg: 1700,
        protein_mg: 2600,
        salt_mg: 540,
      },
      per_portion: {
        energy_kj: 2145,
        energy_kcal: 508,
        fat_mg: 11100,
        fat_saturates_mg: 2800,
        carbs_mg: 90400,
        carbs_sugars_mg: 21100,
        fibre_mg: 9800,
        protein_mg: 14800,
        salt_mg: 3020,
      },
    },
    allergens: [
      {
        title: 'nut',
        slug: 'nut',
      },
      {
        title: 'celery',
        slug: 'celery',
      },
    ],
  },
  {
    id: 1106,
    title: 'Korean Beef Bibimbap With Smashed Cucumber',
    mainCategory: 'asian',
    media: createMediaSet(
      '1122_Korean-Beef-Bibimbap-With-Smashed-Cucumber-2414-1585305077084',
    ),
    description:
      'Bibimbap (literally "mixed rice"), is a Korean classic. You\'ll top this irresistible bowl with beef bulgogi, a fried egg, pickled vegetables, and a tangy miso drizzle. This is Seoul-food!',
    cookingTime: 20,
    amountOfReviews: 1159,
    averageRating: 4.5,
    cuisine: 'Korean',
    slug: 'korean-beef-bibimbap-with-smashed-cucumber',
    url: '/cookbook/asian-recipes/korean-beef-bibimbap-with-smashed-cucumber',
    ingredients: [
      {
        ref: 'egg',
        label: '2 British free-range eggs',
      },
      {
        ref: 'garlic-clove',
        label: '2 garlic cloves',
      },
      {
        ref: 'fresh-ginger',
        label: '15g fresh root ginger',
      },
      {
        ref: 'spring-onion',
        label: '1 spring onion',
      },
      {
        ref: 'cucumber',
        label: '1/2 cucumber',
      },
      {
        ref: 'miso-paste',
        label: '1 tbsp white miso paste',
      },
      {
        ref: 'honey-pot',
        label: '1 honey pot (25g)',
      },
      {
        ref: 'carrot',
        label: '1 carrot',
      },
      {
        ref: 'basmati-rice',
        label: '130g basmati rice',
      },
      {
        ref: '1-Sriracha-hot-chilli-sauce-sachet-8ml',
        label: '2 sriracha hot chilli sauce sachets (16ml)',
      },
      {
        ref: 'soy-sauce-sachet',
        label: '1 soy sauce sachet (30ml)',
      },
      {
        ref: 'rice-vinegar',
        label: '1 rice vinegar sachet (15ml)',
      },
      {
        ref: 'Ingredients-MinceBeef_13854-3',
        label: '250g British beef mince',
      },
    ],
    basics: [
      {
        slug: 'rolling pin',
        title: 'rolling pin',
      },
      {
        slug: 'salt',
        title: 'salt',
      },
      {
        slug: 'vegetable oil',
        title: 'vegetable oil',
      },
    ],
    instructions: [
      {
        html:
          '<p>Smash the <strong>cucumber</strong> with a <strong>rolling-pin</strong> and chop it into large, bite-sized pieces</p><p>Tip: By bruising the cucumber the water is drawn out more easily</p><p>Top, tail, peel and grate the <strong>carrot<span class="text-danger">[s]</span></strong></p><p>Combine the <strong>smashed cucumber</strong> and <strong>grated carrot </strong>in a medium bowl with a pinch of <strong>salt</strong> and set aside</p>',
        media: createInstructionMediaSet('1122.-step-1'),
      },
      {
        html:
          '<p>Add the <strong>basmati rice</strong> and 350ml<span class="text-danger"> [700ml]</span><strong> cold water</strong> to a pot with a lid and bring to the boil over a high heat</p><p>Once boiling, reduce the heat to very low and cook, covered, for 10-15 min or until all the water has absorbed and the rice is cooked</p><p>Once cooked, remove from the heat and keep covered until serving</p>',
        media: createInstructionMediaSet('1122.-step-2'),
      },
      {
        html:
          '<p>Meanwhile, peel and finely chop (or grate) the <strong>garlic</strong></p><p>Peel (scrape the skin off with a teaspoon) and finely chop (or grate) the <strong>ginger</strong></p><p>Trim, then slice the <strong>spring onion<span class="text-danger">[s]</span></strong> finely</p>',
        media: createInstructionMediaSet('1122.-step-3'),
      },
      {
        html:
          '<p>Heat a large, wide-based pan (preferably non-stick) over a medium heat</p><p>Once hot, add the <strong>beef mince</strong> and cook for 3-5 min, breaking it up with a wooden spoon as you go</p><p>Once browned, add the <strong>chopped garlic</strong>, <strong>ginger</strong> and <strong>spring onion</strong> and cook for 1-2 min or until fragrant</p><p>Add the <strong>soy sauce</strong> and <strong>honey</strong> and cook for 1 min further – this is your <strong>bulgogi</strong></p>',
        media: createInstructionMediaSet('1122.-step-4'),
      },
      {
        html:
          '<p>Whilst the bulgogi is cooking, drain any<strong> excess water</strong> from the <strong>smashed cucumber</strong> and<strong> grated carrot</strong></p><p>Return the<strong> drained veg</strong> to the bowl and add the <strong>rice vinegar</strong></p><p>Give everything a good stir and set aside – this is your <strong>pickled veg</strong></p>',
        media: createInstructionMediaSet('1122.-step-6'),
      },
      {
        html:
          "<p>Transfer the <strong>bulgogi</strong> to a bowl and return the pan (no need to wash it!) to a medium heat with a drizzle of <strong>vegetable oil</strong></p><p>Once hot, crack the <strong>eggs</strong> into the pan</p><p>Cover and cook for 3 min or until they're done to your liking</p>",
        media: createInstructionMediaSet('1122.-step-7'),
      },
      {
        html:
          '<p>Meanwhile, combine the <strong>chipotle paste</strong> and <strong>miso paste</strong> with 1 tbsp <span class="text-danger">[2 tbsp]</span> of <strong>cold water</strong> in a small bowl – this is your <strong>spicy miso sauce</strong></p>',
        media: createInstructionMediaSet('1122.-step-5'),
      },
      {
        html:
          '<p>Divide the<strong> rice</strong> between bowls and arrange the <strong>bulgogi </strong>and <strong>pickled veg </strong>on top</p><p>Top each bowl with a<strong> fried egg</strong> and a drizzle of the <strong>spicy miso sauce</strong></p><p>Enjoy!</p>',
        media: null,
      },
    ],
    nutritional_information: {
      per_hundred_grams: {
        energy_kj: 655,
        energy_kcal: 155,
        fat_mg: 4900,
        fat_saturates_mg: 2100,
        carbs_mg: 18500,
        carbs_sugars_mg: 4400,
        fibre_mg: 600,
        protein_mg: 9100,
        salt_mg: 910,
      },
      per_portion: {
        energy_kj: 2582,
        energy_kcal: 613,
        fat_mg: 19500,
        fat_saturates_mg: 8100,
        carbs_mg: 72900,
        carbs_sugars_mg: 17300,
        fibre_mg: 2200,
        protein_mg: 36000,
        salt_mg: 3570,
      },
    },
    allergens: [
      {
        title: 'egg',
        slug: 'egg',
      },
      {
        title: 'soya',
        slug: 'soya',
      },
      {
        title: 'gluten',
        slug: 'gluten',
      },
    ],
  },
  {
    id: 1086,
    title: 'Thai Green Vegetable Curry With Lime',
    mainCategory: 'asian',
    media: createMediaSet('1102.-Thai_Green-Vegetable_Curry-With-Lime'),
    description:
      "Thai curry is a fragrant mix of zingy citrus, ginger, chilli and herbs. For this mild, plant-based twist, you'll pack the aromatic sauce with aubergine and Tenderstem broccoli, and serve with rice. Aroi mak!",
    cookingTime: 30,
    amountOfReviews: 8837,
    averageRating: 4.5,
    cuisine: 'Asian',
    slug: 'thai-green-vegetable-curry-with-lime',
    url: '/cookbook/asian-recipes/thai-green-vegetable-curry-with-lime',
    ingredients: [
      {
        ref: 'aubergine',
        label: '1 aubergine',
      },
      {
        ref: 'red-chilli',
        label: '1 red chilli',
      },
      {
        ref: 'lime',
        label: '1 lime',
      },
      {
        ref: 'fresh-ginger',
        label: '15g fresh root ginger',
      },
      {
        ref: 'Roasted-peanuts',
        label: '1 bag of roasted peanuts (25g)',
      },
      {
        ref: 'sugarsnap-peas',
        label: '80g sugar snap peas',
      },
      {
        ref: 'tenderstem-broccoli-2',
        label: '80g Tenderstem broccoli',
      },
      {
        ref: 'kaffir-lime-leaves-1',
        label: '3 dried kaffir lime leaves',
      },
      {
        ref: 'basmati-rice',
        label: '130g basmati rice',
      },
      {
        ref: '1-Vegetable-stock-cube',
        label: '1 Knorr vegetable stock cube',
      },
      {
        ref: 'green-curry-paste',
        label: '1 Thai green curry paste sachet (40g)',
      },
      {
        ref: 'Flecked-coconut-cream-2',
        label: '50g solid coconut cream',
      },
    ],
    basics: [
      {
        slug: 'rolling pin',
        title: 'rolling pin',
      },
      {
        slug: 'salt',
        title: 'salt',
      },
      {
        slug: 'sugar',
        title: 'sugar',
      },
      {
        slug: 'vegetable oil',
        title: 'vegetable oil',
      },
    ],

    instructions: [
      {
        html:
          '<p>Add the<strong> basmati rice</strong> and 300ml <span class="text-danger">[600ml]</span> <strong>cold water</strong> to a pot with a lid and bring to the boil over a high heat</p><p>Once boiling, reduce the heat to very low and cook, covered, for 10-15 min or until all the water has absorbed and the rice is cooked</p><p>Once cooked, remove from the heat and keep covered until serving</p>',
        media: createInstructionMediaSet('1102.-step-1'),
      },
      {
        html:
          '<p>Meanwhile, peel (scrape the skin off with a teaspoon) and finely chop (or grate) the <strong>ginger</strong></p><p>Finely slice 1/2 <span class="text-danger">[1]</span> <strong>red chilli</strong> into rounds and set them aside for garnish</p><p>Cut the <strong>remaining</strong> <strong>chilli</strong> in half lengthways, deseed (scrape the seeds out with a teaspoon) and chop finely</p><p>Trim the green stalks off the <strong>aubergine<span class="text-danger">[s]</span></strong> and chop into bite-sized pieces</p>',
        media: createInstructionMediaSet('1102.-step-2'),
      },
      {
        html:
          '<p>Heat a large, wide-based pan (preferably non-stick) with a drizzle of <strong>vegetable oil</strong> over a medium-high heat</p><p>Once hot, add the<strong> chopped aubergine</strong> with a generous pinch of <strong>salt</strong> and cook for 3-4 min or until beginning to soften and brown</p>',
        media: createInstructionMediaSet('1102.-step-3'),
      },
      {
        html:
          "<p>Boil a kettle</p><p>Chop the <strong>Tenderstem broccoli</strong> in half, separating the tips from the stems</p><p>Slice the <strong>sugar snap peas</strong> in half lengthways (or just chop them roughly)</p><p>Once the aubergine softened, add the<strong> Thai green curry paste</strong>, <strong>chopped chilli</strong> (can't handle the heat? Go easy!) and <strong>chopped ginger</strong> to the aubergine and cook for 2 min</p>",
        media: createInstructionMediaSet('1102.-step-4'),
      },
      {
        html:
          '<p>Remove the <strong>coconut cream</strong> from the sachet<span class="text-danger">[s]</span> and chop it roughly</p><p>Dissolve the <strong>chopped coconut cream</strong> and <strong>Knorr</strong> <strong>vegetable stock cube<span class="text-danger">[s]</span></strong> in 350ml<span class="text-danger"> [700ml]</span> <strong>boiled water</strong></p><p>Add the <strong>juice</strong> of 1/2 <span class="text-danger">[1]</span> <strong>lime</strong>, 1 tsp <span class="text-danger">[2 tsp]</span> <strong>sugar</strong> and the <strong>kaffir lime leaves</strong> and mix to combine – this is your <strong>aromatic stock</strong></p>',
        media: createInstructionMediaSet('1102.-step-5'),
      },
      {
        html:
          "<p>Add the <strong>aromatic stock</strong> to the pan with the <strong>broccoli stems</strong>, reduce the heat to medium and cook for 3 min</p><p>Add the <strong>broccoli tips </strong>and <strong>sliced sugar snap peas</strong> and cook for 2 min further or until everything's tender with a slight bite and the sauce has thickened slightly – this is your <strong>Thai green vegetable curry</strong></p>",
        media: createInstructionMediaSet('1102.-step-6'),
      },
      {
        html:
          "<p>While the sauce thickens, bash the <strong>roasted peanuts</strong> with a<strong> rolling pin</strong> until finely crushed (keep them in the bag so you don't lose any!)</p><p>Cut the <strong>remaining lime</strong> into wedges</p>",
        media: createInstructionMediaSet('1102__step-7'),
      },
      {
        html:
          '<p>Serve the <strong>Thai green vegetable curry</strong> with the<strong> cooked basmati rice</strong></p><p>Tip: For fancy presentation, press the rice into small bowls and turn out</p><p>Garnish with the <strong>chilli rounds </strong>(not a fan of spice? Just add a little), <strong>crushed peanuts</strong> and a wedge of <strong>lime </strong>and enjoy!</p>',
        media: null,
      },
    ],
    nutritional_information: {
      per_hundred_grams: {
        energy_kj: 604,
        energy_kcal: 144,
        fat_mg: 6700,
        fat_saturates_mg: 4600,
        carbs_mg: 15900,
        carbs_sugars_mg: 2300,
        fibre_mg: 3000,
        protein_mg: 4300,
        salt_mg: 820,
      },
      per_portion: {
        energy_kj: 2422,
        energy_kcal: 579,
        fat_mg: 26800,
        fat_saturates_mg: 18500,
        carbs_mg: 63800,
        carbs_sugars_mg: 9200,
        fibre_mg: 12200,
        protein_mg: 17100,
        salt_mg: 3300,
      },
    },
    allergens: [
      {
        title: 'peanut',
        slug: 'peanut',
      },
      {
        title: 'celery',
        slug: 'celery',
      },
    ],
  },
  {
    id: 1077,
    title: 'Curried Paneer & Pineapple Noodles',
    mainCategory: 'asian',
    media: createMediaSet('1093..-Curried-Paneer--Pineapple-Noodles'),
    description:
      'We\u2019ve based this dish on a Chinese street food classic. Wholewheat noodles dressed in a coconut curry sauce, packed with golden paneer, stir-fried green pepper, onion and charred pineapple. The sauce is creamy, sweet and a little spicy, topped off with spring onion, coriander and toasted sesame seeds. ',
    cookingTime: 35,
    amountOfReviews: 535,
    averageRating: 4.5,
    cuisine: 'Chinese',
    slug: 'curried-paneer-pineapple-noodles',
    url: '/cookbook/asian-recipes/curried-paneer-pineapple-noodles',
    ingredients: [
      {
        ref: 'pineapple-in-juice',
        label: '1 tin of pineapple slices',
      },
      {
        ref: 'red-onion',
        label: '1 red onion',
      },
      {
        ref: 'green-pepper',
        label: '1 green pepper',
      },
      {
        ref: 'fresh-ginger',
        label: '15g fresh root ginger',
      },
      {
        ref: 'soy-sauce-sachet',
        label: '4 soy sauce sachets (32ml)',
      },
      {
        ref: 'spring-onion',
        label: '1 spring onion',
      },
      {
        ref: 'Chilli-flakes.2',
        label: '1/2 tsp dried chilli flakes',
      },
      {
        ref: 'mild-curry-powder',
        label: '1 tbsp curry powder',
      },
      {
        ref: 'wheat-noodle-nests-1',
        label: '2 wholewheat noodle nests',
      },
      {
        ref: 'fresh-coriander',
        label: '5g coriander',
      },
      {
        ref: 'sesame-seeds',
        label: '1 1 toasted sesame seed sachet (5g)',
      },
      {
        ref: 'Paneer1',
        label: '1 226g paneer cheese',
      },
      {
        ref: 'Flecked-coconut-cream-2',
        label: '1 50g solid coconut cream',
      },
    ],
    basics: [
      {
        slug: 'butter',
        title: 'butter',
      },
      {
        slug: 'flour',
        title: 'flour',
      },
      {
        slug: 'salt',
        title: 'salt',
      },
      {
        slug: 'vegetable oil',
        title: 'vegetable oil',
      },
    ],
    instructions: [
      {
        html:
          '<p>Boil a kettle</p>\n<p>Deseed the<strong> green pepper<span class="text-danger">[s]</span></strong> (scrape the seeds and pith out with a teaspoon) and chop into bite-sized pieces</p>\n<p>Peel the<strong> red onion<span class="text-danger">[s]</span></strong> and cut into wedges</p>\n<p>Peel (scrape the skin off with a teaspoon) and finely chop (or grate) the <strong>ginger</strong></p>',
        media: createInstructionMediaSet('1093.-step-1'),
      },
      {
        html:
          "<p>Add the <strong>wholewheat noodles</strong> to a pot, cover them with<strong> boiled water</strong> until they're fully submerged</p>\n<p>Bring to the boil over a high heat and cook for 5-7 min until they're tender with a slight bite, then drain and run them under <strong>cold water</strong> until they're cool</p>\n<p>Keep the pot for later</p>",
        media: createInstructionMediaSet('1093.-step-2'),
      },
      {
        html:
          "<p>Meanwhile, cut the <strong>paneer</strong> into bite-sized cubes</p>\n<p>Heat a large, wide-based pan (preferably non-stick) with a drizzle of <strong>vegetable oil</strong> over a medium-high heat</p>\n<p>Once hot, add the <strong>paneer</strong> with a generous pinch of <strong>salt </strong>and cook for 3-5 min or until it's golden on all sides</p>\n<p>Once golden, set aside on a plate and keep the pan for later</p>",
        media: createInstructionMediaSet('1093.-step-3'),
      },
      {
        html:
          '<p>Meanwhile, re-boil a kettle</p>\n<p>Drain the<strong> pineapple</strong> (keep the juice!) and chop it into bite-sized pieces</p>\n<p>Remove the <strong>coconut cream</strong> from the sachet<span class="text-danger">[s]</span> and chop it roughly, then dissolve it<strong> </strong>in 250ml <span class="text-danger">[500ml]</span> <strong>boiled water</strong></p>\n<p>Once dissolved, add the<strong> soy sauce</strong> and roughly half of the reserved<strong> pineapple juice</strong> – this is your <strong>coconut stock</strong></p>',
        media: createInstructionMediaSet('1093.-step-4'),
      },
      {
        html:
          '<p>Return the pan to a medium-high heat</p>\n<p>Once hot, add the<strong> onion wedges</strong> and <strong>green pepper</strong> with a pinch of<strong> salt</strong> and cook for 6 min, stirring occasionally, or until coloured and beginning to soften</p>\n<p>Once softened, add the<strong> chopped pineapple</strong> and cook for 2 min further or until charred slightly</p>\n<p> </p>',
        media: createInstructionMediaSet('1093.-step-5'),
      },
      {
        html:
          '<p>Meanwhile, return the pot to a medium heat with a large knob of <strong>butter</strong></p>\n<p>Once melted, add the <strong>chopped ginger</strong>, <strong>curry powder</strong>, and <strong>chilli flakes</strong> (Can\'t handle the heat? Go easy!) and cook for 1 min </p>\n<p>Add 1 tsp<span class="text-danger"> [2 tsp]</span> <strong>flour</strong> and cook for 1 min, then add the<strong> coconut stock</strong> and whisk to combine</p>\n<p>Cook for 4 min or until thickened to the consistency of a loose curry sauce</p>',
        media: createInstructionMediaSet('1093.-step-6'),
      },
      {
        html:
          '<p>Meanwhile, chop the <strong>coriander </strong>finely, including the stalks</p>\n<p>Trim, then slice the <strong>spring onion<span class="text-danger">[s]</span></strong> finely</p>\n<p>Add the cooled<strong> noodles</strong> to the softened vegetables with the <strong>paneer</strong> and <strong>curry sauce</strong></p>\n<p>Cook for 1-2 min, stirring until the sauce sticks to everything </p>',
        media: createInstructionMediaSet('1093.-step-7'),
      },
      {
        html:
          '<p>Serve the <strong>curried paneer &amp; pineapple noodles</strong> garnished with the<strong> chopped coriander</strong>, <strong>sliced spring onion </strong>and <strong>toasted</strong> <strong>sesame seeds </strong></p>\n<p>Enjoy!</p>\n<p> </p>',
        media: null,
      },
    ],
    nutritional_information: {
      per_hundred_grams: {
        energy_kj: 851,
        energy_kcal: 204,
        fat_mg: 11900,
        fat_saturates_mg: 8400,
        carbs_mg: 14200,
        carbs_sugars_mg: 5700,
        fibre_mg: 3100,
        protein_mg: 8500,
        salt_mg: 780,
      },
      per_portion: {
        energy_kj: 3675,
        energy_kcal: 881,
        fat_mg: 51300,
        fat_saturates_mg: 36100,
        carbs_mg: 61500,
        carbs_sugars_mg: 24600,
        fibre_mg: 13300,
        protein_mg: 36500,
        salt_mg: 3380,
      },
    },
    allergens: [
      {
        title: 'gluten',
        slug: 'gluten',
      },
      {
        title: 'soya',
        slug: 'soya',
      },
      {
        title: 'sesame',
        slug: 'sesame',
      },
      {
        title: 'milk',
        slug: 'milk',
      },
    ],
  },
  {
    id: 1070,
    title: 'Chinese Lemon Chicken & Tenderstem',
    mainCategory: 'asian',
    media: createMediaSet('1086---Chinese-Lemon-Chicken--Tenderstem'),
    description:
      "Sticky, sweet and a little bit crunchy, Chinese Lemon Chicken is a retro classic that never fails. You'll coat the chicken in cornflour, before frying it to get a crispy coating, then make a lemon sauce using fresh lemon and honey.",
    cookingTime: 30,
    amountOfReviews: 755,
    averageRating: 4.5,
    cuisine: 'Chinese',
    slug: 'chinese-lemon-chicken-tenderstem',
    url: '/cookbook/asian-recipes/chinese-lemon-chicken-tenderstem',
    ingredients: [
      {
        ref: 'lemon',
        label: '1 lemon',
      },
      {
        ref: 'red-chilli',
        label: '1 red chilli',
      },
      {
        ref: 'garlic-clove',
        label: '1 garlic clove',
      },
      {
        ref: 'spring-onion',
        label: '2 spring onions',
      },
      {
        ref: '5-spice',
        label: '1/2 tsp five-spice mix',
      },
      {
        ref: 'cornflour',
        label: '4 tbsp cornflour',
      },
      {
        ref: 'honey-pot',
        label: '1 honey pot (25g)',
      },
      {
        ref: 'basmati-rice',
        label: '130g basmati rice',
      },
      {
        ref: 'soy-sauce-sachet',
        label: '1 soy sauce sachet (30ml)',
      },
      {
        ref: 'sesame-seeds',
        label: '1 toasted sesame seed sachet (5g)',
      },
      {
        ref: '2-x-125g-British-chicken-breasts',
        label: '2 x 125g British chicken breast fillets',
      },
      {
        ref: 'tenderstem-broccoli-2',
        label: '160g tenderstem broccoli',
      },
    ],
    basics: [
      {
        slug: 'tin foil',
        title: 'tin foil',
      },
      {
        slug: 'salt',
        title: 'salt',
      },
      {
        slug: 'sugar',
        title: 'sugar',
      },
      {
        slug: 'vegetable oil',
        title: 'vegetable oil',
      },
    ],
    instructions: [
      {
        html:
          '<p>Preheat the oven to 200°C/ 180°C (fan)/ 350°F/ Gas 4</p><p>Add the <strong>basmati rice</strong> and 300ml <span class="text-danger">[600ml]</span> <strong>cold water</strong> to a pot with a lid and bring to the boil over a high heat</p><p>Once boiling, reduce the heat to very low and cook, covered, for 10-12 min or until all the water has absorbed and the rice is cooked</p><p>Once cooked, remove from the heat and keep covered until serving</p>',
        media: createInstructionMediaSet('1086.-step-1'),
      },
      {
        html:
          '<p>Whilst the rice is cooking, cut the <strong>Tenderstem brocolli </strong>in half</p><p>Cut 1 <span class="text-danger">[2]</span> piece<span class="text-danger">[s]</span> of <strong>tin foil</strong> approx. the size of A3 paper</p><p>Lay the <strong>Tenderstem</strong> in the middle with 1 tbsp <span class="text-danger">[2 tbsp]</span> <strong>water</strong> and a pinch of <strong>salt</strong> and add to a baking tray</p><p>Scrunch the edges of the foil around the <strong>Tenderstem</strong> to form a sealed parcel</p><p>Put the tray in the oven for 15 min or until tender</p>',
        media: createInstructionMediaSet('1086.-step-2'),
      },
      {
        html:
          '<p>Meanwhile, peel and finely chop (or grate) the <strong>garlic</strong></p><p>Cut 1/2 <span class="text-danger">[1]</span> <strong>lemon</strong> into thin slices and juice 1/2 <span class="text-danger">[1]</span> <strong>lemon</strong> into a bowl</p><p>Add the <strong>honey</strong>, 1 tsp <span class="text-danger">[2 tsp]</span> of the <strong>cornflour</strong>,<strong> 1/2 </strong>of the <strong>soy sauce </strong>(save the rest for later!) and 100ml <span class="text-danger">[200ml]</span> <strong>cold water </strong>to the bowl</p><p>Give it a good mix up - this is your <strong>lemon sauce</strong></p>',
        media: createInstructionMediaSet('1086.-step-3'),
      },
      {
        html:
          '<p>Cut the <strong>chicken breasts</strong> lengthways into 4 <span class="text-danger">[8]</span> strips, then cut each strip in half</p><p>Add the <strong>remaining</strong> <strong>cornflour</strong> to a bowl along with 1 tsp <span class="text-danger">[2 tsp]</span> <strong>sugar</strong>, 1/2 <span class="text-danger">[all] </span>of the <strong>five-spice mix </strong>and a generous grind of<strong> black pepper </strong>and mix it all together</p><p>Add the <strong>chicken strips</strong> to the bowl and give everything a good mix up until all the chicken is coated</p>',
        media: createInstructionMediaSet('1086.-step-4'),
      },
      {
        html:
          '<p>Heat a large, wide-based pan (preferably non-stick) with a generous drizzle of<strong> vegetable oil</strong> over a high heat</p><p>Once the pan is very hot, add the <strong>coated chicken</strong> along with the <strong>remaining</strong> <strong>soy sauce</strong> and cook for 5-6 min on each side until golden and crispy and the chicken is cooked through (no pink meat!) – this is your <strong>crispy chicken</strong></p><p>Once crispy, transfer to a plate and set aside</p><p>Reserve the pan</p>',
        media: createInstructionMediaSet('1086.-step-5'),
      },
      {
        html:
          '<p>Meanwhile, trim, then slice the <strong>spring onions</strong> finely</p><p>Cut the <strong>red chilli<span class="text-danger">[es]</span></strong> in half lengthways, de-seed (scrape the seeds out with a teaspoon) and chop ﬁnely</p><p>Stir the <strong>sliced spring onions</strong> and <strong>chopped chilli</strong> (can\'t handle the heat? Go easy!) into the cooked rice – this is your<strong> chilli rice</strong></p>',
        media: createInstructionMediaSet('1086.-step-6'),
      },
      {
        html:
          '<p>Return the pan to a medium low heat with a drizzle of <strong>vegetable oil</strong></p><p>Once hot, add the <strong>chopped</strong> <strong>garlic</strong> and cook for 1 min until fragrant</p><p>Once fragrant, add the <strong>lemon sauce</strong> and cook for 2-3 min or until the sauce is thick and sticky</p>',
        media: createInstructionMediaSet('1086.-step-7'),
      },
      {
        html:
          '<p>Serve the <strong>crispy chicken </strong>with the <strong>chilli rice </strong>and<strong> cooked Tenderstem </strong>to the side</p><p>Drizzle the <strong>lemon sauce</strong> over the <strong>crispy chicken</strong> and garnish with the <strong>lemon slices</strong> and <strong>sesame seeds</strong></p><p>Enjoy!</p>',
        media: null,
      },
    ],
    nutritional_information: {
      per_hundred_grams: {
        energy_kj: 590,
        energy_kcal: 139,
        fat_mg: 1100,
        fat_saturates_mg: 200,
        carbs_mg: 22600,
        carbs_sugars_mg: 3300,
        fibre_mg: 1500,
        protein_mg: 10500,
        salt_mg: 600,
      },
      per_portion: {
        energy_kj: 2273,
        energy_kcal: 536,
        fat_mg: 4100,
        fat_saturates_mg: 800,
        carbs_mg: 87000,
        carbs_sugars_mg: 12700,
        fibre_mg: 6000,
        protein_mg: 40400,
        salt_mg: 2330,
      },
    },
    // Allergens omitted for testing: actually gluten, soya, sesame
  },
]

export const veganRecipes = allRecipes.filter(
  (recipe) => recipe.mainCategory === 'vegan',
)
export const asianRecipes = allRecipes.filter(
  (recipe) => recipe.mainCategory === 'asian',
)

export const mockCategories = [
  {
    id: 0,
    title: 'All Recipes',
    slug: 'all-recipes',
    url: '/cookbook/all-recipes',
    description:
      'Not sure what to cook for dinner? Browse our full library of delicious recipe ideas',
  },
  {
    id: 1,
    title: 'Vegan Recipes',
    slug: 'vegan-recipes',
    url: '/cookbook/vegan-recipes',
    description:
      'Nutritious and rich in proteins, our meat-free and dairy-free vegan recipes are packed full of goodness without skimping on flavour. Vegan meals don’t have to be tasteless and dull - be inspired by our range of recipes which will have mouths watering and plates empty in no time. Delicious!',
    recipes: veganRecipes,
    representativeRecipe: veganRecipes[1],
  },
  {
    id: 2,
    title: 'Asian Recipes',
    slug: 'asian-recipes',
    url: '/cookbook/asian-recipes',
    description:
      'Quick, easy stir-fries, authentic Vietnamese food, coconut curries... Asian cuisine is full of flavour.',
    recipes: asianRecipes,
    representativeRecipe: asianRecipes[1],
  },
  {
    id: 3,
    title: 'American Recipes',
    slug: 'american-recipes',
    url: '/cookbook/american-recipes',
  },
  {
    id: 4,
    title: 'Chinese Recipes',
    slug: 'chinese-recipes',
    url: '/cookbook/chinese-recipes',
    description:
      'Authentic Chinese cooking can be as easy as a beef, chicken or prawn stir-fry: healthy and delicious!',
  },
  {
    id: 5,
    title: 'French Recipes',
    slug: 'french-recipes',
    url: '/cookbook/french-recipes',
  },
  {
    id: 6,
    title: 'Greek Recipes',
    slug: 'greek-recipes',
    url: '/cookbook/greek-recipes',
  },
  {
    id: 7,
    title: 'Indian Recipes',
    slug: 'indian-recipes',
    url: '/cookbook/indian-recipes',
  },
  {
    id: 8,
    title: 'Italian Recipes',
    slug: 'italian-recipes',
    url: '/cookbook/italian-recipes',
  },
  {
    id: 9,
    title: 'Japanese Recipes',
    slug: 'japanese-recipes',
    url: '/cookbook/japanese-recipes',
  },
  {
    id: 10,
    title: 'Mediterranean Recipes',
    slug: 'mediterranean-recipes',
    url: '/cookbook/mediterranean-recipes',
  },
  {
    id: 11,
    title: 'Mexican Recipes',
    slug: 'mexican-recipes',
    url: '/cookbook/mexican-recipes',
  },
  {
    id: 12,
    title: 'Moroccan Recipes',
    slug: 'moroccan-recipes',
    url: '/cookbook/moroccan-recipes',
  },
  {
    id: 13,
    title: 'Spanish Recipes',
    slug: 'spanish-recipes',
    url: '/cookbook/spanish-recipes',
  },
  {
    id: 14,
    title: 'Thai Recipes',
    slug: 'thai-recipes',
    url: '/cookbook/thai-recipes',
  },
  {
    id: 15,
    title: 'Turkish Recipes',
    slug: 'turkish-recipes',
    url: '/cookbook/turkish-recipes',
  },
  {
    id: 16,
    title: 'Vietnamese Recipes',
    slug: 'vietnamese-recipes',
    url: '/cookbook/vietnamese-recipes',
  },
  {
    id: 17,
    title: 'Burger Recipes',
    slug: 'burger-recipes',
    url: '/cookbook/burger-recipes',
  },
  {
    id: 18,
    title: 'Chilli Recipes',
    slug: 'chilli-recipes',
    url: '/cookbook/chilli-recipes',
  },
  {
    id: 19,
    title: 'Curry Recipes',
    slug: 'curry-recipes',
    url: '/cookbook/curry-recipes',
  },
  {
    id: 20,
    title: 'Meatball Recipes',
    slug: 'meatball-recipes',
    url: '/cookbook/meatball-recipes',
  },
  {
    id: 21,
    title: 'Risotto Recipes',
    slug: 'risotto-recipes',
    url: '/cookbook/risotto-recipes',
  },
  {
    id: 22,
    title: 'Salad Recipes',
    slug: 'salad-recipes',
    url: '/cookbook/salad-recipes',
  },
  {
    id: 23,
    title: 'Stew Recipes',
    slug: 'stew-recipes',
    url: '/cookbook/stew-recipes',
  },
  {
    id: 24,
    title: 'Stir Fry Recipes',
    slug: 'stir-fry-recipes',
    url: '/cookbook/stir-fry-recipes',
  },
  {
    id: 25,
    title: 'Bacon Recipes',
    slug: 'bacon-recipes',
    url: '/cookbook/bacon-recipes',
  },
  {
    id: 26,
    title: 'Beef Recipes',
    slug: 'beef-recipes',
    url: '/cookbook/beef-recipes',
  },
  {
    id: 27,
    title: 'Chicken Recipes',
    slug: 'chicken-recipes',
    url: '/cookbook/chicken-recipes',
  },
  {
    id: 28,
    title: 'Egg Recipes',
    slug: 'egg-recipes',
    url: '/cookbook/egg-recipes',
  },
  {
    id: 29,
    title: 'Fish Recipes',
    slug: 'fish-recipes',
    url: '/cookbook/fish-recipes',
  },
  {
    id: 30,
    title: 'Halloumi Recipes',
    slug: 'halloumi-recipes',
    url: '/cookbook/halloumi-recipes',
  },
  {
    id: 31,
    title: 'Lamb Recipes',
    slug: 'lamb-recipes',
    url: '/cookbook/lamb-recipes',
  },
  {
    id: 32,
    title: 'Mushroom Recipes',
    slug: 'mushroom-recipes',
    url: '/cookbook/mushroom-recipes',
  },
  {
    id: 33,
    title: 'Noodle Recipes',
    slug: 'noodle-recipes',
    url: '/cookbook/noodle-recipes',
  },
  {
    id: 34,
    title: 'Pasta Recipes',
    slug: 'pasta-recipes',
    url: '/cookbook/pasta-recipes',
  },
  {
    id: 35,
    title: 'Pork Recipes',
    slug: 'pork-recipes',
    url: '/cookbook/pork-recipes',
  },
  {
    id: 36,
    title: 'Rice Recipes',
    slug: 'rice-recipes',
    url: '/cookbook/rice-recipes',
  },
  {
    id: 37,
    title: 'Prawn Recipes',
    slug: 'prawn-recipes',
    url: '/cookbook/prawn-recipes',
  },
  {
    id: 38,
    title: 'Sausage Recipes',
    slug: 'sausage-recipes',
    url: '/cookbook/sausage-recipes',
  },
  {
    id: 39,
    title: 'Salmon Recipes',
    slug: 'salmon-recipes',
    url: '/cookbook/salmon-recipes',
  },
  {
    id: 40,
    title: 'Steak Recipes',
    slug: 'steak-recipes',
    url: '/cookbook/steak-recipes',
  },
  {
    id: 41,
    title: 'Sweet Potato Recipes',
    slug: 'sweet-potato-recipes',
    url: '/cookbook/sweet-potato-recipes',
  },
  {
    id: 42,
    title: 'Tofu Recipes',
    slug: 'tofu-recipes',
    url: '/cookbook/tofu-recipes',
  },
  {
    id: 43,
    title: 'Turkey Recipes',
    slug: 'turkey-recipes',
    url: '/cookbook/turkey-recipes',
  },
  {
    id: 44,
    title: 'Vegetarian Recipes',
    slug: 'vegetarian-recipes',
    url: '/cookbook/vegetarian-recipes',
  },
  {
    id: 45,
    title: 'One Pot Meals',
    slug: 'one-pot-meals',
    url: '/cookbook/one-pot-meals',
  },
  {
    id: 46,
    title: 'Ten Minute Recipes',
    slug: 'ten-minute-recipes',
    url: '/cookbook/ten-minute-recipes',
  },
  {
    id: 47,
    title: '600 Calorie Meals',
    slug: '600-calorie-meals',
    url: '/cookbook/600-calorie-meals',
  },
  {
    id: 48,
    title: 'Dairy Free Recipes',
    slug: 'dairy-free-recipes',
    url: '/cookbook/dairy-free-recipes',
  },
  {
    id: 49,
    title: 'Gluten Free Recipes',
    slug: 'gluten-free-recipes',
    url: '/cookbook/gluten-free-recipes',
  },
  {
    id: 50,
    title: 'Leek Recipes',
    slug: 'leek-recipes',
    url: '/cookbook/leek-recipes',
  },
  {
    id: 51,
    title: 'Low Calorie Recipes',
    slug: 'low-calorie-recipes',
    url: '/cookbook/low-calorie-recipes',
  },
  {
    id: 52,
    title: 'Plant-Based Recipes',
    slug: 'plant-based-recipes',
    url: '/cookbook/plant-based-recipes',
  },
  {
    id: 53,
    title: 'Chicken Breast Recipes',
    slug: 'chicken-breast-recipes',
    url: '/cookbook/chicken-breast-recipes',
  },
  {
    id: 54,
    title: 'Chicken Thigh Recipes',
    slug: 'chicken-thigh-recipes',
    url: '/cookbook/chicken-thigh-recipes',
  },
  {
    id: 55,
    title: 'Soup Recipes',
    slug: 'soup-recipes',
    url: '/cookbook/soup-recipes',
  },
  {
    id: 56,
    title: 'Aubergine Recipes',
    slug: 'aubergine-recipes',
    url: '/cookbook/aubergine-recipes',
  },
  {
    id: 57,
    title: 'Avocado Recipes',
    slug: 'avocado-recipes',
    url: '/cookbook/avocado-recipes',
  },
  {
    id: 58,
    title: 'Cod Recipes',
    slug: 'cod-recipes',
    url: '/cookbook/cod-recipes',
  },
  {
    id: 59,
    title: 'Mince Recipes',
    slug: 'mince-recipes',
    url: '/cookbook/mince-recipes',
  },
  {
    id: 60,
    title: 'Quinoa Recipes',
    slug: 'quinoa-recipes',
    url: '/cookbook/quinoa-recipes',
  },
  {
    id: 61,
    title: 'Cauliflower Recipes',
    slug: 'cauliflower-recipes',
    url: '/cookbook/cauliflower-recipes',
  },
  {
    id: 62,
    title: 'Kale Recipes',
    slug: 'kale-recipes',
    url: '/cookbook/kale-recipes',
  },
  {
    id: 63,
    title: 'Sea Bass Recipes',
    slug: 'sea-bass-recipes',
    url: '/cookbook/sea-bass-recipes',
  },
  {
    id: 64,
    title: 'Lentil Recipes',
    slug: 'lentil-recipes',
    url: '/cookbook/lentil-recipes',
  },
  {
    id: 65,
    title: 'Pork Fillet Recipes',
    slug: 'pork-fillet-recipes',
    url: '/cookbook/pork-fillet-recipes',
  },
  {
    id: 66,
    title: 'Pumpkin Recipes',
    slug: 'pumpkin-recipes',
    url: '/cookbook/pumpkin-recipes',
  },
  {
    id: 67,
    title: 'Chickpea Recipes',
    slug: 'chickpea-recipes',
    url: '/cookbook/chickpea-recipes',
  },
  {
    id: 68,
    title: 'Beetroot Recipes',
    slug: 'beetroot-recipes',
    url: '/cookbook/beetroot-recipes',
  },
  {
    id: 69,
    title: 'Red Cabbage Recipes',
    slug: 'red-cabbage-recipes',
    url: '/cookbook/red-cabbage-recipes',
  },
  {
    id: 70,
    title: 'Haddock Recipes',
    slug: 'haddock-recipes',
    url: '/cookbook/haddock-recipes',
  },
]
export const getCategoryStructuredData = (category) => {
  return {
    '@context': 'http://schema.org/',
    '@type': ['ItemList', 'Recipe'],
    name: category.title,
    description: category.description,
    author: {
      '@type': 'Organization',
      '@id': 'https://www.gousto.co.uk/',
      name: 'Gousto',
      url: 'https://www.gousto.co.uk/cookbook/vegan-recipes',
    },
    image: {
      '@type': 'ImageObject',
      representativeOfPage: 'True',
      url: category.representativeRecipe.media[0].url,
    },

    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: 68,

    itemListElement: category.recipes.map(
      ({ title, description, media, cuisine }, index) => {
        return {
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Recipe',
            name: title,
            description,
            recipeCuisine: cuisine,
            image: {
              '@type': 'ImageObject',
              url: media[0].url,
            },
          },
        }
      },
    ),
  }
}

function App() {
  const category = mockCategories[1]
  const { title } = category
  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
        <script type="application/ld+json">
          {JSON.stringify(getCategoryStructuredData(category))}
        </script>
      </Helmet>
      <header className="App-header">
        Let's pretend I am a category page. I am a poc of the structured data.
      </header>
    </div>
  )
}

export default App
