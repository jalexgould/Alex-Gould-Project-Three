
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

localApp.init = function(business, venue){
   $('#business').on('change', function(){
      const business = $(this).val();
      
      const businessType = $(this).find(':selected').text();

      $('.title-Card').html(`<h2>${businessType} </h2>`)
   })
   
}
// Document ready function
$(function(){
   localApp.init();
})