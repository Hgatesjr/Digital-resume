// template_dwm3lzw template id
// service_hzdkjl8
// service_hzdkjl8 service id
// xClO5yHdA5I4JPq2I user id

{
  /* <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@5/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "xClO5yHdA5I4JPq2I",
      });
   })();
// </script>   this is for the emailjs in the html*/
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_hzdkjl8",
      "template_dwm3lzw",
      event.target,
      "xClO5yHdA5I4JPq2I",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at email@homer.gates@yahoo.com",
      );
    });
}
