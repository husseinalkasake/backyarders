/*
Helper functions and arrays for the days of the week.
*/

const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

// returns the name of the day of the week that is daysFromNow in the future
const nameOfFutureDay = (daysFromNow) => {
	const futureDay = new Date();
	futureDay.setDate(futureDay.getDate() + daysFromNow);
	return daysOfWeek[futureDay.getDay()]; // getDay() returns a number between 0 (Sunday) and 6 (Saturday)
};

// the title of the day
const dayName = [
	"Today",
	"Tomorrow",
	nameOfFutureDay(2),
	nameOfFutureDay(3),
	nameOfFutureDay(4),
	nameOfFutureDay(5),
	nameOfFutureDay(6),
];

export default dayName;
