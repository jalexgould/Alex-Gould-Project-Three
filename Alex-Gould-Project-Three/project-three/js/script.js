// All Local Prices

// Landing Page which shows a local search bar that will search for local
// restaurants, cafes, coffee. 

// This drop down bar will then redirect to a section further down the landing page once clicked. 

// The secondary section on the landing page will display 3-4 options for the selected filter chosen
// on the landing page. 

// At the bottom of secondary section on the landing page will be a button that says start new
// search. 

// This button once clicked will redirect back to landing page for a new search. 

//App object
const localApp = {};
const venues = {

   coffee:[
      {
         name:'Jimmy/s',
         seating:'Yes',
         Pastry:'Yes',
         website:'https://http://www.jimmyscoffee.ca/',
      },
      {
         name:'Aroma',
         seating:'Yes',
         Pastry:'Yes',
         website:'https://www.aroma.us/',
      },
      {
         name:'Tim Hortons',
         seating:'Yes',
         Pastry:'Yes',
         website:'https://www.timhortons.com/',
      },
   ]
};

// Initializing App 

localApp.init = function(){
   $('#business').on('change', function(){
      const business = $(this).val();
      
      const businessType = $(this).find(':selected').text()
      console.log(businessType)

      // const businessName =$(this).find(':selected').text;
      // listen for the change on the drop down menu and grab the value
      $('.title-Card').html(`<h2>${businessType} </h2>`)
      })
   
}
// Document ready function
$(function(){
   localApp.init();
})