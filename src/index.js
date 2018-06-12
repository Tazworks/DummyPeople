import People from "./people";
import { cloneDeep, filter, isEmpty, isNil, orderBy } from "lodash";

module.exports = {
  inList(data, value) {
    let flag = false;
    for(let i = 0; i < data.length; i++) {
      if(data[i]["value"] === value) {
        flag = true;
        break;
      }
    }
    return(flag);
  },

  filterPage({column, filter}) {
    let data = [];
    cloneDeep(People).forEach((person) => {
      if(isNil(filter) || isEmpty(filter) || person[column].indexOf(filter) > -1) {
        if(!this.inList(data, person[column])) {
          data.push({
            id: person.id,
            value: person[column]
          });
        }
      }
    });

    return({
      total: data.length,
      data: orderBy(data, ["value"], ["asc"]).slice(0, 10)
    });
  },

  page({filters, page, sortCol, sortDir}) {
    let start = (page - 1) * 10;
    let end = page * 10;
    const data = filter(People, (person) => {
      let flag = true;
      for(let key in filters) {
        let matches = false;
        if(!isNil(person[key])) {
          if(person[key].indexOf(filters[key]) > -1) {
            matches = true;
          }
        } else {
          for(var personKey in person) {
            if(typeof(person[personKey]) === "string" && person[personKey].indexOf(filters[key]) > -1) {
              matches = true;
            }
          }
        }
        if(!matches) {
          flag = false;
        }
      }

      return(flag);
    });

    return({
      total: data.length,
      data: orderBy(data, [sortCol], [sortDir]).slice(start, end)
    });
  }
};
