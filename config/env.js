const env = {
    database: 'simpleSequelize',
    username: 'root',
    password: 'aijaj123',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;
  
  