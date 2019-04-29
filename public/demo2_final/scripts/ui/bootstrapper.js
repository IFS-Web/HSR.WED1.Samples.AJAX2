// TODO: Demo 2

class Bootstrapper {
    static start() {
        new Bootstrapper().renderIndex();
    }

    renderIndex() {
        const musicService = new MusicService();
        const indexController = new IndexController(musicService);

        indexController.indexAction();
    }
}
