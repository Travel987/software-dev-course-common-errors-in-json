/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

2️⃣ How did you confirm that your corrected JSON file was valid?

3️⃣ Which errors were the most difficult to spot? Why?

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
*/

// Corrections made:
// 1. Added a comma after "checkInDate": "2024-05-15"
//    Why: JSON requires commas between key-value pairs in an object.
//
// 2. Changed name: "Alice Johnson" to "name": "Alice Johnson"
//    Why: In JSON, all keys must be wrapped in double quotes.
//
// 3. Changed "age": undefined to "age": null
//    Why: undefined is not a valid JSON value. JSON allows strings, numbers,
//    booleans, arrays, objects, and null.
//
// 4. Removed the trailing comma in the amenities array
//    Changed ["WiFi", "Breakfast", "Parking",] to
//    ["WiFi", "Breakfast", "Parking"]
//    Why: Trailing commas are not allowed in valid JSON.
//
// 5. Corrected Bob's email from "bob.smith@example" to "bob.smith@example.com"
//    Why: While this may not break JSON syntax, it makes the data more valid
//    and realistic for a booking record.

// Follow-up Answers:
//
// 1. What tools or techniques did you use to identify the errors?
// I used visual inspection, VS Code syntax highlighting, and a JSON validator
// to identify issues like missing commas, incorrect quotation marks, invalid values,
// and trailing commas.
//
// 2. How did you confirm that your corrected JSON file was valid?
// I confirmed the corrected JSON was valid by checking it with a JSON validator/linter
// and making sure it parsed without any errors.
//
// 3. Which errors were the most difficult to spot? Why?
// The missing comma and trailing comma were the most difficult to spot because they are
// small syntax mistakes that are easy to overlook when reading quickly.
//
// 4. What strategies can help you avoid these kinds of errors in the future?
// I can avoid these errors by using syntax highlighting, validating JSON with a linter,
// formatting the file consistently, and comparing my work to a valid JSON example.