import * as user from './user';
import * as answer from './answer';
import * as article from './article';
import * as indexList from './index_list'
// import * as comments from './comments';


function Service() {
    Object.keys(user).map(item => {
        this[item] = user[item];
    })
    Object.keys(answer).map(item => {
      this[item] = answer[item];
    })

    Object.keys(article).map(item => {
         this[item] = article[item];
    })

    Object.keys(indexList).map(item => {
        this[item] = indexList[item];
   })
}
export default new Service();
