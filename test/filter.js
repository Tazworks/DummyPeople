import test from "ava";
import Index from "../src/index";

test("filter", t => {
  t.deepEqual(Index.page({filters: {hair_color: "brown", eye_color: null}, page: 1, sortCol: "name", sortDir: "asc"}), {
    total: 26,
    data: [
      {
	eye_color: "blue",
	gender: "female",
	hair_color: "brown",
	height: "165",
	id: 7,
	name: "Albertina Chominski",
      }, {
	eye_color: "brown",
	gender: "female",
	hair_color: "brown",
	height: "180",
	id: 26,
	name: "Anna-diane Milthorpe",
      }, {
	eye_color: "green",
	gender: "female",
	hair_color: "brown",
	height: "190",
	id: 23,
	name: "Betti Mignot",
      }, {
	eye_color: "hazel",
	gender: "female",
	hair_color: "brown",
	height: "178",
	id: 44,
	name: "Christiana Kembley",
      }, {
	eye_color: "blue",
	gender: "male",
	hair_color: "brown",
	height: "183",
	id: 37,
	name: "Cristiano Sawford",
      }, {
	eye_color: "blue",
	gender: "male",
	hair_color: "brown",
	height: "175",
	id: 16,
	name: "Dale Piccard",
      }, {
	eye_color: "black",
	gender: "female",
	hair_color: "brown",
	height: "122",
	id: 46,
	name: "Flori Dixson",
      }, {
	eye_color: "blue",
	gender: "female",
	hair_color: "brown",
	height: "196",
	id: 34,
	name: "Gillian Weld",
      }, {
	eye_color: "brown",
	gender: "female",
	hair_color: "brown",
	height: "180",
	id: 28,
	name: "Herminia Miell",
      }, {
	eye_color: "green",
	gender: "female",
	hair_color: "brown",
	height: "224",
	id: 35,
	name: "Lina Ditzel",
      }
    ]
  });
});

test("filter case insensitive", t => {
  t.deepEqual(Index.page({filters: {name: "albertina", eye_color: null}, page: 1, sortCol: "name", sortDir: "asc"}), {
    total: 1,
    data: [
      {
	eye_color: "blue",
	gender: "female",
	hair_color: "brown",
	height: "165",
	id: 7,
	name: "Albertina Chominski",
      }
    ]
  });
});
