import { MenuItem } from '../types';

export const MENU_CATEGORIES = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'tea', label: 'Tea' },
  { id: 'chai', label: 'Signature Chai' },
  { id: 'snacks', label: 'Snacks & Bites' },
  { id: 'desserts', label: 'Desserts' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'c-1',
    name: 'Artisan Espresso',
    category: 'coffee',
    description: 'Double shot of single-origin Chikmagalur Arabica with rich crema, cocoa notes, and velvet mouthfeel.',
    price: '₹140',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature',
    originOrNotes: 'Chikmagalur Single Estate • Dark Roast'
  },
  {
    id: 'c-2',
    name: 'Classic Velvet Cappuccino',
    category: 'coffee',
    description: 'Equal parts rich espresso, steamed milk, and a silky mountain of micro-foam, dusted with Valrhona cocoa.',
    price: '₹190',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    tag: 'Bestseller',
    originOrNotes: 'Estate Arabica • Silky Microfoam'
  },
  {
    id: 'c-3',
    name: 'Silky Café Latte',
    category: 'coffee',
    description: 'Smooth espresso gently blended with delicate steamed milk and topped with intricate hand-poured latte art.',
    price: '₹210',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    originOrNotes: 'Mild & Creamy'
  },
  {
    id: 'c-4',
    name: 'Dark Mocha Noir',
    category: 'coffee',
    description: 'Decadent 70% dark Belgian chocolate melted with full-bodied espresso and warm steamed whole milk.',
    price: '₹240',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80',
    tag: 'Chef Special',
    originOrNotes: 'Belgian Chocolate & Espresso'
  },
  {
    id: 'c-5',
    name: 'Signature Iced Cold Coffee',
    category: 'coffee',
    description: 'Slow-churned cold espresso with chilled vanilla cream, organic brown sugar, and coffee drizzle.',
    price: '₹220',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular',
    originOrNotes: 'Served Over Ice • Thick Shake'
  },
  {
    id: 'c-6',
    name: 'Spanish Caramel Latte',
    category: 'coffee',
    description: 'Sweet condensed milk base layered with espresso, warm textured milk, and sea salt caramel drizzle.',
    price: '₹250',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    originOrNotes: 'Rich Caramel & Sea Salt'
  },

  // TEA
  {
    id: 't-1',
    name: 'First Flush Darjeeling Gold',
    category: 'tea',
    description: 'Champagne of teas harvested from misty high-altitude gardens. Delicate floral muscatel notes.',
    price: '₹180',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature',
    originOrNotes: 'Single Estate Darjeeling'
  },
  {
    id: 't-2',
    name: 'Peach & Hibiscus Iced Brew',
    category: 'tea',
    description: '12-hour cold steeped organic hibiscus petals infused with white peach puree and fresh garden mint.',
    price: '₹210',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    tag: 'Bestseller',
    originOrNotes: 'Caffeine-Free Herbal Infusion'
  },
  {
    id: 't-3',
    name: 'Earl Grey Lavender infusion',
    category: 'tea',
    description: 'Ceylon black tea infused with natural bergamot oil, blue cornflowers, and organic French culinary lavender.',
    price: '₹190',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
    originOrNotes: 'Citrus Bergamot & Floral'
  },
  {
    id: 't-4',
    name: 'Moroccan Mint Green Tea',
    category: 'tea',
    description: 'Tender green tea pearls gently simmered with aromatic spearmint leaves and a touch of wild honey.',
    price: '₹170',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    originOrNotes: 'Refreshing & Antioxidant Rich'
  },

  // SIGNATURE CHAI
  {
    id: 'ch-1',
    name: 'Royal Kashmiri Noon / Pink Chai',
    category: 'chai',
    description: 'Authentic slow-simmered Kashmiri green tea leaves, whole milk, sea salt, cardamom, and toasted slivered pistachios.',
    price: '₹190',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature',
    originOrNotes: 'Tradition of Kashmir • Crushed Almonds & Pistachio'
  },
  {
    id: 'ch-2',
    name: 'Slow-Brewed Kulhad Masala Chai',
    category: 'chai',
    description: 'Full-bodied Assam tea leaves boiled with fresh crushed ginger, green cardamom, cloves, and cinnamon in an earthen clay pot.',
    price: '₹120',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    tag: 'Bestseller',
    originOrNotes: 'Earthen Clay Aroma • 7 Whole Spices'
  },
  {
    id: 'ch-3',
    name: 'Desert Sand Brew Chai',
    category: 'chai',
    description: 'Brewed over heated desert sand for gentle, even caramelization. Infused with saffron strands and mace.',
    price: '₹170',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80',
    tag: 'Chef Special',
    originOrNotes: 'Hot Sand Kettle Method'
  },
  {
    id: 'ch-4',
    name: 'Kesar Elaichi Kadak Chai',
    category: 'chai',
    description: 'Robust tea simmered with generous strands of Kashmiri Mongra saffron and freshly pounded green cardamom pods.',
    price: '₹160',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    originOrNotes: 'Pure Kashmiri Saffron'
  },

  // SNACKS & BITES
  {
    id: 's-1',
    name: 'Crispy Golden Corn Rolls',
    category: 'snacks',
    description: 'Crispy pastry rolls filled with sweet corn kernels, mozzarella, herbs, and mild jalapeño spices. Served with house chili dip.',
    price: '₹220',
    image: 'https://images.unsplash.com/photo-1623253083987-26681ce4a992?auto=format&fit=crop&w=800&q=80',
    tag: 'Bestseller',
    originOrNotes: 'House Specialty • 4 Pcs with Dip'
  },
  {
    id: 's-2',
    name: 'Smoked Paneer & Pesto Panini',
    category: 'snacks',
    description: 'Fresh artisanal sourdough grilled with smoked cottage cheese, house basil pesto, sun-dried tomatoes, and melted provolone.',
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature',
    originOrNotes: 'Artisanal Sourdough'
  },
  {
    id: 's-3',
    name: 'Artisan Cheesy Garlic Loaf',
    category: 'snacks',
    description: 'Pull-apart sourdough baguette infused with roasted garlic butter, fresh rosemary, and bubbly Wisconsin mozzarella.',
    price: '₹240',
    image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?auto=format&fit=crop&w=800&q=80',
    originOrNotes: 'Roasted Garlic Butter & Herbs'
  },
  {
    id: 's-4',
    name: 'Truffle & Herb Loaded Crispy Fries',
    category: 'snacks',
    description: 'Hand-cut golden skin-on potatoes tossed in white truffle essence, shaved aged parmesan, and cracked pepper.',
    price: '₹210',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    originOrNotes: 'Hand-Cut • Shaved Parmesan'
  },
  {
    id: 's-5',
    name: 'Creamy Sun-Dried Tomato Penne',
    category: 'snacks',
    description: 'Al dente penne pasta tossed in a velvety roasted red bell pepper and sun-dried tomato sauce with kalamata olives and basil.',
    price: '₹320',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular',
    originOrNotes: 'Handcrafted Italian Sauce'
  },
  {
    id: 's-6',
    name: 'Warm Mediterranean Grilled Wrap',
    category: 'snacks',
    description: 'Tortilla stuffed with spiced falafel or grilled paneer, crisp greens, hummus, pickled cucumbers, and tahini drizzle.',
    price: '₹260',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    originOrNotes: 'Served with Herb Wedges'
  },

  // DESSERTS
  {
    id: 'd-1',
    name: 'Belgian Molten Lava Cake',
    category: 'desserts',
    description: 'Warm dark chocolate sponge cake with a luscious flowing molten center. Served with Madagascan vanilla bean gelato.',
    price: '₹260',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature',
    originOrNotes: 'Valrhona Dark Chocolate'
  },
  {
    id: 'd-2',
    name: 'Classic New York Blueberry Cheesecake',
    category: 'desserts',
    description: 'Silky smooth baked Philadelphia cream cheese on a buttery graham crust, crowned with wild blueberry compote.',
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    tag: 'Bestseller',
    originOrNotes: 'Philadelphia Cream Cheese'
  },
  {
    id: 'd-3',
    name: 'Traditional Coffee Tiramisu',
    category: 'desserts',
    description: 'Espresso-soaked Savoiardi ladyfingers layered with whipped mascarpone cream and generous cocoa dust.',
    price: '₹290',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    originOrNotes: 'Italian Classic'
  },
  {
    id: 'd-4',
    name: 'Warm Walnut Chocolate Brownie',
    category: 'desserts',
    description: 'Fudgy dark chocolate brownie packed with toasted California walnuts, topped with warm Belgian fudge drizzle.',
    price: '₹210',
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=800&q=80',
    originOrNotes: 'Fudgy & Warm'
  }
];
