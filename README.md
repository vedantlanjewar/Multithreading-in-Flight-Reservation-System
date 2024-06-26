# Multithreading-in-Flight-Reservation-System
As part of our project, we integrated multi-threading into our airline reservation system to enhance data transfer efficiency. Tests conducted on servers in W. Virginia demonstrated an 81.19% increase in speed when fetching 327680 documents, affirming its effectiveness. This project implements a flight reservation system with multithreading capabilities. The system is designed to handle multiple tasks simultaneously, such as flight schedules, seat availability, pricing information, and payment transactions. It incorporates Node.js for multithreading and MongoDB for data storage.

# Introduction
The airline reservation system is a complex system that involves multiple data transfers across various entities. It is a crucial component of the airline industry as it enables customers to book flights, make payments, and manage their itineraries. At its core, the system is designed to facilitate the flow of information between the airline and its customers, as well as between the airline and other third-party service providers.

# Multithreading in Flight Reservation System
To manage the massive amounts of data generated by the system, multithreading is incorporated using Node.js. Node.js offers several advantages, including its ability to handle large numbers of requests, its support for asynchronous programming, and its compatibility with many popular databases.

# Worker Threads
The system uses Node.js' built-in worker_threads module to create worker threads that can execute tasks concurrently. Each worker thread is assigned to access a different database, allowing the system to retrieve data from multiple sources in parallel, reducing processing time.

# MongoDB
MongoDB is used as the database for the system. Its document-oriented approach simplifies the management and arrangement of data that lacks a fixed schema, which is advantageous for the airline industry where data arrives in varying formats and schedules/pricing are subject to frequent modifications.

# Methodology
Server Setup
The project consists of 2 remote servers (airline and hotel databases) hosted in W. Virginia, and a client machine set up using Node.js Express. The client machine acts as an endpoint, connecting to the databases via multithreading.

# Backend Working
The backend of the website is created using Node.js with worker threads handling information retrieval from flights and hotels databases. Data is retrieved simultaneously and stored in a shared buffer, reducing system response time.

# Results
Experimental results show that multithreading significantly improves data transfer rates, with an 81.19% improvement when fetching 327,680 documents compared to sequential access.

# Conclusion
The use of multithreading in the airline reservation system has proven to be an effective way of improving the data transfer process. Further exploration into the use of multithreading in other systems is necessary to fully realize its benefits.
