// Copy JS 
function copyText() {
    let copyInput = document.getElementById("copyLink");
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyInput.value);
    alert("Link copied!");
}

// 1. Download Vcard
function downloadVcard() {
  window.location.href = "dklaw.vcf"; // <-- Replace with your vCard file URL
}

// 2. Send to Email (opens mail)
function sendToEmail() {
  window.location.href =
    "mailto:?subject=Your vCard&body=Here is the vCard link: https://qr1.be/A3O8O0";
}

// 3. Open default email app
function sendFromEmailApp() {
  window.location.href = "mailto:mycase@dklaw.com";
}

// 4. Copy box link
function copyText() {
  let copyInput = document.getElementById("copyLink");
  copyInput.select();
  navigator.clipboard.writeText(copyInput.value);
  alert("Copied!");
}

// 5. Submit contact form
function submitContact(event) {
  event.preventDefault();

  let name = document.getElementById("cname").value;
  let email = document.getElementById("cemail").value;
  let phone = document.getElementById("cphone").value;

  alert("Thank you! We received your info.");

  // Close modal
  let modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
  modal.hide();
}