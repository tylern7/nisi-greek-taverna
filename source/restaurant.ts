export const LINKS = {
  reserve: "https://www.opentable.ca/r/nisi-greek-taverna-burlington",
  group: "https://www.nisigreek.ca/group-reservations",
  uber:
    "https://www.ubereats.com/ca/store/nisi-greek-taverna/g6tyfICnTbOUssDXY2j6Hg",
  instagram: "https://www.instagram.com/nisigreektaverna/",
  tiktok: "https://www.tiktok.com/@nisigreektaverna",
  maps: "https://www.google.com/maps/search/?api=1&query=Nisi+Greek+Taverna+1455+Lakeshore+Rd+Burlington+ON",
  phone: "tel:+19056310304",
  phoneLabel: "(905) 631-0304",
} as const;

export const HOURS: { day: string; hours: string; key: number }[] = [
  { day: "Monday", hours: "11:30 am – 10:00 pm", key: 1 },
  { day: "Tuesday", hours: "11:30 am – 10:00 pm", key: 2 },
  { day: "Wednesday", hours: "11:30 am – 10:00 pm", key: 3 },
  { day: "Thursday", hours: "11:30 am – 10:00 pm", key: 4 },
  { day: "Friday", hours: "11:30 am – 11:00 pm", key: 5 },
  { day: "Saturday", hours: "11:30 am – 11:00 pm", key: 6 },
  { day: "Sunday", hours: "11:30 am – 10:00 pm", key: 0 },
];

export type Price = { label: string; price: string };
export type Dish = { name: string; desc?: string; price?: string; prices?: Price[] };
export type Group = { title: string; note?: string; items: Dish[] };
export type Menu = { id: string; label: string; blurb: string; groups: Group[] };

