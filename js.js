document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    const submitBtn = contactForm.querySelector('button');

    contactForm.addEventListener('submit', (e) => {
        // 1. Empêcher le rechargement de la page
        e.preventDefault();

        // Récupération des données
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // 2. Validation simple
        if (!name || !email || !message) {
            alert("Veuillez remplir tous les champs avant d'envoyer.");
            return;
        }

        // 3. Simulation d'envoi (Effet visuel)
        submitBtn.innerText = "Envoi en cours...";
        submitBtn.style.backgroundColor = "#8e44ad"; // Violet
        submitBtn.disabled = true;

        setTimeout(() => {
            // Changement d'état après 1.5 seconde
            submitBtn.innerText = "Message envoyé !";
            submitBtn.style.backgroundColor = "#2ecc71"; // Vert succès
            
            // Réinitialisation du formulaire
            contactForm.reset();

            // Remise à l'état initial après 3 secondes
            setTimeout(() => {
                submitBtn.innerText = "Envoyer";
                submitBtn.style.backgroundColor = ""; // Retour au CSS d'origine
                submitBtn.disabled = false;
            }, 3000);

            console.log(`Nouveau message de ${name} (${email}) : ${message}`);
        }, 1500);
    });
});