// TODO: Demo 5 - export Bootstrapper class and import MusicService/IndexController

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
