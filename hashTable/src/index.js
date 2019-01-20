class HashTable {
  constructor(length) {
    this.table = new Array(length);
    this.length = this.table.length;
  }
  hash(key) {
    if (typeof key === 'number') {
      return key % this.length;
    } else if (typeof key === 'string' && key.length < 2) {
      return key.charCodeAt(0) % this.length;
    } else if (typeof key === 'string' && key.length >= 2) {
      let res = 0;

      for (let i = 0; i < key.length; i++) {
        res += key.charCodeAt(i);
      }
      return res % this.length;
    }
  }
  add(key, val) {
    const keyRes = this.hash(key);

    if (this.table[keyRes]) {
      if (this.table[keyRes].key === key) {
        this.table[keyRes] = { key, 'value': [...this.table[keyRes].value, ...val] };
      } else if (this.table[keyRes].key !== key) {
        this.table[keyRes + 1] = { key, 'value': val };
      }
    }

    this.table[keyRes] = { key, 'value': val };
  }
  remove(key) {
    const keyRes = this.hash(key);

    delete this.table[keyRes];
  }
  find(key) {
    const keyRes = this.hash(key);

    return this.table[keyRes];
  }
}


const myHT = new HashTable(5);

myHT.add('Dean', 'dean@gemail.com');
myHT.add('Megan', 'megan@gemail.com');
myHT.add('Dane', 'dane@gemail.com');
myHT.add('Dean', 'deanmachine@gemail.com');

console.log(myHT);


// export default HashTable;