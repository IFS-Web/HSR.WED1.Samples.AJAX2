// TODO: Demo 3 - create class MusicEntry (model) with artist and title properties
class MusicService {
    async getAll() {
        const response = await fetch(MusicService.BASE_URL);
        return await response.json();
        // TODO: Demo 3 - return models instead of DTOs
    }
}

MusicService.BASE_URL = '/api/music';
