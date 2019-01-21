class HashTable {
  constructor(length) {
    this.table = new Array(length);
    this.length = this.table.length;
  }
  hash(key) {
    if (typeof key === 'number') {
      return key % this.length;
    }

    let res = 0;

    for (let i = 0; i < key.length; i++) {
      res += key.charCodeAt(i);
    }
    return res % this.length;
  }


  add(keys, val) {
    const keyRes = this.hash(keys);
    let res = null;

    if (this.table[keyRes] && this.table[keyRes].key === keys) {
      const { key, value } = this.table[keyRes];


      if (value instanceof Array) {
        res = value.forEach(item => {
          if (item === val) {
            return 1;
          } });

        if (!res) {
          return;
        }
        value.push(val);
      } else {
        this.table[keyRes].value = [...[value], ...[val]];
      }
    } else if (this.table[keyRes] && this.table[keyRes].key !== keys) {
      let i = keyRes + 1;
      const { length } = this.table;

      while (i < length) {
        if (this.table[i] === undefined) {
          i += 1;
        } else {
          if (this.table[i].key === keys) {
            const { key, value } = this.table[i];

            if (value instanceof Array) {
              res = value.forEach(item => {
                if (item === val) {
                  return 1;
                } });

              if (!res) {
                return;
              }
              value.push(val);
              return;
            } else {
              this.table[i].value = [...[value], ...[val]];
              return;
            }
          }
          i += 1;
        }
      }

      this.table[keyRes + 1] = ({ 'key': keys, 'value': val });
    } else {
      this.table[keyRes] = { 'key': keys, 'value': val };
    }
  }

  remove(key) {
    const { length } = this.table;
    let i = 0;

    while (i < length) {
      if (this.table[i] === undefined) {
        i += 1;
      } else {
        if (this.table[i].key === key) {
          delete this.table[i];
        }
        i += 1;
      }
    }
  }

  find(key) {
    let result = null;
    this.table.forEach(item => {
      if (item.key === key) {
        result = item;
      }
    });
    return result;
  }
}

// export default HashTable;
const myHT = new HashTable(10);
myHT.add('Dean', 'dean@gemail.com');
myHT.add('Megan', 'megan@gemail.com');
myHT.add('Dean', 'deanmachine@gemail.com');
myHT.add('Dane', 'dane@gemail.com');
myHT.add('Dean', 'emzil@gemail.com');
myHT.add('Dean', 'emzil@gemail.com');
myHT.add('Dane', 'dane@gemail.com');
myHT.add('Dane', 'dane@gemail.com');
myHT.add('Dane', 'dane@gemail.com');

console.log(myHT);

