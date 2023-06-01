---
title: Ask for listening session
layout: page
hide: true
---

<script>
function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = data.get('senderemail');
  const value = data.get('sendername');
  const value = data.get('hifisetupid');

  console.log({ value });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
</script>

<form id="hifiform" accept-charset="UTF-8" action="https://prod-26.westeurope.logic.azure.com:443/workflows/d6db27358f80434ba0cd477bfe2325da/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=sM17fd913-GhCh-zD9MPwpseRrFU_-ZCoIB5kmLITqU" method="POST">
  <input type="email" name="senderemail" placeholder="Your E-Mail">
  <input type="text" name="sendername" placeholder="Your Name">
  <input type="hidden" name="hifisetupid" value="">
  <button type="submit">Submit</button>
</form>
