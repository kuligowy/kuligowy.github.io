<template>
<div class="flex flex-wrap ">

        <div class="w-full md:w-1/2 pt-0 p-4 divide-y-2 divide-site-10">

        <div class="w-full prose-2xl p-4 font-bold leading-loose">
          SKONTAKTUJ SIĘ ZE MNĄ!
        </div>
            <div class="w-full prose-xl p-4 leading-loose " >
            <p>
              By się ze mną skontaktować wypełnij formularz kontaktowy lub
              zadzwoń.
              </p>
              <p>Jeśli nie odbiorę, to z pewnością pochłonęła mnie
              fotografia. Bądź cierpliwy, na pewno oddzwonię!</p>
            </div>
            
            <div class="w-full p-4 font-bold leading-loose font-serif prose-xl">
              <p class="">PAULINA KULIGOWSKA</p>
              <p>+48 799 859 509</p>
              <p class="uppercase text-black prose md:prose-xl">Lazywinkphoto@gmail.com</p>
            </div>
            
            <div class="w-full p-4 font-bold leading-loose prose-xl md:prose-2xl">
          
                <app-icon :icon="['fab', 'facebook']" size="lg"></app-icon>

                <a class="hover:underline hover:bg-site-10 md:ml-4" href="https://www.facebook.com/LazyWinkPaulinaKuligowska/">@LazyWinkPaulinaKuligowska</a>
               
               <p> <app-icon :icon="['fab', 'instagram']" size="lg"></app-icon>
              <a class="hover:underline hover:bg-site-10 ml-4" href="https://www.instagram.com/lazywink/">@lazywink</a></p>
            </div>

            <div class="w-full font-bold  prose-xl p-4 leading-loose " >
                <p>GAJOWA 34, PAWILON I PIĘTRO, BYDGOSZCZ</p>
            </div>
   

 
        </div>
        <form class="w-full md:w-1/2  text-black bg-black" action="https://formspree.io/f/xwkwadgk" method="POST">
 
        <!-- Input container -->
        <div class="w-full p-4 ">
            <div class=" p-4">
                <label class="text-white" for="name">TWOJE DANE</label>
                <input type="text" name="name" class="w-full p-2" placeholder="wpisz swoje dane">
            </div>
        </div>
        
        <div class="w-full p-4">
            <div class="p-4">
                <label class="text-white" for="_replyto">EMAIL</label>
                <input type="text" name="_replyto" class="w-full p-2" placeholder="twoj adres email">
            </div>
        </div>
        <!-- Input container -->
        <div class="w-full p-4">
            <div class="p-4">
                <label class="text-white" for="message">WIADOMOŚĆ</label>
                <textarea name="message" rows=9 class="w-full p-2" placeholder="twoja wiadomosc"></textarea>
            </div>
        </div>
        <!-- Input container -->
        <div class="w-full p-4">
            <div class="border-2 border-white hover:bg-site-10 p-4">
          <button type="submit" class="text-white hover:text-black w-full p-2 uppercase">Wyślij</button>
            </div>
        </div>
    </form>

          <div class="w-full p-4 font-bold prose-xl text-center">
            <a href="https://goo.gl/maps/KEjWpFwWMEvd9qNT7"> 
              <g-image src='~/assets/images/mapka.png'  alt="Fragment of map showing location" />
            </a>
          </div>
        </div>
        </template>