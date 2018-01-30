import test from "ava";
import Index from "../src/index";
import People from "../src/people";

test("check file", t => {
  t.deepEqual(People.length, 87);
});

test("page 1", t => {
  t.deepEqual(Index.page({filters: [], page: 1, sortCol: "name", sortDir: "asc"}), {
    total: 87,
    data: [
      {
	birth_year: "41BBY",
	eye_color: "orange",
	gender: "male",
	hair_color: "none",
	height: "180",
	mass: "83",
	name: "Ackbar",
	skin_color: "brown mottle",
      }, {
	birth_year: "unknown",
	eye_color: "blue",
	gender: "female",
	hair_color: "none",
	height: "184",
	mass: "50",
	name: "Adi Gallia",
	skin_color: "dark",
      }, {
	birth_year: "41.9BBY",
	eye_color: "blue",
	gender: "male",
	hair_color: "blond",
	height: "188",
	mass: "84",
	name: "Anakin Skywalker",
	skin_color: "fair",
      }, {
	birth_year: "unknown",
	eye_color: "brown",
	gender: "male",
	hair_color: "brown",
	height: "unknown",
	mass: "unknown",
	name: "Arvel Crynyd",
	skin_color: "fair",
      }, {
	birth_year: "48BBY",
	eye_color: "hazel",
	gender: "female",
	hair_color: "none",
	height: "178",
	mass: "55",
	name: "Ayla Secura",
	skin_color: "blue",
      }, {
	birth_year: "unknown",
	eye_color: "black",
	gender: "none",
	hair_color: "none",
	height: "unknown",
	mass: "unknown",
	name: "BB8",
	skin_color: "none",
      }, {
	birth_year: "67BBY",
	eye_color: "brown",
	gender: "male",
	hair_color: "black",
	height: "191",
	mass: "unknown",
	name: "Bail Prestor Organa",
	skin_color: "tan",
      }, {
	birth_year: "40BBY",
	eye_color: "blue",
	gender: "female",
	hair_color: "black",
	height: "166",
	mass: "50",
	name: "Barriss Offee",
	skin_color: "yellow",
      }, {
	birth_year: "unknown",
	eye_color: "orange",
	gender: "male",
	hair_color: "none",
	height: "163",
	mass: "65",
	name: "Ben Quadinaros",
	skin_color: "grey, green, yellow",
      }, {
	birth_year: "47BBY",
	eye_color: "blue",
	gender: "female",
	hair_color: "brown",
	height: "165",
	mass: "75",
	name: "Beru Whitesun lars",
	skin_color: "light",
      }
    ]
  });
});

test("page 2", t => {
  t.deepEqual(Index.page({filters: [], page: 2, sortCol: "name", sortDir: "asc"}), {
    total: 87,
    data: [
      {
	birth_year: "unknown",
	eye_color: "pink",
	gender: "male",
	hair_color: "none",
	height: "180",
	mass: "unknown",
	name: "Bib Fortuna",
	skin_color: "pale",
      }, {
	birth_year: "24BBY",
	eye_color: "brown",
	gender: "male",
	hair_color: "black",
	height: "183",
	mass: "84",
	name: "Biggs Darklighter",
	skin_color: "light",
      }, {
	birth_year: "31.5BBY",
	eye_color: "brown",
	gender: "male",
	hair_color: "black",
	height: "183",
	mass: "78.2",
	name: "Boba Fett",
	skin_color: "fair",
      }, {
	birth_year: "53BBY",
	eye_color: "red",
	gender: "male",
	hair_color: "none",
	height: "190",
	mass: "113",
	name: "Bossk",
	skin_color: "green",
      }, {
	birth_year: "112BBY",
	eye_color: "yellow",
	gender: "n/a",
	hair_color: "n/a",
	height: "167",
	mass: "75",
	name: "C-3PO",
	skin_color: "gold",
      }, {
	birth_year: "unknown",
	eye_color: "unknown",
	gender: "female",
	hair_color: "unknown",
	height: "unknown",
	mass: "unknown",
	name: "Captain Phasma",
	skin_color: "unknown",
      }, {
	birth_year: "200BBY",
	eye_color: "blue",
	gender: "male",
	hair_color: "brown",
	height: "228",
	mass: "112",
	name: "Chewbacca",
	skin_color: "unknown",
      }, {
	birth_year: "82BBY",
	eye_color: "blue",
	gender: "male",
	hair_color: "brown",
	height: "183",
	mass: "unknown",
	name: "Cliegg Lars",
	skin_color: "fair",
      }, {
	birth_year: "unknown",
	eye_color: "brown",
	gender: "female",
	hair_color: "brown",
	height: "157",
	mass: "unknown",
	name: "Cordé",
	skin_color: "light",
      }, {
	birth_year: "54BBY",
	eye_color: "yellow",
	gender: "male",
	hair_color: "none",
	height: "175",
	mass: "80",
	name: "Darth Maul",
	skin_color: "red",
      }
    ]
  });
});

