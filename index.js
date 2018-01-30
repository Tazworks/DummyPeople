import People from "./people";
import { filter, orderBy } from "lodash";

module.exports = {
  page({filters, page, sortCol, sortDir}) {
    let start = (page - 1) * 10;
    let end = page * 10;
    const data = filter(People, (person) => {
      let flag = true;
      filters.forEach(({name, values}) => {
        let matches = false;
        values.forEach((value) => {
          if(person[name].indexOf(value) > -1) {
            matches = true;
          }
        });
        if(!matches) {
          flag = false;
        }
      });

      return(flag);
    });
    return({
      total: data.length,
      data: orderBy(data, [sortCol], [sortDir]).slice(start, end)
    });
  }
};
