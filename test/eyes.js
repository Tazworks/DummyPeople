import test from "ava";
import Index from "../src/index";

test("filter eyes", t => {
  t.deepEqual(Index.filterPage({column: "eye_color", filter: null}), {
    total: 6,
    data: [
      {
	id: 15,
	value: "black",
      }, {
	id: 1,
	value: "blue",
      }, {
	id: 10,
	value: "blue-gray",
      }, {
	id: 2,
	value: "brown",
      }, {
	id: 23,
	value: "green"
      }, {
	id: 17,
	value: "hazel",
      }
    ]
  });
});

test("filter eyes starting with b", t => {
  t.deepEqual(Index.filterPage({column: "eye_color", filter: "b"}), {
    total: 4,
    data: [
      {
	id: 15,
	value: "black",
      }, {
	id: 1,
	value: "blue",
      }, {
	id: 10,
	value: "blue-gray",
      }, {
	id: 2,
	value: "brown",
      }
    ]
  });
});
