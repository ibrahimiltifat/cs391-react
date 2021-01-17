# CS391 React Project

This application is a course registration and course enrollment website. It uses WebStorage API to storing datas.


Used bootstrap CDN + react router as external libraries.

Create project with bootstrap cdn, react router and create-react-app and add repo to github. Initiliazed pages and made the transformation of html css and vanilla javascript code into React code. Added login option as student or teacher. Created all React Components as subcomponents in each file. Enrolling Courses as students, displaying courses, registering a course as teacher added. Used local and session storage to storing datas.

Abdulwahab: Used Express js to create the server and nedb a light weight nosql db to store data. for this project we need to run the server to make it work properly, please see instruction below to know how to start the project. API is running on 8001 port. 

Ibrahim: Imporved the UI and cennected it with the backend. Created a private route so user not logged in can not access pages. 


# How to start ?

clone the project and 'npm install' inside the project directory.

You cant start the project with 
### 'npm run dev' command


# Features

1- you can find logins as below: 

### teacher:
#### teacher@lms.com
#### teacher
### Students:
#### student@lms.com
#### student


3- According to his user type ( teacher or student), user can enter the enrolling course page as student or register course page as teacher.

4- User can log out if logged from the right top of the menu.

5- Teacher can register a course from Add Course Page.

6- Teacher can display all courses in a table format in all course page.

7- Student can enroll a course from all courses in Enroll Course Page.

8- Student can display all courses. If current signed user is already enrolled.

