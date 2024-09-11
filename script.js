class Person {
    constructor(name) {
        this.name = name;
    }

  
    display() {
        console.log(`Person Name: ${this.name}`);
    }
}


class Student extends Person {
    constructor(name, rollNo) {
        super(name);
        this.rollNo = rollNo;
    }

    display() {
        if (this.rollNo <= 0) {
            throw new Error("Invalid roll number. It must be greater than zero.");
        }
        console.log(`Student Name: ${this.name}, Roll No: ${this.rollNo}`);
    }
}


function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    // Validate mobile number
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert('Mobile number must be exactly 9 digits.');
        return;
    }

  
    const receipt = document.getElementById('receipt');
    const date = new Date();
    const receiptContent = `
        <h2>Receipt</h2>
        <p>Thank you, ${name}!</p>
        <p>Your order has been received.</p>
        <p>Date: ${date.toDateString()}</p>
        <p>Message on T-Shirt: ${message}</p>
    `;
    receipt.innerHTML = receiptContent;
    receipt.style.display = 'block';

    // Create a Person object and display details
    const person = new Person(name);
    person.display();

    // Create a Student object and display details
    try {
        const student = new Student(name, 0); // Pass invalid rollNo for demonstration
        student.display();
    } catch (error) {
        console.error(error.message);
    }
}


document.getElementById('orderForm').addEventListener('submit', validateForm);

