# Defective pixels
Some scripts to add defective pixels on webpages:
 
 * `defectivepixels.js` Add mutltiple randomly positioned defective pixels 
 * `defectivepixelscookie.js` Add more defective pixels at each user visit on the webpage
 * `mydefectivepixel.css` Add one single defective pixel

## Installation 

 ###### For `defectivepixels.js`
   
    <link rel="stylesheet" href="assets/css/defectivepixels.css">
    <script src="assets/js/chance.min.js"></script>
    <script src="assets/js/defectivepixel.js"></script>
  
 ###### For `defectivepixelscookies.js`   
    
    <link rel="stylesheet" href="assets/css/defectivepixels.css">
    <script src="assets/js/chance.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js">
    <script src="assets/js/defectivepixelcookies.js"></script>
    
```javascript
var numberOfDiv = 10; 
```
Define number of Defective Pixels



## Type of defective pixel 

```javascript
var states = ["hot", "dead", "stuck"]; 
```
Define the type of defective pixels *hot*, *dead*, *stuck* or multiples





 
 
## Nota Bene 


```css
html { 	
  overflow: hidden;	
  height:100%;
}

body{
overflow: scroll;
height:100%;
}
```
Add this to your webpage stylesheet to prevent from the auto html overflow scrolling 