export const MENUS: Menu[] = [
  {
    id: "dinner",
    label: "Dinner",
    blurb:
      "Dinner is served Monday to Friday, 3 pm to close, and all day Saturday and Sunday.",
    groups: [
      {
        title: "Mezze / Starters",
        items: [
          {
            name: "Saganaki",
            desc: "Golden pan-seared kefalotyri cheese, served sizzling in a cast iron skillet, flambéed tableside with St-Rémy brandy and finished with a kiss of fresh lemon.",
            price: "21",
          },
          {
            name: "Spanakopita",
            desc: "Crispy phyllo pastry stuffed with spinach and mixed cheese, baked until golden and flaky (4 pc).",
            price: "19",
          },
          {
            name: "Grilled Kalamari",
            desc: "Char-grilled calamari finished with extra virgin olive oil, fresh lemon and oregano, served with house-made tzatziki.",
            price: "26",
          },
          {
            name: "Fried Kalamari",
            desc: "Lightly fried calamari served with house-made tzatziki and lemon.",
            price: "26",
          },
          {
            name: "Octopus",
            desc: "Char-grilled and finished with extra virgin olive oil, fresh lemon and oregano, served with house-made tzatziki (2 pc).",
            price: "36",
          },
        ],
      },
      {
        title: "Dips",
        note: "Served with pita bread.",
        items: [
          {
            name: "Tzatziki",
            desc: "House-made Greek yogurt dip with cucumber, garlic and olive oil.",
            price: "14",
          },
          {
            name: "Eggplant",
            desc: "House-made roasted eggplant dip blended with olive oil, garlic, green onions, red peppers and fresh parsley.",
            price: "12",
          },
          {
            name: "Tirokafteri",
            desc: "Nisi’s spicy Greek feta dip with chili peppers, roasted red peppers, yogurt and olive oil.",
            price: "12",
          },
          {
            name: "Hummus",
            desc: "Smooth house-made hummus blended with chickpeas, garlic, fresh lemon and extra virgin olive oil.",
            price: "12",
          },
          { name: "Trio Dip", desc: "Eggplant, tirokafteri and hummus.", price: "32" },
        ],
      },
      {
        title: "Soups & Salads",
        items: [
          {
            name: "Horitaki / Village Salad",
            desc: "Vine-ripened tomatoes, cucumbers, onions, green peppers, Kalamata olives and feta, finished with olive oil.",
            price: "18",
          },
          {
            name: "Elliniki / Greek Salad",
            desc: "Crisp lettuce, tomatoes, onions, cucumber, Kalamata olives and feta, finished with Nisi dressing.",
            price: "17",
          },
          {
            name: "Avgolomeno Soupa",
            desc: "Greek lemon chicken soup with rice, finished with egg.",
            price: "12",
          },
        ],
      },
      {
        title: "Mains",
        note: "Your choice of two sides: seasoned rice, roasted potatoes or grilled vegetables.",
        items: [
          {
            name: "Souvlaki",
            desc: "Two Greek-marinated chicken or pork skewers grilled with lemon and herbs.",
            price: "31",
          },
          {
            name: "Beef Souvlaki",
            desc: "Two tenderloin beef skewers marinated with Mediterranean herbs and grilled over open flame.",
            price: "46",
          },
          {
            name: "Gyro",
            desc: "Beef and lamb gyro, shaved from the rotisserie and finished with Greek seasoning.",
            price: "31",
          },
          {
            name: "Braised Lamb Shank",
            desc: "Slow-braised lamb shank with Mediterranean herbs, cooked until fall-off-the-bone tender.",
            price: "50",
          },
          {
            name: "Salmon",
            desc: "Grilled Atlantic salmon seasoned with Greek herbs and finished with lemon.",
            price: "36",
          },
          {
            name: "Spanakopita",
            desc: "Crispy phyllo stuffed with spinach and mixed cheese (4 pc).",
            price: "31",
          },
          {
            name: "Nisi Burger & Fries",
            desc: "8 oz house-made AAA striploin patty, provolone, lettuce, tomato, onion and roasted garlic aioli on a toasted bun, with fries.",
            price: "31",
          },
          {
            name: "Chicken Pesto Penne",
            desc: "Penne in basil pesto with Greek-marinated chicken, served with garlic bread.",
            price: "28",
          },
          {
            name: "Moussaka",
            desc: "Eggplant, potato, zucchini and seasoned ground beef under béchamel, with garlic bread.",
            price: "31",
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          { name: "Baklava", desc: "Walnuts, syrup and crushed pistachios.", price: "12" },
          { name: "Baklava with Ice Cream", desc: "Walnuts, syrup, pistachios and ice cream.", price: "15" },
          { name: "Ekmek", desc: "Shredded phyllo, custard and whipped cream.", price: "12" },
          { name: "Cheesecake", desc: "Classic vanilla cheesecake with mixed berry compote.", price: "12" },
          { name: "Banana Melt", desc: "Banana wrapped in phyllo with Nutella, ice cream and pistachios.", price: "15" },
        ],
      },
      {
        title: "Sides",
        items: [
          { name: "Veggie Skewer", price: "12" },
          { name: "Roasted Potatoes", price: "11" },
          { name: "Seasoned Rice", price: "8" },
          { name: "Village Salad", price: "12" },
          { name: "Fries", price: "11" },
          { name: "Chicken Skewer", price: "13" },
          { name: "Gyro", price: "15" },
          { name: "Beef Skewer", price: "19" },
          { name: "Octopus", price: "18" },
          { name: "Tiger Shrimp", price: "21" },
        ],
      },
      {
        title: "Kids",
        items: [
          { name: "Chicken Fingers", desc: "3 pieces with fries.", price: "11" },
          { name: "Souvlaki", desc: "One skewer of chicken or pork with fries.", price: "11" },
          { name: "Cheeseburger", desc: "AAA striploin patty, provolone, toasted bun and fries.", price: "16" },
        ],
      },
    ],
  },
  {
    id: "lunch",
    label: "Lunch",
    blurb: "Lunch is served Monday to Friday, 11:30 am to 3:00 pm.",
    groups: [
      {
        title: "Pitas & Wraps",
        note: "Choose one side: soup, Greek salad or fresh-cut fries. Pitas and wraps include tomatoes, onions, fries and house-made tzatziki.",
        items: [
          {
            name: "Souvlaki",
            desc: "One Greek-marinated chicken, pork or beef skewer with lemon and herbs.",
            prices: [
              { label: "Chicken", price: "22" },
              { label: "Pork", price: "22" },
              { label: "Beef", price: "25" },
            ],
          },
          {
            name: "Gyro",
            desc: "Beef and lamb, shaved from the rotisserie and finished with Greek seasoning.",
            price: "22",
          },
          {
            name: "Nisi Wrap",
            desc: "Grilled tortilla with peppers, onions, mozzarella and roasted garlic aioli.",
            prices: [
              { label: "Chicken", price: "24" },
              { label: "Pork", price: "24" },
              { label: "Gyro", price: "24" },
            ],
          },
          {
            name: "Veggie Pita",
            desc: "Lettuce, tomatoes, onions, green peppers, cucumbers, feta and tzatziki.",
            price: "21",
          },
        ],
      },
      {
        title: "Mains",
        note: "Choose two sides: seasoned rice, roasted potatoes or a grilled vegetable skewer.",
        items: [
          {
            name: "Souvlaki",
            desc: "One Greek-marinated skewer with lemon and herbs.",
            prices: [
              { label: "Chicken", price: "24" },
              { label: "Pork", price: "24" },
              { label: "Beef", price: "27" },
            ],
          },
          { name: "Gyro", desc: "Beef and lamb gyro with Greek seasoning.", price: "31" },
          { name: "Spanakopita", desc: "Spinach and mixed cheese phyllo, 4 pieces.", price: "31" },
          {
            name: "Moussaka",
            desc: "Eggplant, potato, zucchini and ground beef under béchamel, with garlic bread.",
            price: "31",
          },
          {
            name: "Nisi Burger & Fries",
            desc: "8 oz AAA striploin patty, provolone, lettuce, tomato, onion, roasted garlic aioli and fries.",
            price: "31",
          },
        ],
      },
      {
        title: "Add on",
        items: [
          { name: "Veggie Skewer", price: "12" },
          { name: "Roasted Potatoes", price: "11" },
          { name: "Seasoned Rice", price: "8" },
          { name: "Village Salad", price: "12" },
          { name: "Greek Salad", price: "11" },
          { name: "Gyro", price: "15" },
          { name: "Octopus", price: "18" },
          { name: "Atlantic Salmon", price: "21" },
          { name: "Tiger Shrimp", price: "21" },
        ],
      },
      {
        title: "Kids",
        items: [
          { name: "Chicken Fingers", desc: "3 pieces with fries.", price: "11" },
          { name: "Souvlaki", desc: "One skewer of chicken or pork with fries.", price: "11" },
          { name: "Cheeseburger", desc: "AAA striploin patty, provolone, toasted bun and fries.", price: "16" },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    blurb: "Signature cocktails, Greek and old-world wine, and a local tap list.",
    groups: [
      {
        title: "Signature cocktails",
        items: [
          { name: "Nisi Breeze", desc: "Tarsier lychee and raspberry gin, blue curaçao, pineapple juice.", price: "16" },
          { name: "Golden Isle", desc: "Teremana reposado, lime, pineapple juice, jalapeño syrup.", price: "17" },
          { name: "Sunset in Mykonos", desc: "Empress 1908 gin, St-Germain, Cointreau, lime, dragon fruit.", price: "18" },
          { name: "Aphrodyte’s Kiss", desc: "Iceberg vodka, limoncello, peach schnapps, lemon, orange syrup, ginger ale.", price: "17" },
          { name: "Santorini Sour", desc: "Metaxa 7 Star brandy, lemon, egg white, syrup, Angostura, house red wine.", price: "16" },
          { name: "Aegean After Dark", desc: "Salk & Barrel whiskey, Greek honey, chocolate bitters, apple smoke.", price: "18" },
          { name: "Mediterranean Sol", desc: "Rémy Martin VSOP, Montenegro amaro, Disaronno, lime.", price: "17" },
          { name: "Sun-Kissed Citrus Punch", desc: "Bumbu rum, Mount Gay rum, pineapple, passionfruit, lime.", price: "17" },
          { name: "Coastal Berry Spritz", desc: "Empress 1908 elderflower rose gin, strawberries, limoncello, prosecco, soda.", price: "17" },
        ],
      },
      {
        title: "Prohibition",
        note: "Zero-proof.",
        items: [
          { name: "Blackberry Spritzer", desc: "Non-alcoholic prosecco, blackberries, lemon, orange, cinnamon syrup, soda.", price: "12" },
          { name: "Strawberry Pineapple Mojito", desc: "Non-alcoholic rum, mint, strawberries, pineapple, lime, soda.", price: "12" },
          { name: "Ginger Peach Mule", desc: "Non-alcoholic gin, peaches, mint, syrup, ginger beer.", price: "12" },
          { name: "Mango Cranberry Margarita", desc: "Non-alcoholic tequila, mango, cranberry, lime.", price: "12" },
        ],
      },
      {
        title: "White wine",
        items: [
          { name: "Punti Ferrer Sauvignon Blanc", desc: "Chile", prices: glass("10", "16", "42") },
          { name: "Octavo Arte Verdejo", desc: "Spain", prices: glass("11", "17", "45") },
          { name: "Tomillar Airén", desc: "Spain", prices: glass("11", "17", "45") },
          { name: "La Delizia Pinot Grigio", desc: "Italy", prices: glass("13", "19", "51") },
          { name: "Château du Mus Chardonnay", desc: "France", prices: glass("14", "20", "54") },
          { name: "Château du Mus Sauvignon Blanc", desc: "France", prices: glass("14", "20", "54") },
          { name: "Misty Cove Sauvignon Blanc", desc: "New Zealand", prices: glass("16", "22", "60") },
          { name: "Panagiotopoulos Malagousia", desc: "Greece", prices: glass("21", "27", "75") },
          { name: "Panagiotopoulos Chardonnay", desc: "Greece", prices: [{ label: "Bottle", price: "85" }] },
          { name: "Antonutti Pinot Grigio", desc: "Italy", prices: [{ label: "Bottle", price: "80" }] },
        ],
      },
      {
        title: "Red wine",
        items: [
          { name: "Punti Ferrer Cabernet Sauvignon", desc: "Chile", prices: glass("10", "16", "42") },
          { name: "Octavo Arte Syrah", desc: "Spain", prices: glass("11", "17", "45") },
          { name: "Château du Mus Pinot Noir", desc: "France", prices: glass("14", "20", "54") },
          { name: "Sangiovese Il Lupo", desc: "Italy", prices: glass("15", "21", "57") },
          { name: "Valle Secreto Key Grand Cabernet", desc: "Chile", prices: glass("15", "21", "57") },
          { name: "Bachellery Pinot Noir", desc: "France", prices: glass("17", "23", "63") },
          { name: "Filia Ghi The Duck", desc: "Greece", prices: glass("18", "24", "67") },
          { name: "Aglianico del Vulture Verbo", desc: "Italy", prices: [{ label: "Bottle", price: "74" }] },
          { name: "Bordeaux Château Fleur", desc: "France", prices: [{ label: "Bottle", price: "80" }] },
        ],
      },
      {
        title: "Rosé & sparkling",
        items: [
          { name: "Tenuta Santome Rosé", desc: "Italy", prices: glass("13", "19", "51") },
          { name: "Tomillar Merlot Rosé", desc: "Spain", prices: glass("11", "17", "45") },
          { name: "Aglianico Rosato Verbo", desc: "Italy", prices: [{ label: "Bottle", price: "74" }] },
          {
            name: "Tenuta Prosecco DOC",
            desc: "Italy",
            prices: [
              { label: "6 oz", price: "9.50" },
              { label: "Bottle", price: "45" },
            ],
          },
        ],
      },
      {
        title: "Sangria",
        items: [
          { name: "Rémy Martin & Punti Ferrer", desc: "Featured red or white.", price: "17" },
        ],
      },
      {
        title: "Beer on tap",
        note: "20 oz. Domestics, locals and imports.",
        items: [
          { name: "Nisi Lager", desc: "4.9%", price: "9" },
          { name: "Nisi Light Lager", desc: "4%", price: "9" },
          { name: "Collective Arts Hazy Session IPA", desc: "4.1%", price: "11" },
          { name: "Collective Arts Local Press Cider", desc: "5.6%", price: "12" },
          { name: "Farm League Big Ticket Kölsch", desc: "5.2%", price: "11" },
          { name: "Cameron’s Ambear Red Ale", desc: "5%", price: "11" },
        ],
      },
      {
        title: "In the fridge",
        items: [
          { name: "Cameron’s Pastime Pilsner", desc: "5%", price: "10" },
          { name: "Cameron’s Captain Log Lager", desc: "5%", price: "10" },
          { name: "Collective Arts Ransack the Universe", desc: "6.8%", price: "11" },
          { name: "Collective Arts Guava Gose", desc: "4.9%", price: "11" },
          { name: "Mythos", desc: "5%", price: "9" },
          { name: "Corona", desc: "4.5%", price: "9" },
          { name: "Corona Sunbrew", desc: "0%", price: "5" },
          { name: "Collective Arts Guava Gose", desc: "0.4%", price: "6" },
        ],
      },
    ],
  },
];

function glass(six: string, nine: string, bottle: string): Price[] {
  return [
    { label: "6 oz", price: six },
    { label: "9 oz", price: nine },
    { label: "Bottle", price: bottle },
  ];
}

export const GALLERY = [
  { src: "/photos/dining.jpg", alt: "Teal banquettes and brass-ring mirrors in the Nisi dining room" },
  { src: "/photos/souvlaki.jpg", alt: "Chicken souvlaki with rice, roasted potatoes and tzatziki" },
  { src: "/photos/bar.jpg", alt: "The bar and dining room at Nisi Greek Taverna, looking toward the street windows" },
  { src: "/photos/salad.jpg", alt: "Horiatiki village salad with a slab of feta, olives and peppers" },
  { src: "/photos/calamari.jpg", alt: "Fried kalamari with tzatziki and lemon" },
  { src: "/photos/lamb.jpg", alt: "Braised lamb shank with seasoned rice and roasted potatoes" },
  { src: "/photos/saganaki.jpg", alt: "A golden baked mezze on a blue plate" },
  { src: "/photos/baklava.jpg", alt: "Baklava with pistachios" },
  { src: "/photos/phyllo.jpg", alt: "Sesame phyllo pastry with walnuts and honey" },
];

/** Service times in 15-minute steps, matching the current group-booking widget. */
export function timeSlots(): string[] {
  const out: string[] = [];
  for (let m = 11 * 60 + 30; m <= 22 * 60 + 30; m += 15) {
    const h24 = Math.floor(m / 60);
    const min = m % 60;
    const suffix = h24 >= 12 ? "p.m." : "a.m.";
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    out.push(`${h12}:${min.toString().padStart(2, "0")} ${suffix}`);
  }
  return out;
}
