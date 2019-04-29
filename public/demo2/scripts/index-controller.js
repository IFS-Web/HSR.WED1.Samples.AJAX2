class IndexController {
    constructor(musicService) {
        this.musicService = musicService;
        this.indexTemplateComplied = Handlebars.compile(document.getElementById('music-list-template').innerHTML);
        this.musicContainter = document.getElementById('music-list');
    }

    indexAction() {
        this.renderIndexView();
    }

    async renderIndexView() {
        const music = await this.musicService.getAll();
        this.musicContainter.innerHTML = this.indexTemplateComplied(music);
    }
}


