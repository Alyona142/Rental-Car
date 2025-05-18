export const getCategories = (car) => [
  {
    condition: car.transmission === "automatic",
    text: "Automatic",
    id: "automatic",
    icon: "automatic",
  },
  {
    condition: car.fuel === "petrol",
    text: "Petrol",
    id: "petrol",
    icon: "petrol",
  },
  {
    condition: car.fuel === "diesel",
    text: "Diesel",
    id: "diesel",
    icon: "diesel",
  },
  {
    condition: car.airConditioning,
    text: "AC",
    id: "AC",
    icon: "AC",
  },
  {
    condition: car.sunroof,
    text: "Sunroof",
    id: "sunroof",
    icon: "sunroof",
  },
  {
    condition: car.navigation,
    text: "Navigation",
    id: "navigation",
    icon: "navigation",
  },
  {
    condition: car.bodyType === "sedan",
    text: "Sedan",
    id: "sedan",
    icon: "sedan",
  },
  {
    condition: car.bodyType === "suv",
    text: "SUV",
    id: "suv",
    icon: "suv",
  },
  {
    condition: car.bodyType === "hatchback",
    text: "Hatchback",
    id: "hatchback",
    icon: "hatchback",
  },
  {
    condition: car.bodyType === "coupe",
    text: "Coupe",
    id: "coupe",
    icon: "coupe",
  },
  {
    condition: car.bodyType === "convertible",
    text: "Convertible",
    id: "convertible",
    icon: "convertible",
  },
];
