const sectionAbout = document.querySelector('.about')
const sectionServices = document.querySelector('.services')
const sectionPortfolio = document.querySelector('.portfolio')
const sectionEducation = document.querySelector('.education')
const sectionContact = document.querySelector('.contact')



    document.querySelector("#hire").addEventListener('click', () =>{
        document.getElementById("sec1").classList.remove('section-active');
        document.querySelector('.contact').classList.add('section-active');

        document.querySelector('#btn1').classList.remove('active');
        document.querySelector('#btn5').classList.add('active');

    })


  document.querySelector("#btn1").addEventListener('click', () =>{
    if(sectionAbout.classList.contains('section-active')){
    
    }else{ 
        
        document.getElementById("sec5").classList.remove('section-active');
        document.getElementById("sec4").classList.remove('section-active');
        document.getElementById("sec3").classList.remove('section-active');
        document.getElementById("sec2").classList.remove('section-active');
        document.querySelector('.about').classList.add('section-active');


        document.querySelector('#btn5').classList.remove('active');
        document.querySelector('#btn4').classList.remove('active');
        document.querySelector('#btn3').classList.remove('active');
        document.querySelector('#btn2').classList.remove('active');
        document.querySelector('#btn1').classList.add('active');
    }
  })

  document.querySelector("#btn2").addEventListener('click', () =>{
    if(sectionServices.classList.contains('section-active')){
    
    }else{ 
        
        document.getElementById("sec1").classList.remove('section-active');
        document.getElementById("sec5").classList.remove('section-active');
        document.getElementById("sec4").classList.remove('section-active');
        document.getElementById("sec3").classList.remove('section-active');
        document.querySelector('.services').classList.add('section-active');

        document.querySelector('#btn5').classList.remove('active');
        document.querySelector('#btn4').classList.remove('active');
        document.querySelector('#btn3').classList.remove('active');
        document.querySelector('#btn1').classList.remove('active');
        document.querySelector('#btn2').classList.add('active');
    }
  })
  document.querySelector("#btn3").addEventListener('click', () =>{
    if(sectionPortfolio.classList.contains('section-active')){
    
    }else{ 
        
        document.getElementById("sec2").classList.remove('section-active');
        document.getElementById("sec1").classList.remove('section-active');
        document.getElementById("sec5").classList.remove('section-active');
        document.getElementById("sec4").classList.remove('section-active');
        document.querySelector('.portfolio').classList.add('section-active');

        document.querySelector('#btn5').classList.remove('active');
        document.querySelector('#btn4').classList.remove('active');
        document.querySelector('#btn1').classList.remove('active');
        document.querySelector('#btn2').classList.remove('active');
        document.querySelector('#btn3').classList.add('active');
    }
  })
  document.querySelector("#btn4").addEventListener('click', () =>{
    if(sectionEducation.classList.contains('section-active')){
    
    }else{ 
        
        document.getElementById("sec3").classList.remove('section-active');
        document.getElementById("sec2").classList.remove('section-active');
        document.getElementById("sec1").classList.remove('section-active');
        document.getElementById("sec5").classList.remove('section-active');
        document.querySelector('.education').classList.add('section-active');

        document.querySelector('#btn3').classList.remove('active');
        document.querySelector('#btn2').classList.remove('active');
        document.querySelector('#btn1').classList.remove('active');
        document.querySelector('#btn5').classList.remove('active');
        document.querySelector('#btn4').classList.add('active');
    }
  })
  document.querySelector("#btn5").addEventListener('click', () =>{
    if(sectionContact.classList.contains('section-active')){
    
    }else{ 
        
        document.getElementById("sec1").classList.remove('section-active');
        document.getElementById("sec2").classList.remove('section-active');
        document.getElementById("sec3").classList.remove('section-active');
        document.getElementById("sec4").classList.remove('section-active');
        document.querySelector('.contact').classList.add('section-active');

        document.querySelector('#btn1').classList.remove('active');
        document.querySelector('#btn2').classList.remove('active');
        document.querySelector('#btn3').classList.remove('active');
        document.querySelector('#btn4').classList.remove('active');
        document.querySelector('#btn5').classList.add('active');
    }
  })

  document.querySelector("#submit").addEventListener('click', () =>{

    swal("Email Sent!", "We will reply soon!", "success");


})

