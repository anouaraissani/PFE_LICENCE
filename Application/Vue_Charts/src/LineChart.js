
import axios from 'axios';
const url = 'http://localhost:3000/Enseignants';

/* eslint-disable no-async-promise-executor */

class Ens_Grd {
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
          const base=[gr, nb]
          resolve(
            base.map((get) => ({
              ...get,
            }))
          );
        } catch (err) {
          reject(err);
        }
      });
    }
}

  export default  Ens_Grd ;