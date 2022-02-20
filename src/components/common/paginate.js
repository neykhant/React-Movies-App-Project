//jshint ignore:start
import _ from 'lodash';

export function paginate(data, currentPage, pageSize){
    const start = currentPage * pageSize - pageSize;
    return  _(data).slice(start).take(pageSize).value();
    // console.log(allMovies);
}