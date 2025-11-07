window.addEventListener('load', () => {

    // Yeni #world elemanını seçelim
    const world = document.getElementById('world');
    
    // Diğer elemanları da seçelim
    const penguin = document.getElementById('penguin');
    const scene = document.getElementById('scene'); // Buna artık çok ihtiyacımız yok ama kalsın
    const signContainer = document.getElementById('signContainer');
    const finalMessage = document.getElementById('finalMessage');

    const signs = [
        document.getElementById('sign1'),
        document.getElementById('sign2'),
        document.getElementById('sign3')
    ];

    const continueButtons = document.querySelectorAll('.continue-btn');
    const finishButton = document.getElementById('finish-btn');

    let currentSignIndex = 0;
    let runTimer; 

    function startPenguinRun() {
        clearTimeout(runTimer);
        
        signContainer.classList.add('hidden');
        if (currentSignIndex > 0) {
            signs[currentSignIndex - 1].classList.add('hidden');
        }

        // 1. İSTEK (Durma Animasyonu Düzeltildi):
        // Koşarken 'tired-panting' sınıfını kaldır
        penguin.classList.remove('tired-panting');
        
        // #scene yerine #world'e scrolling sınıfını ekle
        world.classList.add('scrolling');

        runTimer = setTimeout(showSign, 5000); 
    }

    function showSign() {
        // #world'den scrolling sınıfını kaldır
        world.classList.remove('scrolling');
        
        // 1. İSTEK (Durma Animasyonu Düzeltildi):
        // Durduğunda 'tired-panting' sınıfını ekle
        penguin.classList.add('tired-panting');

        signContainer.classList.remove('hidden');
        signs[currentSignIndex].classList.remove('hidden');
    }

    function handleContinue() {
        currentSignIndex++; 
        startPenguinRun(); 
    }

    // 3. İSTEK (Bitiş Efekti Düzeltildi)
    function handleFinish() {
        // Son tabelayı gizle
        signContainer.classList.add('hidden');
        signs[currentSignIndex].classList.add('hidden');
        
        // Penguenin durma animasyonunu durdur
        penguin.classList.remove('tired-panting');
        
        // #scene yerine #world'ü kaydır
        world.classList.add('finished');
        
        // Final mesajını görünür yap (CSS'teki delay ile görünecek)
        finalMessage.classList.add('visible');
        finalMessage.classList.remove('hidden'); // 'display: none' kuralını kaldır
    }

    // --- Olayları Bağlama ---

    continueButtons.forEach(button => {
        button.addEventListener('click', handleContinue);
    });

    finishButton.addEventListener('click', handleFinish);

    // --- Macerayı Başlat! ---
    startPenguinRun();

});