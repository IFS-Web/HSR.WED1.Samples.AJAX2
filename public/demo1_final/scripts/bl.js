// TODO: Demo 2
class MusicService {
    async getAll() {
        const response = await fetch(MusicService.BASE_URL);
        return await response.json();
    }
}

MusicService.BASE_URL = '/api/music';
