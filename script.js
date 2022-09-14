const btn = document.getElementById("menu_btn");
      const nav = document.getElementById("menu");

      btn.addEventListener("click", () => {
        nav.classList.toggle("open");
        btn.classList.toggle("open_btn");
      });

     
     

      function myFunction() {
        if (document.getElementById("demo").style.background) {//<-- already having bg
          document.getElementById("demo").style.background = "";//<-- remove it
        } else {
          document.getElementById("demo").style.background = "#2b076e";
        }

        document.getElementById("firstDIV").classList.toggle("myStyle");
        document.getElementById("firsttext").classList.toggle("textStyle");
      }
   

      function secondFunction() {
        if (document.getElementById("box1").style.background) {//<-- already having bg
          document.getElementById("box1").style.background = "";//<-- remove it
        } else {
          document.getElementById("box1").style.background = "#2b076e";
        }

        document.getElementById("secondDIV").classList.toggle("myStyle");
        document.getElementById("secondtext").classList.toggle("textStyle");
      }
     
    

      function thirdFunction() {
        if (document.getElementById("box3").style.background) {//<-- already having bg
          document.getElementById("box3").style.background = "";//<-- remove it
        } else {
          document.getElementById("box3").style.background = "#2b076e";
        }

        document.getElementById("thirdDIV").classList.toggle("myStyle");
        document.getElementById("thirdtext").classList.toggle("textStyle");
      }

    
      const over = document.getElementById("demo");
     

      over.addEventListener("click", () => {
       
        over.classList.toggle("overstyle");
      });
      const over2 = document.getElementById("box1");
     

      over2.addEventListener("click", () => {
       
        over2.classList.toggle("overstyle");
      });
      const over3 = document.getElementById("box3");
     

      over3.addEventListener("click", () => {
       
        over3.classList.toggle("overstyle");
      });
      // const box1 = document.getElementById('box1');

      // box1.addEventListener('click', function onClick(event) {
      //   // 👇️ change background color
      //   event.target.style.backgroundColor = '#2b076e';
      
      //   // 👇️ optionally change text color
      //    event.target.style.color = 'white';
      // });
      

      // const box2 = document.getElementById('box2');

      // box2.addEventListener('click', function onClick(event) {
      //   // 👇️ change background color
      //   event.target.style.backgroundColor = '#2b076e';
      
      //   // 👇️ optionally change text color
      //    event.target.style.color = 'white';
      // });
      
   