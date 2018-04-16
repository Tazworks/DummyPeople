import test from "ava";
import Index from "../src/index";

test("global filter", t => {
  t.deepEqual(Index.page({filters: [{name: "global", values: ["A"]}], page: 1, sortCol: "name", sortDir: "asc"}), {
    total: 5,
    data: [
      {
        id: 7,
         name: "Albertina Chominski",
         height: "165",
         hair_color: "brown",
         eye_color: "blue",
         gender: "female"
      }, {
        id: 21,
         name: "Alys Gee",
         height: "183",
         hair_color: "black",
         eye_color: "brown",
         gender: "female"
      }, {
        id: 26,
         name: "Anna-diane Milthorpe",
         height: "180",
         hair_color: "brown",
         eye_color: "brown",
         gender: "female"
      }, { id: 32,
         name: "Aviva Kalb",
         height: "191",
         hair_color: "black",
         eye_color: "blue",
         gender: "female"
      }, {
        id: 14,
         name: "Lu Andrysek",
         height: "180",
         hair_color: "brown",
         eye_color: "brown",
         gender: "female"
      }
    ]
  });
});
