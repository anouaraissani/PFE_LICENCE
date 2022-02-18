import axios from 'axios';
const url = 'http://localhost:3010/Enseignants';

/* eslint-disable no-async-promise-executor */

class Enseignement {
    // get posts
    static getEns() {
        let nb = [];
        let gr=[];
        return new Promise(async (resolve, reject) => {
        try {
          const res = await axios.get(url);
          const data = res.data;
          data.forEach(row => {
            nb.push(row.count)
            gr.push(row.grade);
        })
          const base = [nb, gr];
          resolve(base);    
        } catch (err) {
          reject(err);
        }
      });
}
}
export default Enseignement;