test("filter", t => {
  t.deepEqual(Index.page({filters: [{name: "hair_color", values: ["brown"]}], page: 1, sortCol: "name", sortDir: "asc"}), {
    total: 19,
    data: [
      {
        birth_year: "unknown",
        eye_color: "brown",
        gender: "male",
        hair_color: "brown",
        height: "unknown",
        mass: "unknown",
        name: "Arvel Crynyd",
        skin_color: "fair",
      }, {
        birth_year: "47BBY",
        eye_color: "blue",
        gender: "female",
        hair_color: "brown",
        height: "165",
        mass: "75",
        name: "Beru Whitesun lars",
        skin_color: "light",
      }, {
        birth_year: "200BBY",
        eye_color: "blue",
        gender: "male",
        hair_color: "brown",
        height: "228",
        mass: "112",
        name: "Chewbacca",
        skin_color: "unknown",
      }, {
        birth_year: "82BBY",
        eye_color: "blue",
        gender: "male",
        hair_color: "brown",
        height: "183",
        mass: "unknown",
        name: "Cliegg Lars",
        skin_color: "fair",
      }, {
        birth_year: "unknown",
        eye_color: "brown",
        gender: "female",
        hair_color: "brown",
        height: "157",
        mass: "unknown",
        name: "Cordé",
        skin_color: "light",
      }, {
        birth_year: "unknown",
        eye_color: "brown",
        gender: "female",
        hair_color: "brown",
        height: "165",
        mass: "unknown",
        name: "Dormé",
        skin_color: "light",
      }, {
        birth_year: "29BBY",
        eye_color: "brown",
        gender: "male",
        hair_color: "brown",
        height: "180",
        mass: "80",
        name: "Han Solo",
        skin_color: "fair",
      }, {
        birth_year: "unknown",
        eye_color: "blue",
        gender: "male",
        hair_color: "brown",
        height: "180",
        mass: "110",
        name: "Jek Tono Porkins",
        skin_color: "fair",
      }, {
        birth_year: "19BBY",
        eye_color: "brown",
        gender: "female",
        hair_color: "brown",
        height: "150",
        mass: "49",
        name: "Leia Organa",
        skin_color: "light",
      }, {
        birth_year: "52BBY",
        eye_color: "blue",
        gender: "male",
        hair_color: "brown, grey",
        height: "178",
        mass: "120",
        name: "Owen Lars",
        skin_color: "light",
      }
    ]
  });
});

test("complex filter", t => {
  t.deepEqual(Index.page({filters: [{name: "eye_color", values: ["yellow"]}, {name: "hair_color", values: ["brown", "yellow", "black"]}], page: 1, sortCol: "name", sortDir: "asc"}), {
    total: 1,
    data: [
      {
	birth_year: "unknown",
	eye_color: "yellow",
	gender: "male",
	hair_color: "black",
	height: "137",
	mass: "unknown",
	name: "Watto",
	skin_color: "blue, grey",
      }
    ]
  });
});
