// TODO: Demo 1 - export class and import MusicEntry
class MusicService {
    async getAll() {
        const response = await fetch(MusicService.BASE_URL);
        const dtos = await response.json();
        return dtos.map(dto => new MusicEntry(dto.artist, dto.title));
    }
}

MusicService.BASE_URL = '/api/music';
