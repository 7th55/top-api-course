db = db.getSiblingDB('dev_db');
db.createUser({
  user: 'dev_user',
  pwd: 'dev_1234',
  roles: [{ role: 'readWrite', db: 'dev_db' }],
});

db = db.getSiblingDB('test_db');
db.createUser({
  user: 'test_user',
  pwd: 'test_1234',
  roles: [{ role: 'readWrite', db: 'test_db' }],
});
