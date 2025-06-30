document.addEventListener('DOMContentLoaded', () => {
  const whale = document.getElementById('whale-svg');
  whale.addEventListener('mouseenter', () => whale.style.transform = 'scale(1.05)');
  whale.addEventListener('mouseleave', () => whale.style.transform = 'scale(1)');
});
function toggleChatbot() {
  const box = document.getElementById("chatbotBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}
  const serviceBlocks = document.querySelectorAll('.service-block');

  serviceBlocks.forEach(block => {
    const bgImage = block.getAttribute('data-bg');
    block.addEventListener('mouseenter', () => {
      document.body.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('${bgImage}')`;
    });
    block.addEventListener('mouseleave', () => {
      document.body.style.backgroundImage = 'none';
    });
  });






