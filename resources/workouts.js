import workoutLevels from "./desiredDifficulty";
import workoutTypes, { absLevels } from "./workoutTypes";

export const NOT_APPLICABLE = "NA";

const workouts = [
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.BEGINNER,
		name: "eccentric from knee pushup",
		sourceMain: "/vDWQ",
		sourceEdu: "/f949 ",
		muscles: "Trciep/ chest",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.BEGINNER,
		name: "incline pushup",
		sourceMain: "/ePFR",
		sourceEdu: "/h6Y5 ",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.BEGINNER,
		name: "isometric from knee pushup",
		sourceMain: "/kd0O5",
		sourceEdu: "/HGjf ",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.BEGINNER,
		name: "isometric from toes pushup",
		sourceMain: "/vRKP",
		sourceEdu: "/eIUs ",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.BEGINNER,
		name: "knee pushups",
		sourceMain: "/rCAp",
		sourceEdu: "/bXiE ",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.BEGINNER,
		name: "plank shoulder tap pushup",
		sourceMain: "/V3eg",
		sourceEdu: "/ZZbT",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.BEGINNER,
		name: "up and down plank knees",
		sourceMain: "/u0Cz",
		sourceEdu: "/X0ks",
		muscles: "Triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.BEGINNER,
		name: "up and down plank toes",
		sourceMain: "/dId7",
		sourceEdu: "/W3ae ",
		muscles: "Triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.INTERMEDIATE,
		name: "decline pushup",
		sourceMain: "/bonq",
		sourceEdu: "/4u2R",
		muscles: "Triceps/chest",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.INTERMEDIATE,
		name: "dips",
		sourceMain: "/nmU9 ",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.INTERMEDIATE,
		name: "regular pushup",
		sourceMain: "/4HQt",
		sourceEdu: "/4HQt ",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.INTERMEDIATE,
		name: "slow eccentric pushup",
		sourceMain: "/lpKC",
		sourceEdu: "//mYXa  ",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.INTERMEDIATE,
		name: "staggered pushups",
		sourceMain: "/b0qh",
		sourceEdu: "/nLp9 ",
		muscles: "triceps/chest",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.INTERMEDIATE,
		name: "wide pushup",
		sourceMain: "/aZcM",
		sourceEdu: "/Vhwx ",
		muscles: "chest/back",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.EXPERIENCED,
		name: "bear pushup",
		sourceMain: "/Tmdz ",
		sourceEdu: "/iyYN",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.EXPERIENCED,
		name: "clap pushups",
		sourceMain: "/T5g4 ",
		sourceEdu: "/wcu6",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.EXPERIENCED,
		name: "decline wall pushup",
		sourceMain: "/J3f7A",
		sourceEdu: "/1JSr",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.EXPERIENCED,
		name: "diamond pushup",
		sourceMain: "/LiUM",
		sourceEdu: "/0sEM",
		muscles: "Chest/triceps",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.EXPERIENCED,
		name: "pushup twist",
		sourceMain: "/t6PN",
		sourceEdu: "/d9OK ",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.EXPERIENCED,
		name: "staggered chair pushups.mov",
		sourceMain: "/RT_7",
		sourceEdu: "/K6-q",
		muscles: "chest /triceps",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.EXPERIENCED,
		name: "v pushup",
		sourceMain: "/JIwK ",
		sourceEdu: "/3hU8 ",
		muscles: "triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "1 hand pushups",
		sourceMain: "/G4zd",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "5 sec isometric pushup",
		sourceMain: "/YtcU",
		sourceEdu: "/Xd6y",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "archer pushup",
		sourceMain: "/mon0",
		sourceEdu: "/Mzbm",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "behind back clap pushup",
		sourceMain: "/wYmB",
		sourceEdu: "/im1a2",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "eccentric+clap pushup",
		sourceMain: "/Yu8p",
		sourceEdu: "/dfuG",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "handstand pushup",
		sourceMain: "/UHMp",
		sourceEdu: "/HzsL",
		muscles: "Shoulders/triceps",
	},
	{
		type: workoutTypes.PUSH,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "superman pushup",
		sourceMain: "/Xa_Q",
		sourceEdu: "/dzMa ",
		muscles: "Chest/triceps/shoulders",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.BEGINNER,
		name: "chair chin up",
		sourceMain: "/3FXX",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.BEGINNER,
		name: "chair pull up",
		sourceMain: "/YjAw",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.BEGINNER,
		name: "inverted row chin up",
		sourceMain: "/zNfB",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.BEGINNER,
		name: "inverted row pull up",
		sourceMain: "/rr_0",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.BEGINNER,
		name: "scapula raises",
		sourceMain: "/5idd ",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.BEGINNER,
		name: "water jug curls",
		sourceMain: "/APOw ",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.BEGINNER,
		name: "wide water jug curls",
		sourceMain: "/YrSv ",
		sourceEdu: "/APOw",
		muscles: "Biceps",
	},
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.BEGINNER,
	// 	name: "back widows",
	// 	sourceMain: "",
	// 	sourceEdu: "",
	// 	muscles: "Back",
	// },
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.BEGINNER,
	// 	name: "lat slides",
	// 	sourceMain: "",
	// 	sourceEdu: "",
	// 	muscles: "Back",
	// },
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.BEGINNER,
	// 	name: "superman",
	// 	sourceMain: "",
	// 	sourceEdu: "",
	// 	muscles: "Back",
	// },
	{
		type: workoutTypes.PULL,
		level: workoutLevels.INTERMEDIATE,
		name: "isometric hold at 45 degrees chin up",
		sourceMain: "/NaVQ ",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.INTERMEDIATE,
		name: "isometric hold at 45 degrees pull up",
		sourceMain: "/5FxX",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.INTERMEDIATE,
		name: "regular chin up",
		sourceMain: "/EPpM",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.INTERMEDIATE,
		name: "regular pull up",
		sourceMain: "/rkjd ",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.INTERMEDIATE,
	// 	name: "water jug curls",
	// 	sourceMain: "",
	// 	sourceEdu: NOT_APPLICABLE,
	// 	muscles: "Biceps",
	// },
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.INTERMEDIATE,
	// 	name: "wide water jug curls",
	// 	sourceMain: "",
	// 	sourceEdu: "",
	// 	muscles: "Biceps",
	// },
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.INTERMEDIATE,
	// 	name: "back widows",
	// 	sourceMain: "",
	// 	sourceEdu: "",
	// 	muscles: "Back",
	// },
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.INTERMEDIATE,
	// 	name: "lat slides",
	// 	sourceMain: "",
	// 	sourceEdu: "",
	// 	muscles: "Back",
	// },
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.INTERMEDIATE,
	// 	name: "superman",
	// 	sourceMain: "",
	// 	sourceEdu: "",
	// 	muscles: "Back",
	// },
	{
		type: workoutTypes.PULL,
		level: workoutLevels.EXPERIENCED,
		name: "1.5 chin up",
		sourceMain: "/0qra ",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.EXPERIENCED,
		name: "1.5 pull up",
		sourceMain: "/Gr90",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.EXPERIENCED,
		name: "finger chin up",
		sourceMain: "/UDd5",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.EXPERIENCED,
		name: "finger pull up",
		sourceMain: "/yrI8",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.EXPERIENCED,
		name: "isometric hold at 90 degrees chin up",
		sourceMain: "/Siey",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.EXPERIENCED,
	// 	name: "water jug curls",
	// 	sourceMain: "",
	// 	sourceEdu: NOT_APPLICABLE,
	// 	muscles: "Biceps",
	// },
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.EXPERIENCED,
	// 	name: "wide water jug curls",
	// 	sourceMain: "",
	// 	sourceEdu: "",
	// 	muscles: "Biceps",
	// },
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.EXPERIENCED,
	// 	name: "back widows",
	// 	sourceMain: "",
	// 	sourceEdu: "",
	// 	muscles: "Back",
	// },
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.EXPERIENCED,
	// 	name: "lat slides",
	// 	sourceMain: "",
	// 	sourceEdu: "",
	// 	muscles: "Back",
	// },
	// {
	// 	type: workoutTypes.PULL,
	// 	level: workoutLevels.EXPERIENCED,
	// 	name: "superman",
	// 	sourceMain: "",
	// 	sourceEdu: "",
	// 	muscles: "Back ",
	// },
	{
		type: workoutTypes.PULL,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "1 hand chin up",
		sourceMain: "/FTij",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "1 hand pull up",
		sourceMain: "/lGgJS",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "1 min chin up",
		sourceMain: "/BPHc",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.PULL,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "1 min pull up",
		sourceMain: "/Cqz3",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Back/biceps",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.BEGINNER,
		name: "chair squat",
		sourceMain: "/oJMX",
		sourceEdu: "/tBnV",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.BEGINNER,
		name: "half squat",
		sourceMain: "/b5LN",
		sourceEdu: "/jGwYK",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.BEGINNER,
		name: "lunges",
		sourceMain: "/msVs",
		sourceEdu: "/DKOg",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.BEGINNER,
		name: "regular squat",
		sourceMain: "/UhYy",
		sourceEdu: "/cwW9",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.BEGINNER,
		name: "step ups",
		sourceMain: "/YoqK",
		sourceEdu: "/57Qz",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.INTERMEDIATE,
		name: "1 leg squat",
		sourceMain: "/H2uL",
		sourceEdu: "/mLIn",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.INTERMEDIATE,
		name: "1.5 squats",
		sourceMain: "/2IjE",
		sourceEdu: "/iB3C",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.INTERMEDIATE,
		name: "box jump",
		sourceMain: "/51ro",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.INTERMEDIATE,
		name: "isometric squat at bottom",
		sourceMain: "/ImBG",
		sourceEdu: "/72N1",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.INTERMEDIATE,
		name: "narrow leg squat",
		sourceMain: "/Q00X",
		sourceEdu: "/Rxhr",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.INTERMEDIATE,
		name: "wall sit",
		sourceMain: "/B9AB",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.EXPERIENCED,
		name: "broad jump squat",
		sourceMain: "/uW4J",
		sourceEdu: "/ki73",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.EXPERIENCED,
		name: "jump squat",
		sourceMain: "/u0sp",
		sourceEdu: "/ATfR",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.EXPERIENCED,
		name: "pause into jump squat",
		sourceMain: "/E-8F",
		sourceEdu: "/9EMf",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.EXPERIENCED,
		name: "pistol squat",
		sourceMain: "/R93S",
		sourceEdu: "/mOMb",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.EXPERIENCED,
		name: "side to side 1 leg squat",
		sourceMain: "/y2xV",
		sourceEdu: "/cf0Q",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.EXPERIENCED,
		name: "single leg box jump",
		sourceMain: "/UTRF",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "isometric pistol squat",
		sourceMain: "/s1GP",
		sourceEdu: "/OfwaT",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "long isometric holds squat",
		sourceMain: "/YhnW",
		sourceEdu: "/cm0U",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "pistol to jump squats",
		sourceMain: "/bZEa",
		sourceEdu: "/1OZN",
		muscles: "Legs",
	},
	{
		type: workoutTypes.LEGS,
		level: workoutLevels.GIVE_ME_A_CHALLENGE,
		name: "switch jumps squat",
		sourceMain: "/Kjehg",
		sourceEdu: "/Kjehg ",
		muscles: "Legs",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "bent leg raises",
		sourceMain: "/KxL2",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "boat hold",
		sourceMain: "/A_Wg",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "crunches",
		sourceMain: "/rFWB",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "flutter kicks",
		sourceMain: "/Uqpi",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "heel touches",
		sourceMain: "/95XY",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "knee slides",
		sourceMain: "/TvkB",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "knees twists",
		sourceMain: "/sprr",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "leg raises",
		sourceMain: "/5aIzE",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "plank",
		sourceMain: "/byoX",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "russian twists",
		sourceMain: "/wa9y",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "scissors",
		sourceMain: "/qSb0",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "seated v up",
		sourceMain: "/1T7a",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.EASY,
		name: "side v up",
		sourceMain: "/wr-h",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "bent leg raises",
		sourceMain: "/KxL2",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "boat hold",
		sourceMain: "/pHrb",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "crunches",
		sourceMain: "/Nnm2",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "heel touches",
		sourceMain: "/95XY",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "flutter kicks",
		sourceMain: "/Teby",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "leg raises",
		sourceMain: "/PlVQ",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "piston twists",
		sourceMain: "/t7zd",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "russian twists",
		sourceMain: "/AAo1",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "scissors",
		sourceMain: "/e6K2",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "side v up",
		sourceMain: "/PLzR",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "v up",
		sourceMain: "/iZ2HI",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "knee slides",
		sourceMain: "/TvkB",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: "Abs",
		level: absLevels.HARD,
		name: "plank",
		sourceMain: "/byoX",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Abdominals",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "burpees no pushups",
		sourceMain: "/qaAw",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body ",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "burpees w pushups",
		sourceMain: "/ZM2n",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "high knees",
		sourceMain: "/IS7s",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "lateral mountain climbers",
		sourceMain: "/xoNp",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "mountain climbers",
		sourceMain: "/SPG5",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "pike hops",
		sourceMain: "/iREn",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "prisoner get ups",
		sourceMain: "/69S9",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "ski hops",
		sourceMain: "/c9yj",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "squat burpees",
		sourceMain: "/F3HN",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "switch lunges",
		sourceMain: "/WHJr",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "twisting mountain climbers",
		sourceMain: "/pOeA",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.HIIT,
		level: absLevels.HARD,
		name: "twisting pistons",
		sourceMain: "/a6L5",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.WARM_UP,
		level: NOT_APPLICABLE,
		name: "Warm Up",
		sourceMain: "/ytwG",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
	{
		type: workoutTypes.COOL_DOWN,
		level: NOT_APPLICABLE,
		name: "Cool Down",
		sourceMain: "/R6Cp",
		sourceEdu: NOT_APPLICABLE,
		muscles: "Whole body",
	},
];

export default workouts;
