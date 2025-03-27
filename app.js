import promptSync from 'prompt-sync';
import { connectDB, disconnectDB} from "./db.js";
import {createCustomer, listCustomers, updateCustomer, deleteCustomer} from "./crm.js";

const prompt = promptSync();

console.log("Welcome to the CRM");

await connectDB();

let running = true;

while (running) {
    console.log("What would you like to do?");
    console.log("1. Create a customer");
    console.log("2. View all customers");
    console.log("3. Update a customer");
    console.log("4. Delete a customer");
    console.log("5. Quit");

    let choice = prompt("Number of action to run: ");
    
switch (choice)  {
    case "1":
        console.log("[Create a Customer]");
        await createCustomer(prompt);
        break;
    case "2": 
        console.log("[View Customer]");
        await listCustomers(); 
        break;
    case "3":
        console.log("[Update a Customer]");
        await updateCustomer(prompt);
        break;
    case "4":
        console.log("[Delete a Customer]");
        await deleteCustomer(prompt);
        break;
    case "5":
        console.log("Goodbye!");
        running = false;
        break;
     default:     
        console.log("Invalid choice. Please enter a number between 1-5.")

    }
  }

 await disconnectDB();
 process.exit(); 