# Event Ticketing System

## Description

This is a Node.js application for an event ticketing system that simulates a basic online ticket booking platform. It allows for the creation and management of events, tracks ticket availability, handles concurrent ticket purchases, and provides basic reporting features. The system also ensures that concurrent purchases do not result in overselling, especially for events with limited seats.

## Features

- **Event Management:**
  - Create a new event with necessary details (name, total tickets).
  - Retrieve specific event details.
  - List all events.

- **Ticket Inventory:**
  - Track available tickets for each event (assume only one type of ticket for simplicity).
  - Update inventory upon ticket purchases.

- **Purchase Processing:**
  - Enable users to purchase tickets for an event.
  - Ensure that concurrent purchases do not lead to overselling of tickets.

- **Basic Reporting:**
  - Get total tickets sold and revenue for each event.

- **Concurrency Handling:**
  - Prevent overselling of tickets, especially for events with limited seats, by implementing concurrency mechanisms.

## Technology Stack

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- TypeScript
- Jest for testing
- Postman (for API testing)

## Project Structure

Event-Ticketing-system/
├── src/
│   ├── controllers/
│   │   ├── bookingController.ts
│   │   ├── eventController.ts
│   ├── models/
│   │   ├── booking.ts
│   │   ├── event.ts
│   ├── routes/
│   │   ├── bookingRoutes.ts
│   │   ├── eventRoutes.ts
│   ├── services/
│   │   ├── bookingService.ts
│   │   ├── eventService.ts
│   ├── config/
│   │   ├── database.ts
│   ├── app.ts
├── tests/
│   ├── booking.test.ts
│   ├── event.test.ts
├── jest.config.ts
├── tsconfig.json
├── package.json
├── README.md
├── .env
├── .gitignore


## Setup and Installation

1. Clone the repository:
git clone https://github.com/Bhoomika1704/Event-Ticketing-System.git
cd Event-Ticketing-System

2. Install dependencies:
npm install

3. Set up your environment variables: Create a .env file in the root directory and add the following:
DATABASE_URL=your_database_connection_string
PORT=3000

4. Run database migrations:
npm run migrate

5. Build the TypeScript code:
npm run build

6. Start the server:
npm start

## Running Tests
npm test



## API Documentation

### Initialize an Event
- **POST** `/initialize`
  - Body: `{ "name": "Event Name", "totalTickets": 100 }`
  - Response: Event details including ID

### Book a Ticket
- **POST** `/book`
  - Body: `{ "userId": 1, "eventId": 1 }`
  - Response: Booking confirmation or waiting list status

### Cancel a Booking
- **POST** `/cancel`
  - Body: `{ "userId": 1, "eventId": 1 }`
  - Response: Cancellation confirmation

### Get Event Status
- **GET** `/status/:eventId`
  - Response: Available tickets and waiting list count


## Design Choices

### 1. **OOP Design**
- **Models**: We defined the `Event` and `Booking` models to represent the core entities. The `Event` model tracks event details and available tickets, while the `Booking` model stores user booking information.
- **Controllers**: Each controller is responsible for handling a specific entity (events or bookings).
- **Services**: Services contain the business logic for booking tickets and handling event data, ensuring separation of concerns.

### 2. **Concurrency Handling**
- To handle concurrent ticket bookings effectively, database transactions are used to ensure atomicity, preventing overselling of tickets. We use optimistic locking to prevent multiple users from booking the last available ticket simultaneously.

### 3. **Design Patterns**
- **Singleton**: The database connection is managed as a singleton to ensure a single instance across the application.
- **Factory Pattern**: The booking service uses a factory pattern to generate different types of booking confirmations.

### 4. **Error Handling**
- Errors are handled gracefully with custom error classes and global error middleware that captures and formats errors in a consistent manner.

### 5. **Database Schema Design**
- **Events Table**: Stores event details including the name, total tickets, and available tickets.
- **Bookings Table**: Stores user bookings for each event, ensuring each booking is linked to an event.

## Assumptions

- The application assumes there is no user authentication, and user IDs are passed directly in the request body.
- The system does not currently support multiple ticket categories (e.g., VIP, Regular), only a single ticket type is available for all events.
- Ticket prices are fixed for all events.


