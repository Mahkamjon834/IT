// Define 5 objects
const user = { name: "Alice", age: 25, role: "admin" };
const product = { id: 101, name: "Laptop", price: 1200 };
const order = { orderId: 5001, userId: 1, status: "shipped" };
const settings = { theme: "dark", notifications: true, language: "en" };
const location = { city: "New York", country: "USA", zip: "10001" };

// Function with 10 switch cases
function handleAction(action) {
    switch (action) {
        case "LOGIN":
            console.log("User logged in");
            break;
        case "LOGOUT":
            console.log("User logged out");
            break;
        case "REGISTER":
            console.log("User registered");
            break;
        case "UPDATE_PROFILE":
            console.log("Profile updated");
            break;
        case "DELETE_ACCOUNT":
            console.log("Account deleted");
            break;
        case "ADD_PRODUCT":
            console.log("Product added");
            break;
        case "REMOVE_PRODUCT":
            console.log("Product removed");
            break;
        case "PLACE_ORDER":
            console.log("Order placed");
            break;
        case "CANCEL_ORDER":
            console.log("Order canceled");
            break;
        case "CHANGE_SETTINGS":
            console.log("Settings changed");
            break;
        default:
            console.log("Unknown action");
    }
}