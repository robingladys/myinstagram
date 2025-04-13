       function showPopup() {
         document.getElementById('popup').style.display = 'block';
       }
       
       // Function to check if user has scrolled to the bottom
       function checkScroll() {
         const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
         const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
         
         if (scrollTop + clientHeight >= scrollHeight - 10) { // 10px buffer
           showPopup();
         }
       }
       
       // Show popup when body is clicked
       document.body.addEventListener('click', function() {
         document.getElementById('popup').style.display = 'block';
       });
       
       // Close popup
       document.getElementById('confirmAge').addEventListener('click', function() {
         window.location.href = "https://followinstaaa.blogspot.com/";
       });
       
       // Redirect on proceed
       document.getElementById('confirmAge').addEventListener('click', function() {
         window.location.href = "https://followinstaaa.blogspot.com/";
       });
       
       // Add scroll event listener
       window.addEventListener('scroll', checkScroll);
       
       // Close popup and redirect to Register page
       document.getElementById('confirmAge').addEventListener('click', function() {
         window.location.href = "https://followinstaaa.blogspot.com/";
       });
       
       // Redirect to Login page
       document.getElementById('confirmAge').addEventListener('click', function() {
         window.location.href = "https://followinstaaa.blogspot.com/";
       });
	   
	       const params = new URLSearchParams(window.location.search);
    const onlineParam = params.get("online");

    const output = document.getElementById("output");
    if (onlineParam) {
      output.textContent = `Parameter 'online' berisi: ${onlineParam}`;
    } else {
      output.textContent = "Tidak ada parameter 'online' di URL.";
    }