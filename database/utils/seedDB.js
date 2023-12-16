/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageURL: "https://static01.nyt.com/images/2012/10/14/arts/17ny-today-huntercollege/17ny-today-huntercollege-superJumbo-v2.jpg?quality=75&auto=webp",
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageURL: "https://qns.com/wp-content/uploads/2020/11/twitter_sm-07.png"
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageURL: "https://www.hillel.org/wp-content/uploads/college-images/CUNY_Brooklyn_College.jpg"
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Smith",
		email: "JoeSmith@gmail.com",
		imageURL: "https://www.verywellfamily.com/thmb/I8W55h0R4THfVPlYiLO0xdey010=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-493738798-5873c53e3df78c17b6ef7154.jpg",
		gpa: 4.0
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      	lastname: "Johnson",
		email: "MaryJohnson@gmail.com",
		imageURL: "https://d39l2hkdp2esp1.cloudfront.net/img/photo/127768/127768_00_2x.jpg?20170710061021",
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;