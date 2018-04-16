import test from "ava";
import People from "../src/people";

test("check file", t => {
  t.deepEqual(People.length, 46);
});
