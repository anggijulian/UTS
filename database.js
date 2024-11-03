const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./hotel_reservasi.db");

// Create table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS reservasi (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nama_tamu TEXT NOT NULL,
        tipe_kamar TEXT NOT NULL,
        check_in DATE NOT NULL,
        check_out DATE NOT NULL,
        status_pembayaran TEXT NOT NULL
    )`);
});

module.exports = db;
