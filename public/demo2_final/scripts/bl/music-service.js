// TODO: Demo 3
class MusicService {
    async getAll() {
        const response = await fetch(MusicService.BASE_URL);
        const dtos = await response.json();
        // TODO: Demo 3
        return dtos.map(dto => new MusicEntry(dto.artist, dto.title));
    }
}

MusicService.BASE_URL = '/api/music';
