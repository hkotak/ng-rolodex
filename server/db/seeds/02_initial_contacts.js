exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        { name: 'Harsh Kotak', address: 'Honolulu, HI', mobile: '808-462-7075', work: 'altres', home: '', email: 'hkotak@dev.com', twitter: '', instagram: 'harshkfitness', github: 'https://github.com/hkotak', created_by: 1 },

        { name: 'Wymin', address: 'Honolulu, HI', mobile: '', work: '', home: '', email: '', twitter: '', instagram: '', github: '', created_by: 1 },

        { name: 'Jyama', address: 'Honolulu, HI', mobile: '', work: '', home: '', email: '', twitter: '', instagram: '', github: '', created_by: 1 },

        { name: 'Sarah', address: 'Honolulu, HI', mobile: '', work: '', home: '', email: '', twitter: '', instagram: '', github: '', created_by: 1 },

        { name: 'Chaz', address: 'Honolulu, HI', mobile: '', work: '', home: '', email: '', twitter: '', instagram: '', github: '', created_by: 1 },

        { name: 'May', address: 'Honolulu, HI', mobile: '', work: '', home: '', email: '', twitter: '', instagram: '', github: '', created_by: 1 },

        { name: 'Jason', address: 'Honolulu, HI', mobile: '', work: '', home: '', email: '', twitter: '', instagram: '', github: '', created_by: 1 },

        { name: 'Baseem', address: 'Honolulu, HI', mobile: '', work: '', home: '', email: '', twitter: '', instagram: '', github: '', created_by: 1 }

      ]);
    });
};
