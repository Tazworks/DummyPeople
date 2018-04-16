import test from "ava";
import Index from "../src/index";

test("complex filter", t => {
  t.deepEqual(Index.page({filters: {eye_color: "green", hair_color: "brown"}, page: 1, sortCol: "name", sortDir: "asc"}), {
    total: 3,
    data: [
      {
	eye_color: "green",
	gender: "female",
	hair_color: "brown",
	height: "190",
	id: 23,
	name: "Betti Mignot",
      }, {
	eye_color: "green",
	gender: "female",
	hair_color: "brown",
	height: "224",
	id: 35,
	name: "Lina Ditzel",
      }, {
	eye_color: "green",
	gender: "male",
	hair_color: "brown",
	height: "180",
	id: 43,
	name: "Markus Desouza",
      }
    ]
  });
});
