exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        { name: 'Harsh Kotak', address: 'Honolulu, HI', mobile: '808-462-7075', work: 'altres', home: '', email: 'hkotak@dev.com', twitter: '', instagram: 'harshkfitness', github: 'https://github.com/hkotak', created_by: 1 },

        {
          name: 'Wymin',
          address: 'Honolulu, HI',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
          created_by: 1
        },

        {
          name: 'Jyama',
          address: 'Honolulu, HI',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
          created_by: 1
        },

        {
          name: 'Sarah',
          address: 'Honolulu, HI',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
          created_by: 1
        },

        {
          name: 'Chaz',
          address: 'Honolulu, HI',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
          created_by: 1
        },

        {
          name: 'May',
          address: 'Honolulu, HI',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
          created_by: 1
        },

        {
          name: 'Jason',
          address: 'Honolulu, HI',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
          created_by: 1
        },

        {
          name: 'Baseem',
          address: 'Honolulu, HI',
          mobile: '',
          work: '',
          home: '',
          email: '',
          twitter: '',
          instagram: '',
          github: '',
          created_by: 1
        },

        {
          name: "Burton",
          address: "32488 Carioca Junction",
          mobile: "514-751-1457",
          work: "130-188-3238",
          home: "702-724-2399",
          email: "bgilleson0@etsy.com",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Jennette",
          address: "8046 Brentwood Place",
          mobile: "163-373-8155",
          work: "538-803-8301",
          home: "231-527-6119",
          email: "jplumbridge1@de.vu",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Catharina",
          address: "187 Almo Way",
          mobile: "769-509-8172",
          work: "104-342-2003",
          home: "201-124-1822",
          email: "ctildesley2@people.com.cn",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Aland",
          address: "79 Columbus Drive",
          mobile: "749-766-0140",
          work: "777-998-0350",
          home: "736-439-9417",
          email: "amuccino3@livejournal.com",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Amalie",
          address: "968 Northview Road",
          mobile: "331-953-4450",
          work: "124-900-1354",
          home: "174-825-4137",
          email: "aunderhill4@springer.com",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Marcie",
          address: "1 Vidon Place",
          mobile: "721-256-1017",
          work: "228-564-3954",
          home: "246-169-6575",
          email: "mcrossdale5@domainmarket.com",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Sheri",
          address: "82663 Arapahoe Street",
          mobile: "376-439-9757",
          work: "517-740-7906",
          home: "826-760-1371",
          email: "ssnozzwell6@sogou.com",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Dennie",
          address: "81 Fordem Court",
          mobile: "132-369-8518",
          work: "424-896-4241",
          home: "723-606-9866",
          email: "dwickson7@cdc.gov",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Petronia",
          address: "42 Kennedy Place",
          mobile: "611-174-4715",
          work: "282-826-5027",
          home: "335-514-6946",
          email: "pgauson8@delicious.com",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Glyn",
          address: "4468 Thierer Terrace",
          mobile: "741-522-9814",
          work: "621-603-4246",
          home: "266-489-6189",
          email: "gbenzie9@networkadvertising.org",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Jacqui",
          address: "750 Pleasure Way",
          mobile: "210-847-9965",
          work: "800-431-2977",
          home: "446-393-5662",
          email: "jredpartha@furl.net",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Birgitta",
          address: "8580 Morning Avenue",
          mobile: "696-986-3799",
          work: "778-533-2723",
          home: "800-597-8298",
          email: "bbearfootb@ebay.com",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Baird",
          address: "93482 Vidon Plaza",
          mobile: "678-478-8551",
          work: "297-979-8642",
          home: "488-402-2476",
          email: "bgebhardc@skype.com",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Oralie",
          address: "459 Menomonie Road",
          mobile: "165-544-3631",
          work: "485-735-2187",
          home: "172-116-1781",
          email: "obratleyd@imageshack.us",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }, {
          name: "Grace",
          address: "5 Riverside Way",
          mobile: "767-364-1411",
          work: "137-245-8079",
          home: "859-888-4451",
          email: "gshovline@canalblog.com",
          twitter: "",
          instagram: "",
          github: "",
          created_by: 1
        }]

      );
    });
};
