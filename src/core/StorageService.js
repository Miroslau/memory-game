class StorageService {
  static STORAGE_KEY = 'memory_game_leaderboard';
  static MAX_RECORDS = 5;

  static getRecords() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Failed to parse leaderboard data from localStorage', error);
      return [];
    }
  }

  static saveRecords(moves) {
    const records = this.getRecords();

    const newRecord = {
      moves,
      date: new Date().toLocaleDateString('ru-RU'),
    };

    records.push(newRecord);

    records.sort((a, b) => a.moves - b.moves);

    const topRecords = records.slice(0, this.MAX_RECORDS);

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(topRecords));
  }
}

export default StorageService;
