# Front End Capstone Project
Developed by Tina Tkatchenko, Theo Telonis, and Albert Chua <br/>
<h2>Intro</h2>
We developed this project as a group over the course of 9 days during the Hack Reactor program. We were all worked on our own individual widget for the site. <br/> <br />
    Tina - Questions and Answers <br/>
    Theo - Product Overview <br/>
    Albert - Ratings and Reviews <br/> <br/>
    
We were given a business document which outlined a strict set of requirements that guided our implementation, funcitonality, and styling. That document can be found <a href='https://docs.google.com/document/d/1KAqduzY8ae3DYrSoCL1i23qHe95zJRYFulqMk-sGLWY/edit#'>here</a>. 

<h2> Technologies </h2>
For this project, we used the following languages and frameworks in our implementation <br/>
<ul>
<li>Typescript</li>
<li>React</li>
<li>Redux</li>
<li>Yarn</li>
</ul>

<h2> Deployment </h2>
We deployed our site on AWS, which can be viewed <a href='http://3.140.186.146/'>here</a>

If you wish to deploy this repo on your local machine, follow these steps: 
<ol>
  <li>clone this repo to your local machine</li>
  <li>run <code>yarn</code> in the 'my-app' directory</li>
  <li>run <code>yarn start</code> after yarn has finished loading</li>
  <li>you will find the site on localhost:3000</li>
</ol>

<h2> Testing </h2>
Testing done with Jest and Enzyme. To run all tests:
<code>
yarn test
</code>


# Components
<h2> Product Overview </h2>
This feature gives client the ability to filter through all styles available for a product. Client can click through a gallery of images for a given style. Client can add products by quantity and size. This was the top-most module on the Product Detail page.  The functionality contained within this module can be divided into several pieces:
<ol>
  <li>Image gallery</li>
  <li>Product information</li>
  <li>Style selector</li>
  <li>Add to cart</li>
</ol>

<h2> Questions & Answers </h2>
The Questions & Answers module was implemented to allow asking and answering of questions for a product selected.  The functionality contained within this module can be divided into several pieces:
<ol>
  <li>View questions</li>
  <li>Search for a question</li>
  <li>Asking a question</li>
  <li>Answering a question</li>
</ol>

<h2> Ratings & Reviews </h2>
The Ratings & Reviews module was implemented to allow viewing and submission of reviews for a product selected.  The functionality contained within this module can be divided into several pieces:
<ol>
  <li>Write new review</li>
  <li>Reviews List</li>
  <li>Sorting </li>
  <li>Rating Breakdown</li>
  <li>Product Breakdown</li>
</ol>

<h2> Related Products </h2>
Related Products provides clients with a carousel of products related to the overview product above.

    
