module.exports = {
  db: {
    name: 'db',
    connector: 'postgresql',
    url: process.env.DATABASE_URL,
    ssl: true
  }
};
