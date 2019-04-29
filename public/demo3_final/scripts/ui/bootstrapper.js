import {MusicService} from '../bl/music-service.js';
import {IndexController} from './controllers/index-controller.js';

// TODO: Demo 5
export class Bootstrapper {
    static start() {
        new Bootstrapper().renderIndex();
    }

    renderIndex() {
        const musicService = new MusicService();
        const indexController = new IndexController(musicService);

        indexController.indexAction();
    }
}
