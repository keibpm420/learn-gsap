/**
 * Flipのチュートリアル
 */
const initializeFlipTutorial = () => {
    const cats = gsap.utils.toArray('.js-gallery-item');
    let selectedCat = cats[2];
    const selectedCatDatasetGrid = 'img-3';

    const changeGrid = (cat) => {
        if (cat === selectedCat) return;

        let flipState = Flip.getState(cats);
        console.log(flipState);

        selectedCat.dataset.grid = cat.dataset.grid;
        cat.dataset.grid = selectedCatDatasetGrid;
        selectedCat = cat;

        Flip.from(flipState, {
            absolute: true,
            ease: 'bounce',
            duration: 0.5,
        });
    };

    cats.forEach((cat) => {
        cat.addEventListener('click', (e) => changeGrid(cat));
    });
};

initializeFlipTutorial();
