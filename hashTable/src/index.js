class HashTable {
  constructor(length) {
    this.table = new Array(length);
    this.length = this.table.length;
  }
  hash(key) {
    if (typeof key === 'number') {
      return key % this.length;
    } else if (typeof key === 'string') {
      let res = 0;

      for (let i = 0; i < key.length; i++) {
        res += key.charCodeAt(i);
      }
      return res % this.length;
    }
  }

  add(keys, val) {
    const keyRes = this.hash(keys);

    if (this.table[keyRes]) {
      const duplicateElement = this.table[keyRes];

      if (duplicateElement.key !== keys) {
        this.table.push({ 'key': keys, 'value': val });
      }

      if (duplicateElement.key === keys) {
        this.table[keyRes].value = [duplicateElement.value, ...[val]];
      }
    } else {
      this.table[keyRes] = { 'key': keys, 'value': val };
    }
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


const myHT = new HashTable(10);

myHT.add('Dean', 'dean@gemail.com');
myHT.add('Megan', 'megan@gemail.com');
myHT.add('Dane', 'dane@gemail.com');
myHT.add('Dean', 'deanmachine@gemail.com');

console.log(myHT);


// export default HashTable;