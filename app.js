const share_btn = document.getElementById("share_btn");
share_btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const shareData = {
    title: "الدليل السعودي للوظائف",
    text: "الدليل السعودي للوظائف",
    url: "https://basim-mj.github.io/The-Saudi-jobs-directory/",
  };
  try {
    await navigator.share(shareData);
    share_btn.innerText = "شكرا لك";
  } catch (error) {
    alert("فشلت العملية , يمكن نسخ الرابط يدويا");
  }
});
