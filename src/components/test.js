const op
  const vegOptions=[
    { 
      category:[veg,nonveg]    
      mcuisine:Indian
      mmenu:
    }
    {
      mcuisine:Chinese
      mmenu:
    }
    {
      mcuisine:Italian
      mmenu:
    }
  ]
const nonVegOptions=[
  {
    nmcuisine:
    nmmenu:

  }
  {
    nmcuisine:
    nmmenu:

  }
  {
    nmcuisine:
    nmmenu:

  }
]



 function OptionHandle(){
  const m1 = dict.map((data)=>data.{details.category})
{dict[details.category][details.cuisine].map((option,index)=>(<option key={index} value = {option}>{option}<option/>))}
return m2
       }  

       (dict.map((data)=>data.{details.category})).map((data2)=>data2.{details.cuisine})


{dict[details.category][details.cuisine].map((option,index)=>(<option key={index} value = {option}>{option}<option/>))}

 const defaultProps = {
    
    options: 
   (dict.map((data)=><p>data.(details.category)</p>)).map((data2)=>data2.(details.cuisine))
    //getOptionLabel: (option: FilmOptionType) => option.title,
  }






 const dict = [
    {
      Veg: [
        {
          Indian: ['Puran poli', ' puri bhaji', 'pav bhaji'],
          Chinese: [
            'Veg Machurian',
            'Honey chilli potatos',
            'Veg spring rolls',
          ],
          Italian: [
            'Four-Cheese Stuffed Shells',
            'White Bean Soup',
            'Arborio Rice',
          ],
        },
      ],
      Non_veg: [
        {
          Indian: ['chicken kolhapuri', 'mutton handi', 'fish fry'],
          Chinese: [
            ' Chicken Manchow Soup',
            'Chicken Lollipops',
            'Egg And Garlic Fried Rice',
          ],
          Italian: [
            'Penne Arrabiata Chicken',
            'Chicken Pesto Fusilli',
            'Chicken Stroganoff',
          ],
        },
      ],
    },
  ]







  {
                <Autocomplete
                  {...defaultProps}
                  disabled={!checked.veg && !checked.nonveg}
                  id='disable-clearable'
                  disableClearable
                  //fetOptionLabel={(option) => option.veg}
                  renderInput={(params) => (
                    <TextField {...params} label='Menu*' variant='standard' />
                  )}
                />
              }




              