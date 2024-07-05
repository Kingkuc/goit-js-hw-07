// Znajdź element ul#categories
const categoriesList = document.querySelector("#categories");

// Znajdź wszystkie elementy li z klasą "item" wewnątrz ul#categories
const categoryItems = categoriesList.querySelectorAll(".item");

// Policzenie liczby kategorii
const numberOfCategories = categoryItems.length;

// Wypisanie liczby kategorii w konsoli
console.log(`Liczba kategorii: ${numberOfCategories}`);

// Iteracja przez każdy element li.item
categoryItems.forEach(category => {
  // Znalezienie nagłówka h2 w bieżącym elemencie li.item
  const categoryName = category.querySelector('h2').textContent;
  
  // Znalezienie wszystkich li zagnieżdżonych w bieżącym elemencie li.item
  const categoryElements = category.querySelectorAll('ul > li');
  
  // Liczba elementów w kategorii
  const numberOfElements = categoryElements.length;
  
  // Wypisanie tekstu nagłówka i liczby elementów w konsoli
  console.log(`Kategoria: ${categoryName}, Liczba elementów: ${numberOfElements}`);
});