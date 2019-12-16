exports.seed = function(knex) {
	//OOO-cleanup.js already deleted the data from all tables, we only need to insert the data
	// Deletes ALL existing entries
	// Inserts seed entries
	return knex('roles').insert([
		{ id: 1, name: 'admin' }, //id: 1
		{ id: 2, name: 'TLs' }, //id:2
		{ id: 3, name: 'students' }, //id:3
	]);
};
