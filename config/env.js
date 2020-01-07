const env = {
    database: 'simpleSequelize' || 'database name',
    username: 'root',
    password: 'Enter database password',
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
  
  
