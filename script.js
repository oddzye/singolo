window.addEventListener('scroll', (event) => {
    const currentPosition = window.scrollY;
    const sections = document.querySelectorAll('#wrapper > *');
    const links = document.querySelectorAll('ul.navigation li');

    sections.forEach((section, sectionIdx) => {
        if (section.offsetTop <= currentPosition && currentPosition <= (section.offsetTop + section.offsetHeight)) {
            links.forEach((link, linkIdx) => {
                link.classList.remove('active');
                if (linkIdx === sectionIdx) {
                    link.classList.add('active');
                }
            })
            
        }
    })
})