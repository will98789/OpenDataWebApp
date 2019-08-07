function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function mainPage(){
  await sleep(3000);
  window.location.href = "index.html";
}
