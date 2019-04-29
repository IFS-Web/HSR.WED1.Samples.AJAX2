// TODO: Demo 3 - Third Step
//  - Convert to class with instance fields 'indexTemplateComplied'/'musicContainter'
//  - Pass Business Layer (MusicService instance) as argument to new class

const indexTemplateComplied = Handlebars.compile(document.getElementById('music-list-template').innerHTML);
const musicContainter = document.getElementById('music-list');

function indexAction() {
    renderIndexView();
}

async function renderIndexView() {
    const music = await musicService.getAll();
    musicContainter.innerHTML = indexTemplateComplied(music);
}
