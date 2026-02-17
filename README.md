# English

## Random People Generator (Node.js)

Random People Generator is a simple Node.js application that generates a list of 20 random people.

The goal of this project was to practice working with JavaScript logic, random data generation, and basic Node.js scripting.

The application generates users based on predefined data arrays and random values.

The result will be saved in the file pepole.json

### How it works

- Gender is selected randomly (M/F)
- First name is selected from predefined male/female name arrays
- Last name is selected from a predefined surname array
- Age is generated randomly
- Email is dynamically created using:
  - first name
  - last name
  - age
- Phone number is generated randomly

### Example of generated person

```json
{
  "gender": "M",
  "firstname": "Michael",
  "lastname": "Williams",
  "age": 33,
  "email": "michael.williams33@email.com",
  "phone": "545-323-710"
}
```

### Terminal

```bash
    node app.js
```