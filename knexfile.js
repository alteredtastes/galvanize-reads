module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/galvreads'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
