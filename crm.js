import Customer from "./models/customer.js";
import mongoose from "mongoose";

const listCustomers = async () => {
    const customers = await Customer.find();
    console.log("Below is a list of customers:");
    customers.forEach((customer) => {
        console.log(`id: ${customer._id}) -- Name: ${customer.name}, Age: ${customer.age}`)
    });
    
    };

    const updateCustomer =async(prompt) => {
        await listCustomers();
    
    
    const customerId = prompt("Copy and paste the ID of the customer you would like to update here: "); 
    const customerToUpdate = await Customer.findById(customerId);
    
    if(!customerToUpdate) {
        console.log("Customer not found.");
        
    }

    const newName = prompt("What is the customer's new name?");
    const newAge = prompt("What is the customer's new age?");
    
    const updatedCustomer = await Customer.findByIdAndUpdate(
        customerId,
        {name: newName, age: Number(newAge) },
        {new: true}
    );

    if(!updatedCustomer) {
        console.log("No customer found with that ID.");
        mongoose.disconnect();
        process.exit();
    }
    
    console.log("Customer updated successfully!");
    console.log(`New Details- Name: ${updatedCustomer.name} Age: ${updatedCustomer.age}`);
};
    export { listCustomers,updateCustomer };