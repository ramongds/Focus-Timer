let teme = document.documentElement.classList
const buttonToggle = document.querySelector('#toggleMode')



buttonToggle.addEventListener('click', () => {

    if (teme.contains("dark")) {
        teme.remove("dark");
        teme.add("light");
    } else {
        teme.remove("light");
        teme.add("dark");
    }

    iconToggle()
});

const iconToggle = () =>{
    const iconMoon = buttonToggle.querySelector("i.ph-bold.ph-moon")
    const iconSun = buttonToggle.querySelector("i.ph-bold.ph-sun")
    
    if (teme.contains('dark')) {
        iconMoon.classList.add('hidden');
        iconSun.classList.remove('hidden');

    } else {
        iconMoon.classList.remove('hidden');
        iconSun.classList.add('hidden');
    }
}




