import test from "ava";
import Index from "../src/index";

test("page 1", t => {
  t.deepEqual(Index.page({filters: [], page: 1, sortCol: "name", sortDir: "asc"}), {
    total: 46,
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
	hair_color: "black",
	height: "183",
	id: 21,
	name: "Alys Gee",
      }, {
	eye_color: "brown",
	gender: "female",
	hair_color: "brown",
	height: "180",
	id: 26,
	name: "Anna-diane Milthorpe",
      }, {
	eye_color: "blue",
	gender: "female",
	hair_color: "black",
	height: "191",
	id: 32,
	name: "Aviva Kalb",
      }, {
	eye_color: "green",
	gender: "female",
	hair_color: "brown",
	height: "190",
	id: 23,
	name: "Betti Mignot",
      }, {
	eye_color: "brown",
	gender: "female",
	hair_color: "black",
	height: "167",
	id: 2,
	name: "Bobinette Manz",
      }, {
	eye_color: "hazel",
	gender: "female",
	hair_color: "brown",
	height: "178",
	id: 44,
	name: "Christiana Kembley",
      }, {
	eye_color: "blue-gray",
	gender: "female",
	hair_color: "auburn, white",
	height: "182",
	id: 10,
	name: "Colleen Gomme",
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
      }
    ]
  });
});

test("page 2", t => {
  t.deepEqual(Index.page({filters: [], page: 2, sortCol: "name", sortDir: "asc"}), {
    total: 46,
    data: [
      {
	eye_color: "blue",
	gender: "female",
	hair_color: "blonde",
	height: "172",
	id: 1,
	name: "Delphine Balloch",
      }, {
	eye_color: "brown",
	gender: "male",
	hair_color: "white",
	height: "166",
	id: 19,
	name: "Duky MacGauhy",
      }, {
	eye_color: "blue",
	gender: "male",
	hair_color: "auburn",
	height: "150",
	id: 27,
	name: "Durand Conrard",
      }, {
	eye_color: "blue",
	gender: "male",
	hair_color: "blonde",
	height: "188",
	id: 11,
	name: "Emerson Panchen",
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
	eye_color: "brown",
	gender: "female",
	hair_color: "black",
	height: "137",
	id: 38,
	name: "Joane Langlois",
      }, {
	eye_color: "brown",
	gender: "male",
	hair_color: "blonde",
	height: "202",
	id: 4,
	name: "Jory Coram",
      }, {
	eye_color: "brown",
	gender: "female",
	hair_color: "black",
	height: "163",
	id: 41,
	name: "Kirsten Lummus",
      }
    ]
  });
});
