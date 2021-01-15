<template>
  <div class="container px-5 mx-auto pb-4">
    <section>
      <div class="flex flex-wrap ">
        <div class="w-full text-center pb-6">
          <h2 class="text-4xl">
Kontakt        
</h2>
        </div>
        <div class="w-full md:w-1/2 p-4">
         <div class="w-full p-4 leading-loose" >
            <p>
              By się ze mną skontaktować wypełnij formularz kontaktowy lub
              zadzwoń.
              </p><br />
              <p>Jeśli nie odbiorę, to z pewnością pochłonęła mnie
              fotografia.
            </p>
            <br />
            <p>Bądź cierpliwy, na pewno oddzwonię!</p>
            </div>
            <div class="w-full p-4">
            <p>GAJOWA 34, PAWILON I PIĘTRO, BYDGOSZCZ</p>
            </div>
            <div class="w-full p-4">
            <p>PAULINA KULIGOWSKA</p>
            <p>+48 799 859 509</p>
            <p>Lazywinkphoto@gmail.com</p>
            </div>
            </div>
        <form class="w-full md:w-1/2 text-white bg-black" action="https://formspree.io/f/xwkwadgk" method="POST">
 
        <!-- Input container -->
        <div class="w-full p-4">
            <div class=" p-4">
                <label for="name">TWOJE DANE</label>
                <input type="text" name="name" class="w-full p-2" placeholder="wpisz swoje dane">
            </div>
        </div>
        
        <div class="w-full p-4">
            <div class="p-4">
                <label for="_replyto">EMAIL</label>
                <input type="text" name="_replyto" class="w-full p-2" placeholder="twoj adres email">
            </div>
        </div>
        <!-- Input container -->
        <div class="w-full p-4">
            <div class="p-4">
                <label for="message">WIADOMOŚĆ</label>
                <textarea name="message" class="w-full p-2" placeholder="twoja wiadomosc"></textarea>
            </div>
        </div>
        <!-- Input container -->
        <div class="w-full p-4">
            <div class="border-2 border-white hover:bg-site-10 p-4">
          <button type="submit" class=" w-full p-2">Send</button>
            </div>
        </div>
    </form>
        </div>
    </section>
  </div>
</template>
