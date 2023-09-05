# BookEcommerce
An online bookstore website called BECS offers a variety of services for both the management of the store and the customer. Anyone using the thapar.edu email must have access to the website.
Users can sell and buy second hand books within the campus. According to the client, there are no further hardware or software prerequisites, such as, but not limited to, Memory or particular software packages must be used above unnecessary software products.

The product requires user signup with thapar.edu email-id only. After signup the user has to log in to their account. Once the login is successful, the user will see a welcome message on the display screen. After that their use will be provided with two options- buy and sell.

If the user selects buy, he/she will be redirected to a catalog of available books to choose from. From there the user can add the selected books to the cart and move to the transaction. In the cart there will be an option of buy, clicking on which a QR code will be displayed. Users can scan that to complete the payment. This will be the end step. At this step, the order will be placed. If the user selects sell, he/she will be redirected to a new tab where they have to fill in the details of the book along with picture and then click on the add button. After clicking that the system will automatically add the book to the database and the book will be soon available for buyers.



# Performance Requirements
●	The software is designed for the thapar email id only and cannot be used by anyone else.

●	The software will support multiple users signing up and logging at the same time.

●	Only textual information will be handled by the software. Amount of information to be handled can vary from user to user.

●		For normal conditions, 95% of the transactions should be processed in less than 5 seconds.

This Software Requirements Specification aims to describe the Functionality, External Interfaces, Attributes, and Design Constraints imposed on the Implementation of the software system described throughout the rest of the document.


Product Scope of the project
The software system being developed is known as the Book E-Commerce System, or BECS. It is being created for a customer who wants to sell books on the Internet. This system is intended to "offer automated support" for the process of listing books for sale on the internet and facilitating the actual sale. This system is mostly cross-platform and is available to anyone present in Thapar Campus. The system will be hosted on a centralized server with each user interacting with it via a remote user interface via a web browser.

The software must be able to perform the following operations:


1.	Identify and authenticate user ID: It must be able to authenticate the user by checking the Thapar email Id/ Roll Number.
2.	Record user’s presence: It must be able to record the user’s presence by writing the user’s email ID in the corresponding database table. The user, through the process of account creation, will have the option to become a member of the site.
3.	Record user’s activities: The system will allow customers to browse, search, select, and add books to a shopping cart. Then, provided they have books in their shopping cart, check
out books in shopping cart and decrement the stock that the inventory the system maintains.

The BECS also allows a manager to manage the inventory with full create, retrieve, update and delete functionality with regards to books in the system. The scope of this system is not just limited to the university
campus only as the same mechanism can be reused in other campuses as well. The BECS will have numerous constraints on what it can do. The system will not have full credit-card processing capabilities. It will not allow managers to be customers. The manager will be a hard-coded user and only a single manager will exist. There will be no actual book ordering and order completion, however the system will provide the customer with a receipt and it will log the transaction details. The system will not allow a customer to add more than one of each item to their cart. The system also will not allow users to retrieve passwords or edit their user details.



<img width="420" alt="image" src="https://github.com/meharr02/BookEcommerce/assets/138808971/c2338e09-78bd-446d-b709-37d9a9d4345a">
<img width="336" alt="image" src="https://github.com/meharr02/BookEcommerce/assets/138808971/4a812683-b629-410a-b262-6f0030671898">
