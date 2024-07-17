document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animated-section');
    const profilePhoto = document.querySelector('.profile-photo');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.visibility = 'visible';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    const photoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                profilePhoto.style.opacity = 1;
                profilePhoto.style.visibility = 'visible';
                photoObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    photoObserver.observe(profilePhoto);
});
