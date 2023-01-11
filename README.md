![Site Logo](assets/images/olympic_rings.svg)

# Goal For This Project 

Welcome to the "Olympic Quiz". This quiz aims to test your knowledge on the Olympic games.

Your knowledge will be put to the test against the clock as you have only 60 seconds to answer as many questions correctly as you can. Howevever, you must becareful because for each wrong answer you will be deducted 5 seconds from your remaining time. 

![Goals for this project image](images-readme/home-screen.png)


# Table of Contens 

* [UX](#ux "UX")
    * [User Goals](#user-goals "User Goals")
    * [User Stories](#user-stories "User Stories")
    * [Site Owner Goals](#site-owner-goals "Site Owner Goals")
* [Requirements and Expectations](#requirements-and-expectations "Requirements and Expectations")
    * [Requirements](#Requirments "Requirements")
    * [Expectations](#expectations "Expectations")
* [Design-Choices](#design-choices "Design Choices")
    * [Inspiration](#inspiration "Inspiration")
    * [Fonts](#fonts "Fonts")
    * [Images](#images "Images")
    * [Icons](#Icons "Icons")
    * [Colours](#colours "Colors")
    * [Structure](#structure "Structure")
* [Wireframes](#wireframes "Wireframes")
* [Features](#features "Features")
    * [Existing-Features](#existing-features "Existing Feautres")
        * [Navigation-Bar](#navigation-bar "Navigation Bar")
        * [Landing-page](#landing-page "Landing Page")
        * [Book-Now-Section](#book-now-section "Book Now Section")
        * [Location-Section](#location-section "Location Section")
        * [Booking-Form-Section](#booking-form-section "Booking Form Section")
        * [Gallery-Section](#gallery-section "Gallery Section")
        * [Footer](#footer-section "footer section")
    * [Features-To-Be-Implemented](#features-to-be-implemented "Features to be Implemented")
* [Technologies](#technologies "Technologies")
    * [Languages](#languages "Languages")
    * [Libraries-&-Frameworks](#libraries "Libraries & Frameworks")


# UX

## User Goals 

* A visually appealing landing page which clearly communicates the purpose of the site 
* A modal with instructions on how to play the quiz 
* Engaging and challenging questions 
* Results page to see how well you did in the quiz 
* Easy and intuitive navigation on all screen sizes

## User Stories 

* As a user, I want to be able to create a username 
* As a user, I want to see my total score at the end of the quiz 
* As a user, I want to have my time reduced for each incorrect answer I selected 
* As a user, I want to be able to access the quiz's social media accounts 
* As a user, I want to be able to restart the quiz once it is over 

## Site Owner Goals 

* Create a site that is intuitive to navigate for visitors 
* Provide users with feedback after they finish a quiz 
* Create a positive user experience through a visually appealing site 
* Capture user emails for email marketing purposes 

# Requirements and Expectations 

## Requirments 

* Mobile first design, which is responsive on all larger screens 
* The design uses a colour scheme which is easy to view 
* Before any user starts the quiz check if they understand the rules  
* After each question is answered the user is provided with feedback in the form of a visual que which highlights if they answered the question correctly 
* The user is deducted 5 seconds for every incorrect answer they select 
* The user is provided with a result at the end of their quiz 
* Social media accounts can be accessed via the footer of the site 

## Expectations 

* I expect to be able to see a result of how I did in the quiz 
* I expect the site to be easy to navigate 
* I expect to find information laid out in a logical and clear manner 
* I expect the quiz to include logic to negative mark me for submitting wrong answers 
* I expect that the site scales correctly on different size screens 

# Design Choices 

## Inspiration  
 
1. [Official Olympic Website](https://olympics.com/en/ "Official Olympic Website") 

    * The logo of the site will be used as the favicon for this site 
    * The logo of this site will be used as inspiration for this site 


## Fonts

I have used google fonts to select a font type that best supports the goals of the website. For the main text I have selected [Judson](https://fonts.google.com/specimen/Judson?preview.text=test&preview.text_type=custom&query=Judson#styles "Judson") because the rounded edges portray an approachable brand. To make the headers and the navigation bar stand out from the text, I decided to use [Quando](https://fonts.google.com/specimen/Quando?preview.text=test&preview.text_type=custom&query=quando "Quando").

## Images

It is important that the large background image used in the hero section portrays an athlete to highlight the purpose of the site which is a sport quiz 

Again, images associated with the Olympic will be used in the background of the section which includes the form on the landing page and of the page which includes the leader board 

## Icons

The font awesome library will be used throughout the site for social media links and to provide visual aids for the results of questions and to provide overall feedback on the user’s quiz. All icons will be consistent with the style of the Olympic brand. 


## Colours 

The inspiration for the colours was taken from the Olympic logo. I used the website [colourmind](http://colormind.io/ "colourmind") to pick the specific shades for this colour scheme. I tested the colours I selected on the [WebAIM](https://webaim.org/ "WebAIM") contract checker which showed that they have no contrast issues. 

## Structure

I will be building my website with a mobile first mindset using the iPhone 5/SE (320px) as the smallest screen size for styling to look good on. The screen size breakpoints that I will be using are from [Bootstrap breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/ "Bootstrap breakpoints").

| Screen Size | Breakpoint |
| ----------- | ---------- |
| x-small     | <576px     |
| small       | => 576px   |
| medium      | => 768px   |
| large       | => 992px   |
| x-large     | => 1200px  |

# Wireframes 

I have used [Balsamic](https://balsamiq.com/wireframes/ "Balsamic") to develop my wireframes for my website. I initially created the mobile version of the wireframes and then designed what the site would look like on larger devices. I did not create a design for each size listed in the structure section, the mobile wireframes cover x-small and small, the tablet covers medium and the desktop covers large and x-large. 

The wireframes are below:

### [Mobile Wireframes](docs-readme/Mobiles%20Wireframes.pdf "Mobile Wireframes")
### [Tablet Wireframes](docs-readme/Tablet%20Concept.pdf "Tablet Wireframes")
### [Desktop Wireframes](docs-readme/Desktop%20Concept.pdf "Desktop Wireframes")

# Features 

## Existing Features 

### Logo with link back to home page 

The site's header remains clean and simple. The only item within it is the site logo. 

The logo has two sizes 

1) Medium to large devices 

![Site Logo medium to large screens](images-readme/logo_large_screens.png)

2) Small

![Site Logo small screens](images-readme/logo_small_screens.png)

Clicking on the logo will link you to the home page of the site

### Start Quiz Form

The form on the site includes only two fields:

1. The username
2. The Email address 

The form field username will default be autofocused, so the cursor is displayed inside this field when the site is loaded. 

![Site Logo small screens](images-readme/login.png)

Both of these fields are required. If a user attempts to submit the form without occupying either field, the form will prevent them from doing so, and an error message will be displayed. 

![Form](images-readme/form_validation_uname.png)

Furthermore, the form applies validation to the email field, which prevents the form from being submitted unless the value entered follows a valid email format. 

![Email field validation](images-readme/form_validation_email.png)

### Start Quiz Form Button

Once the form fields are populated the user can click the button labeled "start quiz". This button will call a function that hides the content initially displayed on the home screen i.e. the form. The same function will display content that checks if the user has read the rules of the quiz and fully understands them. 

### Before you play 

This content is displayed after the user submits the form. The section will prevent users from starting the quiz before the understand the rules.The section displays two buttons:

1. The How to play will button will display a modal that includes the rules of the quiz 
2. The Start Quiz button will display the quiz and hide the this content 

![How to play check](images-readme/how-to-play-check.png)

### How to play Module 

The rules modal is displayed only when the user clicks the "How to play" button. 

The rules modal includes four bullet points, with icons to help the user visually understand the rules. 

![close modal button](images-readme/rules-modal-large-screen.png)

The user can click the "X" button to close the modal.

![close modal button](images-readme/rules-modal-close-button.png)

The modal and its contents, like the close button, scale in size depending on the device's size, i.e. the below image is the same as above but on a mobile.

![close modal button](images-readme/rules-modal-small-screen.png)

### Social media icons 

### Check if the user understands the rules 

### Questions displayed

### Progress bar 

### Timer 

### Feedback per question (correct or incorrect) 

## Features to be implemented 

# Technologies 

## Languages 

* [HTML](https://en.wikipedia.org/wiki/HTML "HTML")
* [CSS](https://en.wikipedia.org/wiki/CSS "CSS")

## Libraries 

* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Font Awesome](https://fontawesome.com/ "Font Awesome")

## Tools 

* [Gitpod](https://www.gitpod.io/ "Gitpod")
* [Github](https://github.com/ "Github")
* [Balsamic](https://balsamiq.com/wireframes/ "Balsamic")
* [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML Validation Service")
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS Validation Service")
* [Colourmind](http://colormind.io/ "Colourmind")
* [Font Awesome](https://fontawesome.com/ "Font Awesome")
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
* [Pexles](https://www.pexels.com/ "Pexles")
* [Chrome Dev Tools](http://colormind.io/ "Chrome Dev Tools")
* [WebAim](https://webaim.org/resources/contrastchecker/ "WebAim")

# Testing 

## Tests

### WC3 Markup Validator 

### WC3 CSS Validator 

### Light house test 

### WebAim Contrast Test 

### User Acceptance Testing 

## Bugs 

## Unfixed Bugs

# Deployment

# Credits 

For code inspiration:


For content and style inspiration: 
