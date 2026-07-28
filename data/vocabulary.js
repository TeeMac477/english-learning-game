// Vocabulary data: image-based and Russian translation questions.
// Each category has rounds; each question has:
//   visual (emoji), english, russian, options (English words to pick from)
// The game module decides the mode: image→word, russian→english, or both.
window.VOCABULARY = {
  food: {
    id: 'food',
    icon: '🍎',
    title: 'Food & Drink',
    description: 'Еда и напитки',
    rounds: [
      {
        title: 'Round 1 — Fruit',
        questions: [
          { visual: '🍎', english: 'Apple', russian: 'Яблоко', options: ['Apple', 'Orange', 'Banana', 'Grape'] },
          { visual: '🍌', english: 'Banana', russian: 'Банан', options: ['Pear', 'Banana', 'Lemon', 'Peach'] },
          { visual: '🍊', english: 'Orange', russian: 'Апельсин', options: ['Apple', 'Mango', 'Orange', 'Cherry'] },
          { visual: '🍇', english: 'Grapes', russian: 'Виноград', options: ['Grapes', 'Berries', 'Plums', 'Olives'] },
          { visual: '🍓', english: 'Strawberry', russian: 'Клубника', options: ['Cherry', 'Raspberry', 'Strawberry', 'Cranberry'] },
          { visual: '🍋', english: 'Lemon', russian: 'Лимон', options: ['Lime', 'Lemon', 'Grapefruit', 'Orange'] },
          { visual: '🍑', english: 'Peach', russian: 'Персик', options: ['Peach', 'Apricot', 'Mango', 'Nectarine'] },
          { visual: '🍉', english: 'Watermelon', russian: 'Арбуз', options: ['Melon', 'Watermelon', 'Pumpkin', 'Coconut'] },
          { visual: '🍒', english: 'Cherry', russian: 'Вишня', options: ['Strawberry', 'Cherry', 'Grape', 'Plum'] },
          { visual: '🍐', english: 'Pear', russian: 'Груша', options: ['Apple', 'Avocado', 'Pear', 'Mango'] },
        ],
      },
      {
        title: 'Round 2 — Vegetables',
        questions: [
          { visual: '🥕', english: 'Carrot', russian: 'Морковь', options: ['Carrot', 'Potato', 'Turnip', 'Parsnip'] },
          { visual: '🥔', english: 'Potato', russian: 'Картофель', options: ['Onion', 'Potato', 'Beet', 'Turnip'] },
          { visual: '🍅', english: 'Tomato', russian: 'Помидор', options: ['Pepper', 'Tomato', 'Apple', 'Radish'] },
          { visual: '🥒', english: 'Cucumber', russian: 'Огурец', options: ['Cucumber', 'Courgette', 'Celery', 'Pickle'] },
          { visual: '🧅', english: 'Onion', russian: 'Лук', options: ['Garlic', 'Onion', 'Shallot', 'Leek'] },
          { visual: '🥦', english: 'Broccoli', russian: 'Брокколи', options: ['Cabbage', 'Lettuce', 'Broccoli', 'Spinach'] },
          { visual: '🌽', english: 'Corn', russian: 'Кукуруза', options: ['Corn', 'Wheat', 'Rice', 'Barley'] },
          { visual: '🧄', english: 'Garlic', russian: 'Чеснок', options: ['Onion', 'Ginger', 'Garlic', 'Shallot'] },
          { visual: '🌶️', english: 'Pepper', russian: 'Перец', options: ['Chilli', 'Pepper', 'Tomato', 'Paprika'] },
          { visual: '🥬', english: 'Lettuce', russian: 'Салат', options: ['Spinach', 'Cabbage', 'Lettuce', 'Kale'] },
        ],
      },
      {
        title: 'Round 3 — Drinks & Meals',
        questions: [
          { visual: '☕', english: 'Coffee', russian: 'Кофе', options: ['Tea', 'Coffee', 'Cocoa', 'Espresso'] },
          { visual: '🍵', english: 'Tea', russian: 'Чай', options: ['Coffee', 'Tea', 'Juice', 'Milk'] },
          { visual: '🥛', english: 'Milk', russian: 'Молоко', options: ['Cream', 'Milk', 'Yogurt', 'Water'] },
          { visual: '🧃', english: 'Juice', russian: 'Сок', options: ['Water', 'Soda', 'Juice', 'Smoothie'] },
          { visual: '💧', english: 'Water', russian: 'Вода', options: ['Water', 'Ice', 'Juice', 'Milk'] },
          { visual: '🍞', english: 'Bread', russian: 'Хлеб', options: ['Cake', 'Bread', 'Toast', 'Biscuit'] },
          { visual: '🧀', english: 'Cheese', russian: 'Сыр', options: ['Butter', 'Cheese', 'Cream', 'Yogurt'] },
          { visual: '🥚', english: 'Egg', russian: 'Яйцо', options: ['Egg', 'Bean', 'Nut', 'Seed'] },
          { visual: '🍚', english: 'Rice', russian: 'Рис', options: ['Pasta', 'Rice', 'Oats', 'Flour'] },
          { visual: '🍕', english: 'Pizza', russian: 'Пицца', options: ['Burger', 'Sandwich', 'Pizza', 'Taco'] },
        ],
      },
    ],
  },

  animals: {
    id: 'animals',
    icon: '🐾',
    title: 'Animals',
    description: 'Животные',
    rounds: [
      {
        title: 'Round 1 — Pets & Farm',
        questions: [
          { visual: '🐕', english: 'Dog', russian: 'Собака', options: ['Cat', 'Dog', 'Wolf', 'Fox'] },
          { visual: '🐈', english: 'Cat', russian: 'Кошка', options: ['Cat', 'Rabbit', 'Hamster', 'Dog'] },
          { visual: '🐄', english: 'Cow', russian: 'Корова', options: ['Horse', 'Cow', 'Bull', 'Goat'] },
          { visual: '🐖', english: 'Pig', russian: 'Свинья', options: ['Pig', 'Boar', 'Sheep', 'Dog'] },
          { visual: '🐔', english: 'Chicken', russian: 'Курица', options: ['Duck', 'Chicken', 'Turkey', 'Goose'] },
          { visual: '🐑', english: 'Sheep', russian: 'Овца', options: ['Goat', 'Sheep', 'Lamb', 'Cow'] },
          { visual: '🐴', english: 'Horse', russian: 'Лошадь', options: ['Horse', 'Donkey', 'Zebra', 'Pony'] },
          { visual: '🐇', english: 'Rabbit', russian: 'Кролик', options: ['Hamster', 'Mouse', 'Rabbit', 'Squirrel'] },
          { visual: '🐟', english: 'Fish', russian: 'Рыба', options: ['Fish', 'Shark', 'Whale', 'Dolphin'] },
          { visual: '🐢', english: 'Turtle', russian: 'Черепаха', options: ['Frog', 'Turtle', 'Lizard', 'Snail'] },
        ],
      },
      {
        title: 'Round 2 — Wild Animals',
        questions: [
          { visual: '🦁', english: 'Lion', russian: 'Лев', options: ['Tiger', 'Lion', 'Leopard', 'Cheetah'] },
          { visual: '🐘', english: 'Elephant', russian: 'Слон', options: ['Elephant', 'Hippo', 'Rhino', 'Giraffe'] },
          { visual: '🐻', english: 'Bear', russian: 'Медведь', options: ['Wolf', 'Bear', 'Gorilla', 'Panda'] },
          { visual: '🦊', english: 'Fox', russian: 'Лиса', options: ['Fox', 'Wolf', 'Dog', 'Coyote'] },
          { visual: '🐺', english: 'Wolf', russian: 'Волк', options: ['Fox', 'Dog', 'Wolf', 'Hyena'] },
          { visual: '🦒', english: 'Giraffe', russian: 'Жираф', options: ['Giraffe', 'Deer', 'Camel', 'Horse'] },
          { visual: '🐊', english: 'Crocodile', russian: 'Крокодил', options: ['Lizard', 'Alligator', 'Crocodile', 'Turtle'] },
          { visual: '🦅', english: 'Eagle', russian: 'Орёл', options: ['Hawk', 'Eagle', 'Falcon', 'Owl'] },
          { visual: '🐒', english: 'Monkey', russian: 'Обезьяна', options: ['Ape', 'Monkey', 'Gorilla', 'Chimp'] },
          { visual: '🦋', english: 'Butterfly', russian: 'Бабочка', options: ['Moth', 'Butterfly', 'Dragonfly', 'Bee'] },
        ],
      },
    ],
  },

  body: {
    id: 'body',
    icon: '🧍',
    title: 'Body Parts',
    description: 'Части тела',
    rounds: [
      {
        title: 'Round 1 — Head & Face',
        questions: [
          { visual: '👀', english: 'Eyes', russian: 'Глаза', options: ['Ears', 'Eyes', 'Nose', 'Mouth'] },
          { visual: '👃', english: 'Nose', russian: 'Нос', options: ['Nose', 'Chin', 'Cheek', 'Lip'] },
          { visual: '👄', english: 'Mouth', russian: 'Рот', options: ['Ear', 'Nose', 'Mouth', 'Eye'] },
          { visual: '👂', english: 'Ear', russian: 'Ухо', options: ['Eye', 'Ear', 'Nose', 'Chin'] },
          { visual: '🦷', english: 'Tooth', russian: 'Зуб', options: ['Tooth', 'Tongue', 'Lip', 'Gum'] },
          { visual: '👅', english: 'Tongue', russian: 'Язык', options: ['Lip', 'Tooth', 'Tongue', 'Cheek'] },
          { visual: '🧠', english: 'Brain', russian: 'Мозг', options: ['Heart', 'Brain', 'Lung', 'Skull'] },
          { visual: '💇', english: 'Hair', russian: 'Волосы', options: ['Head', 'Hair', 'Hat', 'Beard'] },
        ],
      },
      {
        title: 'Round 2 — Body & Limbs',
        questions: [
          { visual: '💪', english: 'Arm', russian: 'Рука', options: ['Leg', 'Arm', 'Shoulder', 'Wrist'] },
          { visual: '🤚', english: 'Hand', russian: 'Ладонь', options: ['Foot', 'Hand', 'Finger', 'Fist'] },
          { visual: '🦶', english: 'Foot', russian: 'Стопа', options: ['Knee', 'Ankle', 'Foot', 'Toe'] },
          { visual: '🦵', english: 'Leg', russian: 'Нога', options: ['Arm', 'Leg', 'Hip', 'Thigh'] },
          { visual: '☝️', english: 'Finger', russian: 'Палец', options: ['Finger', 'Thumb', 'Nail', 'Wrist'] },
          { visual: '❤️', english: 'Heart', russian: 'Сердце', options: ['Liver', 'Heart', 'Lung', 'Stomach'] },
          { visual: '🫁', english: 'Lungs', russian: 'Лёгкие', options: ['Heart', 'Lungs', 'Kidneys', 'Liver'] },
          { visual: '🦴', english: 'Bone', russian: 'Кость', options: ['Muscle', 'Bone', 'Joint', 'Skin'] },
        ],
      },
    ],
  },

  clothes: {
    id: 'clothes',
    icon: '👕',
    title: 'Clothes',
    description: 'Одежда',
    rounds: [
      {
        title: 'Round 1 — Everyday Clothes',
        questions: [
          { visual: '👕', english: 'T-shirt', russian: 'Футболка', options: ['Shirt', 'T-shirt', 'Jacket', 'Vest'] },
          { visual: '👖', english: 'Trousers', russian: 'Брюки', options: ['Shorts', 'Trousers', 'Jeans', 'Skirt'] },
          { visual: '👟', english: 'Trainers', russian: 'Кроссовки', options: ['Boots', 'Sandals', 'Trainers', 'Slippers'] },
          { visual: '🧥', english: 'Coat', russian: 'Пальто', options: ['Jacket', 'Coat', 'Vest', 'Sweater'] },
          { visual: '👗', english: 'Dress', russian: 'Платье', options: ['Dress', 'Skirt', 'Blouse', 'Gown'] },
          { visual: '🧣', english: 'Scarf', russian: 'Шарф', options: ['Tie', 'Scarf', 'Belt', 'Ribbon'] },
          { visual: '🧢', english: 'Cap', russian: 'Кепка', options: ['Hat', 'Cap', 'Helmet', 'Hood'] },
          { visual: '🧤', english: 'Gloves', russian: 'Перчатки', options: ['Socks', 'Gloves', 'Mittens', 'Sleeves'] },
          { visual: '👔', english: 'Shirt', russian: 'Рубашка', options: ['Shirt', 'T-shirt', 'Blouse', 'Polo'] },
          { visual: '🩳', english: 'Shorts', russian: 'Шорты', options: ['Trousers', 'Shorts', 'Skirt', 'Jeans'] },
        ],
      },
    ],
  },

  house: {
    id: 'house',
    icon: '🏠',
    title: 'House & Home',
    description: 'Дом и мебель',
    rounds: [
      {
        title: 'Round 1 — Rooms & Furniture',
        questions: [
          { visual: '🛏️', english: 'Bed', russian: 'Кровать', options: ['Sofa', 'Bed', 'Chair', 'Desk'] },
          { visual: '🪑', english: 'Chair', russian: 'Стул', options: ['Table', 'Chair', 'Bench', 'Stool'] },
          { visual: '🛋️', english: 'Sofa', russian: 'Диван', options: ['Sofa', 'Bed', 'Chair', 'Bench'] },
          { visual: '🚿', english: 'Shower', russian: 'Душ', options: ['Bath', 'Shower', 'Sink', 'Toilet'] },
          { visual: '🪟', english: 'Window', russian: 'Окно', options: ['Door', 'Window', 'Wall', 'Gate'] },
          { visual: '🚪', english: 'Door', russian: 'Дверь', options: ['Window', 'Door', 'Gate', 'Fence'] },
          { visual: '💡', english: 'Lamp', russian: 'Лампа', options: ['Candle', 'Lamp', 'Torch', 'Light'] },
          { visual: '🪞', english: 'Mirror', russian: 'Зеркало', options: ['Window', 'Mirror', 'Frame', 'Screen'] },
          { visual: '🗄️', english: 'Cupboard', russian: 'Шкаф', options: ['Drawer', 'Cupboard', 'Shelf', 'Box'] },
          { visual: '🧊', english: 'Fridge', russian: 'Холодильник', options: ['Oven', 'Fridge', 'Freezer', 'Microwave'] },
        ],
      },
    ],
  },

  transport: {
    id: 'transport',
    icon: '🚗',
    title: 'Transport',
    description: 'Транспорт',
    rounds: [
      {
        title: 'Round 1 — Vehicles',
        questions: [
          { visual: '🚗', english: 'Car', russian: 'Машина', options: ['Bus', 'Car', 'Truck', 'Van'] },
          { visual: '🚌', english: 'Bus', russian: 'Автобус', options: ['Car', 'Bus', 'Train', 'Tram'] },
          { visual: '🚂', english: 'Train', russian: 'Поезд', options: ['Bus', 'Tram', 'Train', 'Metro'] },
          { visual: '✈️', english: 'Plane', russian: 'Самолёт', options: ['Plane', 'Helicopter', 'Rocket', 'Drone'] },
          { visual: '🚢', english: 'Ship', russian: 'Корабль', options: ['Boat', 'Ship', 'Yacht', 'Ferry'] },
          { visual: '🚲', english: 'Bicycle', russian: 'Велосипед', options: ['Motorcycle', 'Bicycle', 'Scooter', 'Skateboard'] },
          { visual: '🏍️', english: 'Motorcycle', russian: 'Мотоцикл', options: ['Bicycle', 'Motorcycle', 'Scooter', 'Car'] },
          { visual: '🚕', english: 'Taxi', russian: 'Такси', options: ['Bus', 'Taxi', 'Car', 'Van'] },
          { visual: '🚁', english: 'Helicopter', russian: 'Вертолёт', options: ['Plane', 'Helicopter', 'Drone', 'Jet'] },
          { visual: '🛴', english: 'Scooter', russian: 'Самокат', options: ['Bicycle', 'Skateboard', 'Scooter', 'Motorcycle'] },
        ],
      },
    ],
  },

  weather: {
    id: 'weather',
    icon: '🌤️',
    title: 'Weather',
    description: 'Погода',
    rounds: [
      {
        title: 'Round 1 — Weather & Seasons',
        questions: [
          { visual: '☀️', english: 'Sun', russian: 'Солнце', options: ['Moon', 'Sun', 'Star', 'Cloud'] },
          { visual: '🌧️', english: 'Rain', russian: 'Дождь', options: ['Snow', 'Rain', 'Hail', 'Fog'] },
          { visual: '❄️', english: 'Snow', russian: 'Снег', options: ['Ice', 'Snow', 'Frost', 'Rain'] },
          { visual: '🌩️', english: 'Storm', russian: 'Гроза', options: ['Wind', 'Storm', 'Rain', 'Cloud'] },
          { visual: '☁️', english: 'Cloud', russian: 'Облако', options: ['Cloud', 'Fog', 'Smoke', 'Sky'] },
          { visual: '💨', english: 'Wind', russian: 'Ветер', options: ['Storm', 'Breeze', 'Wind', 'Rain'] },
          { visual: '🌈', english: 'Rainbow', russian: 'Радуга', options: ['Rainbow', 'Cloud', 'Sun', 'Sky'] },
          { visual: '🌡️', english: 'Hot', russian: 'Жарко', options: ['Cold', 'Hot', 'Warm', 'Cool'] },
          { visual: '🥶', english: 'Cold', russian: 'Холодно', options: ['Hot', 'Cold', 'Warm', 'Freezing'] },
          { visual: '🌫️', english: 'Fog', russian: 'Туман', options: ['Cloud', 'Smoke', 'Fog', 'Mist'] },
        ],
      },
    ],
  },
};
