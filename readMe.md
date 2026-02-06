 Answers for reflection Questions
 ****************************
Q 1. How you implemented TypeScript features and OOP principles.
Ans:

I  used Advance javaScript features such as classes, interfaces, and type annotations to make the code more structured and type-safe. The Product class follows Object-Oriented Programming principles by encapsulating product data and related behaviors like displayDetails() and getPriceWithDiscount() inside a single class. Reusable logic such as tax and discount calculations was separated into utility modules, which improved maintainability and readability. javaScript helped catch errors early during compilation and made the code easier to understand.

 ///////////////////////////////////////////////////////////////////////////////////////////////////////

Q 2. The challenges you encountered and how you overcame them.
Ans:
One major challenge was understanding the API response structure and mapping it correctly to the Product class. I overcame this by logging the API data and carefully selecting required properties. first I stucked and was struggling to fetch data from APT to different files and wad struggling to importing and Exporting files I took help from instructor(Quinn) and changed  "type": "module", in package.Json file. and resolved Promisses .s

 Another challenge was organizing the project into multiple folders and files. This was solved by following a clear folder structure and separating concerns between models, services, and utilities.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Q 3. How you handled asynchronous operations and error management.
Ans:
Asynchronous operations were handled using async/await to keep the code readable and clean. API calls were wrapped in try/catch blocks to manage errors gracefully. A custom error handler was implemented to provide meaningful error messages instead of crashing the application. This ensured reliable API communication and better debugging.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////