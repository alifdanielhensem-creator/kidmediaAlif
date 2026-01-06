document.addEventListener('DOMContentLoaded', () => {
    // Definisi Elemen
    const bgm = document.getElementById('bgm');
    const sfxClick = document.getElementById('sfx-click');
    const sfxHover = document.getElementById('sfx-hover');
    const sfxAccess = document.getElementById('sfx-access');
    
    const enterBtn = document.getElementById('enter-btn');
    const introOverlay = document.getElementById('intro-overlay');
    const bootText = document.getElementById('boot-text');

    // 1. Simulasi Loading Boot Text
    const messages = [
        "Decrypting neural link...",
        "Authorizing Agent ID 013...",
        "Accessing M.A.T.A database...",
        "Neural handshake complete."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
        bootText.innerText = messages[i];
        i++;
        if (i >= messages.length) {
            clearInterval(interval);
            enterBtn.style.opacity = "1";
            enterBtn.style.pointerEvents = "all";
        }
    }, 1000);

    // 2. Fungsi Masuk Dashboard (Mula Bunyi)
    enterBtn.addEventListener('click', () => {
        // Mainkan SFX Access
        sfxAccess.play();
        
        // Mainkan & Fade In BGM
        bgm.volume = 0;
        bgm.play();
        let vol = 0;
        const fadeBGM = setInterval(() => {
            if (vol < 0.3) {
                vol += 0.05;
                bgm.volume = vol;
            } else {
                clearInterval(fadeBGM);
            }
        }, 200);

        // Transition Keluar Intro
        introOverlay.style.top = "-100%";
        setTimeout(() => {
            document.querySelector('.glass-container').style.opacity = "1";
            document.querySelector('.glass-container').style.transform = "translate(-50%, -50%) scale(1)";
        }, 400);
    });

    // 3. Tambah Bunyi Hover & Klik pada Semua Butang
    const uiElements = document.querySelectorAll('.nav-item, .launch-btn, button');
    
    uiElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            sfxHover.currentTime = 0;
            sfxHover.volume = 0.2;
            sfxHover.play();
        });

        el.addEventListener('click', () => {
            sfxClick.currentTime = 0;
            sfxClick.play();
        });
    });

    // 4. Update Masa Real-time
    setInterval(() => {
        const now = new Date();
        document.getElementById('time-display').innerText = now.toLocaleTimeString();
    }, 1000);
});
