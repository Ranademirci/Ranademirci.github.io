// Tarih ve saati günceleme ksımı
function updateDateTime() {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const dateString = `Tarih: ${day}/${month}/${year}`;
    const timeString = `Saat: ${hours}:${minutes}:${seconds}`;

    document.getElementById('date').textContent = dateString;
    document.getElementById('time').textContent = timeString;
}

// Daha Fazla ve Daha Az metinlerini değiştirerek ek bilgi gösterir veya gizler
function toggleMoreInfo(button) {
    const moreInfo = document.getElementById('moreInfo');
    const mainInfo = document.getElementById('mainInfo');
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        mainInfo.style.display = "none";
        button.textContent = "Daha Az";
    } else {
        moreInfo.style.display = "none";
        mainInfo.style.display = "block";
        button.textContent = "Daha Fazla";
    }
}

function contactFormSubmit(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 

    if (!email.match(emailformat)) {
        alert('Lütfen geçerli bir e-posta adresi girin.'); 
        return; 
    }

    if (!name || !email || !message) {
        alert('Lütfen tüm alanları doldurun.'); 
        return; 
    }
    alert('Mesajınız başarıyla gönderildi!'); 
    document.getElementById('contact-form').reset(); 
}
document.getElementById('contact-form').addEventListener('submit', contactFormSubmit);


// Projeleri filtreleme kısmı (tüm projeleri veya sadece beğenilen projeleri gösterir)
function filterProjects(filter) {
    const projectBoxes = document.querySelectorAll('.project-box');
    projectBoxes.forEach(function(box) {
        if (filter === 'all') {
            box.style.display = 'block';
        } 
        else if (filter === 'liked') {
            const isLiked = box.getAttribute('data-liked');
            if (isLiked === 'true') {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        }
    });
}

// Modal açar ve içerikler güncellenir
function openModal(imageSrc, header, description) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalHeader").innerText = header;
    document.getElementById("modalDescription").innerText = description;
}

// Modal'ı kapatma
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// DateTime fonksiyonunu her saniyede bir günceller
setInterval(updateDateTime, 1000);
updateDateTime();
