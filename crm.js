import Customer from "./models/customer.js";
// import mongoose from "mongoose";

const listCustomers = async () => {
    const customers = await Customer.find();
    if(customers.length === 0){
        console.log("No customers found.");
    }else{
        
    console.log("Below is a list of customers:");
    customers.forEach((customer) => {
    console.log(`ID: ${customer._id}) -- Name: ${customer.name}, Age: ${customer.age}`)
    });
     }

    };

    const createCustomer = async (prompt) => {
        const name = prompt("Enter customer's name: ");
        const age = prompt("Enter customer's age: ");
        
        if (isNaN(age) || age <= 0) {
            console.log("Please enter a valid age.");
            return;
        }
        
        try {
            const newCustomer = new Customer({ name, age: Number(age) });
            await newCustomer.save();
            console.log("Customer created successfully!");
        } catch (error) {
            console.log("Error creating customer:", error.message);
        }
    };

    const updateCustomer =async(prompt) => {
        await listCustomers();
    
    
    const customerId = prompt("Copy and paste the ID of the customer you would like to update here: "); 
    const customerToUpdate = await Customer.findById(customerId);
    
    if(!customerToUpdate) {
        console.log("Customer not found.");
        return;
    }

    const newName = prompt("What is the customer's new name?");
    const newAge = prompt("What is the customer's new age?");
    
    if (isNaN(newAge) || newAge <= 0) {
        console.log("Please enter a valid age.");
        return;
    }

    try {

    const updatedCustomer = await Customer.findByIdAndUpdate(
        customerId,
        {name: newName, age: Number(newAge) },
        {new: true}
    );

    console.log("Customer updated successfully!")
    console.log(`New Details - ID: ${updatedCustomer._id}, Name: ${updatedCustomer.name}, Age: ${updatedCustomer.age}`);
    } catch (error) {
        console.log("Error updating customer:", error.message);
    }
};

const deleteCustomer = async (prompt) => {
    await listCustomers();  // Show existing customers

    const customerId = prompt("Enter the ID of the customer you want to delete: ");
    const customerToDelete = await Customer.findById(customerId);
    
    if (!customerToDelete) {
        console.log("Customer not found.");
        return;
    }

    try {
        await Customer.findByIdAndDelete(customerId);
        console.log("Customer deleted successfully!");
    } catch (error) {
        console.log("Error deleting customer:", error.message);
    }
};

export { createCustomer, listCustomers, updateCustomer, deleteCustomer };